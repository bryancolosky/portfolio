'use client';

// 🔌 Vendors
import React, {
  PropsWithChildren,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState
} from 'react';

// 🔩 Components

export type ApiParams = {
  key: string;
  v?: string;
  language?: string;
  region?: string;
  libraries?: string;
  solutionChannel?: string;
  authReferrerPolicy?: string;
};

declare global {
  interface Window {
    __googleMapsCallback__?: () => void;
    __googleMapsApiParams__?: string;
  }
}

const MAPS_API_BASE_URL = 'https://maps.googleapis.com/maps/api/js';

export class GoogleMapsApiLoader {
  static async load(params: ApiParams): Promise<void> {
    const libraries = params.libraries ? params.libraries.split(',') : [];
    const serializedParams = this.serializeParams(params);

    if (!window.google?.maps?.importLibrary) {
      window.__googleMapsApiParams__ = serializedParams;
      this.initImportLibrary(params);
    }

    if (
      window.__googleMapsApiParams__ &&
      window.__googleMapsApiParams__ !== serializedParams
    ) {
      console.warn(
        `The maps API has already been loaded with different ` +
          `parameters and will not be loaded again. Refresh the page for ` +
          `new values to have effect.`
      );
    }

    for (const lib of ['maps', ...libraries]) {
      await google.maps.importLibrary(lib);
    }
  }

  private static serializeParams(params: ApiParams): string {
    return [
      params.v,
      params.key,
      params.language,
      params.region,
      params.authReferrerPolicy,
      params.solutionChannel
    ].join('/');
  }

  private static initImportLibrary(params: ApiParams) {
    if (!window.google) window.google = {} as never;
    if (!window.google.maps) window.google.maps = {} as never;

    if (window.google.maps['importLibrary']) {
      console.warn('initImportLibrary can only be called once.', params);

      return;
    }

    let apiPromise: Promise<void> | null = null;

    const loadApi = (library: string) => {
      if (apiPromise) return apiPromise;

      apiPromise = new Promise((resolve, reject) => {
        const scriptElement = document.createElement('script');
        const urlParams = new URLSearchParams();

        for (const [key, value] of Object.entries(params)) {
          const urlParamName = key.replace(
            /[A-Z]/g,
            (t) => '_' + t[0].toLowerCase()
          );
          urlParams.set(urlParamName, value);
        }
        urlParams.set('libraries', library);
        urlParams.set('callback', '__googleMapsCallback__');
        scriptElement.src = MAPS_API_BASE_URL + `?` + urlParams.toString();

        window.__googleMapsCallback__ = resolve;

        scriptElement.onerror = () =>
          reject(new Error('The Google Maps JavaScript API could not load.'));
        scriptElement.nonce =
          (document.querySelector('script[nonce]') as HTMLScriptElement)
            ?.nonce || '';

        document.head.append(scriptElement);
      });

      return apiPromise;
    };

    google.maps.importLibrary = (libraryName) =>
      loadApi(libraryName).then(() => google.maps.importLibrary(libraryName));
  }
}

export enum APILoadingStatus {
  NOT_LOADED = 'NOT_LOADED',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  FAILED = 'FAILED'
}

export const { NOT_LOADED, LOADING, LOADED, FAILED } = APILoadingStatus;

type ImportLibraryFunction = typeof google.maps.importLibrary;
type GoogleMapsLibrary = Awaited<ReturnType<ImportLibraryFunction>>;
type LoadedLibraries = { [name: string]: GoogleMapsLibrary };

export function useApiLoadingStatus(): APILoadingStatus {
  return (
    useContext(GoogleMapsAPIProviderContext)?.status ||
    APILoadingStatus.NOT_LOADED
  );
}

export function useApiIsLoaded(): boolean {
  const status = useApiLoadingStatus();

  return status === APILoadingStatus.LOADED;
}
export interface GoogleMapsAPIProviderContextValue {
  status: APILoadingStatus;
  loadedLibraries: LoadedLibraries;
  importLibrary: typeof google.maps.importLibrary;
  mapInstances: Record<string, google.maps.Map>;
  addMapInstance: (map: google.maps.Map, id?: string) => void;
  removeMapInstance: (id?: string) => void;
  clearMapInstances: () => void;
}

export const GoogleMapsAPIProviderContext =
  React.createContext<GoogleMapsAPIProviderContextValue | null>(null);

export type APIProviderProps = {
  apiKey: string;
  libraries?: Array<string>;
  version?: string;
  region?: string;
  language?: string;
  authReferrerPolicy?: string;
  onLoad?: () => void;
};

export function useMapInstances() {
  const [mapInstances, setMapInstances] = useState<
    Record<string, google.maps.Map>
  >({});

  const addMapInstance = (mapInstance: google.maps.Map, id = 'default') => {
    setMapInstances((instances) => ({ ...instances, [id]: mapInstance }));
  };

  const removeMapInstance = (id = 'default') => {
    setMapInstances(({ [id]: _, ...remaining }) => remaining);
  };

  const clearMapInstances = () => {
    setMapInstances({});
  };

  return { mapInstances, addMapInstance, removeMapInstance, clearMapInstances };
}

export function useGoogleMapsApiLoader(props: APIProviderProps) {
  const { onLoad, apiKey, libraries = [], ...otherApiParams } = props;

  const [status, setStatus] = useState<APILoadingStatus>(NOT_LOADED);
  const [loadedLibraries, addLoadedLibrary] = useReducer(
    (
      loadedLibraries: LoadedLibraries,
      action: { name: keyof LoadedLibraries; value: LoadedLibraries[string] }
    ) => {
      return { ...loadedLibraries, [action.name]: action.value };
    },
    {}
  );

  const librariesString = useMemo(() => libraries?.join(','), [libraries]);
  const serializedParams = useMemo(
    () => JSON.stringify(otherApiParams),
    [otherApiParams]
  );

  const importLibrary: typeof google.maps.importLibrary = useCallback(
    async (name: string) => {
      if (loadedLibraries[name]) {
        return loadedLibraries[name];
      }

      if (!google?.maps?.importLibrary) {
        throw new Error(
          '[api-provider-internal] importLibrary was called before ' +
            'google.maps.importLibrary was defined.'
        );
      }

      const res = await window.google.maps.importLibrary(name);
      addLoadedLibrary({ name, value: res });

      return res;
    },
    []
  );

  useEffect(() => {
    setStatus(LOADING);

    (async () => {
      try {
        await GoogleMapsApiLoader.load({
          key: apiKey,
          libraries: librariesString,
          ...otherApiParams
        });

        setStatus(LOADED);

        for (const name of ['core', 'maps', ...libraries]) {
          await importLibrary(name);
        }

        if (onLoad) {
          onLoad();
        }
      } catch (error) {
        console.error('<ApiProvider> failed to load Google Maps API', error);
        setStatus(FAILED);
      }
    })();
  }, [apiKey, librariesString, serializedParams]);

  return {
    status,
    loadedLibraries,
    importLibrary
  };
}

export const GoogleMapsAPIProvider = (
  props: PropsWithChildren<APIProviderProps>
): ReactElement | null => {
  const { children, ...loaderProps } = props;
  const { mapInstances, addMapInstance, removeMapInstance, clearMapInstances } =
    useMapInstances();

  const { status, loadedLibraries, importLibrary } =
    useGoogleMapsApiLoader(loaderProps);

  return (
    <GoogleMapsAPIProviderContext.Provider
      value={{
        mapInstances,
        addMapInstance,
        removeMapInstance,
        clearMapInstances,
        status,
        loadedLibraries,
        importLibrary
      }}
    >
      {children}
    </GoogleMapsAPIProviderContext.Provider>
  );
};

export default GoogleMapsAPIProvider;
