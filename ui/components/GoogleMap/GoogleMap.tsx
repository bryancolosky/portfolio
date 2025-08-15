'use client';

// 🔌 Vendors
import React, {
  CSSProperties,
  PropsWithChildren,
  Ref,
  RefObject,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react';

// 🔩 Components
import {
  GoogleMapsAPIProviderContext,
  GoogleMapsAPIProviderContextValue,
  APILoadingStatus
} from '../GoogleMapsProvider';

// 🎨 Styles
import styles from './GoogleMap.module.scss';

export type MapConfig = {
  id: string;
  label: string;
  mapId?: string;
  mapTypeId?: string;
  styles?: google.maps.MapTypeStyle[];
};

export interface GoogleMapContextValue {
  map: google.maps.Map | null;
}

export const GoogleMapsContext =
  React.createContext<GoogleMapContextValue | null>(null);

const shownMessages = new Set();

export function logErrorOnce(...args: Parameters<typeof console.error>) {
  const key = JSON.stringify(args);

  if (!shownMessages.has(key)) {
    shownMessages.add(key);

    console.error(...args);
  }
}

export function isLatLngLiteral(
  obj: unknown
): obj is google.maps.LatLngLiteral {
  if (!obj || typeof obj !== 'object') return false;
  if (!('lat' in obj && 'lng' in obj)) return false;

  return Number.isFinite(obj.lat) && Number.isFinite(obj.lng);
}

export function useDeckGLCameraUpdate(
  map: google.maps.Map | null,
  viewState: Record<string, unknown> | undefined
) {
  useLayoutEffect(() => {
    if (!map || !viewState) {
      return;
    }
    map.setOptions({
      gestureHandling: 'none',
      keyboardShortcuts: false,
      disableDefaultUI: true
    });

    const {
      latitude,
      longitude,
      bearing: heading,
      pitch: tilt,
      zoom
    } = viewState as Record<string, number>;

    map.moveCamera({
      center: { lat: latitude, lng: longitude },
      heading,
      tilt,
      zoom: zoom + 1
    });
  }, [map, viewState]);
}

export function useMapOptions(
  map: google.maps.Map | null,
  cameraStateRef: InternalCameraStateRef,
  mapProps: GoogleMapProps
) {
  const { center: rawCenter, zoom, heading, tilt, ...mapOptions } = mapProps;
  const center = rawCenter
    ? isLatLngLiteral(rawCenter)
      ? rawCenter
      : rawCenter.toJSON()
    : null;
  const lat = center && center.lat;
  const lng = center && center.lng;

  useEffect(() => {
    if (!map) return;
    const { mapId, ...opts } = mapOptions;
    map.setOptions(opts);
  }, [mapOptions]);

  useLayoutEffect(() => {
    if (!map || !Number.isFinite(lat) || !Number.isFinite(lng)) return;
    if (
      cameraStateRef.current.center.lat === lat &&
      cameraStateRef.current.center.lng === lng
    )
      return;

    map.moveCamera({ center: { lat: lat as number, lng: lng as number } });
  }, [lat, lng]);

  useLayoutEffect(() => {
    if (!map || !Number.isFinite(zoom)) return;
    if (cameraStateRef.current.zoom === zoom) return;

    map.moveCamera({ zoom: zoom as number });
  }, [zoom]);

  useLayoutEffect(() => {
    if (!map || !Number.isFinite(heading)) return;
    if (cameraStateRef.current.heading === heading) return;

    map.moveCamera({ heading: heading as number });
  }, [heading]);

  useLayoutEffect(() => {
    if (!map || !Number.isFinite(tilt)) return;
    if (cameraStateRef.current.tilt === tilt) return;

    map.moveCamera({ tilt: tilt as number });
  }, [tilt]);
}

export type InternalCameraState = {
  center: google.maps.LatLngLiteral;
  heading: number;
  tilt: number;
  zoom: number;
};

export type InternalCameraStateRef = RefObject<InternalCameraState>;

export function useInternalCameraState(): InternalCameraStateRef {
  return useRef<InternalCameraState>({
    center: { lat: 0, lng: 0 },
    heading: 0,
    tilt: 0,
    zoom: 0
  });
}

export function trackDispatchedEvent(
  ev: MapEvent,
  cameraStateRef: InternalCameraStateRef
) {
  const cameraEvent = ev as MapCameraChangedEvent;

  if (!cameraEvent.detail.center) return;
  const { center, zoom, heading, tilt } = cameraEvent.detail;

  cameraStateRef.current.center = center;
  cameraStateRef.current.heading = heading;
  cameraStateRef.current.tilt = tilt;
  cameraStateRef.current.zoom = zoom;
}

export type MapEventProps = Partial<{
  // map view state events
  onBoundsChanged: (event: MapCameraChangedEvent) => void;
  onCenterChanged: (event: MapCameraChangedEvent) => void;
  onHeadingChanged: (event: MapCameraChangedEvent) => void;
  onTiltChanged: (event: MapCameraChangedEvent) => void;
  onZoomChanged: (event: MapCameraChangedEvent) => void;
  onProjectionChanged: (event: MapCameraChangedEvent) => void;

  // mouse / touch / pointer events
  onClick: (event: MapMouseEvent) => void;
  onDblclick: (event: MapMouseEvent) => void;
  onContextmenu: (event: MapMouseEvent) => void;
  onMousemove: (event: MapMouseEvent) => void;
  onMouseover: (event: MapMouseEvent) => void;
  onMouseout: (event: MapMouseEvent) => void;
  onDrag: (event: MapEvent) => void;
  onDragend: (event: MapEvent) => void;
  onDragstart: (event: MapEvent) => void;

  // loading events
  onTilesLoaded: (event: MapEvent) => void;
  onIdle: (event: MapEvent) => void;

  // configuration events
  onIsFractionalZoomEnabledChanged: (event: MapEvent) => void;
  onMapCapabilitiesChanged: (event: MapEvent) => void;
  onMapTypeIdChanged: (event: MapEvent) => void;
  onRenderingTypeChanged: (event: MapEvent) => void;
}>;

export function useMapEvents(
  map: google.maps.Map | null,
  cameraStateRef: InternalCameraStateRef,
  props: MapEventProps
) {
  for (const propName of eventPropNames) {
    const handler = props[propName] as (ev: MapEvent) => void;
    const eventType = propNameToEventType[propName];

    useEffect(() => {
      if (!map) return;
      if (!handler) return;

      const listener = map.addListener(
        eventType,
        (ev?: google.maps.MapMouseEvent | google.maps.IconMouseEvent) => {
          const mapEvent = createMapEvent(eventType, map, ev);

          trackDispatchedEvent(mapEvent, cameraStateRef);
          handler(mapEvent);
        }
      );

      return () => listener.remove();
    }, [map, cameraStateRef, eventType, handler]);
  }
}

function createMapEvent(
  type: string,
  map: google.maps.Map,
  srcEvent?: google.maps.MapMouseEvent | google.maps.IconMouseEvent
): MapEvent {
  const ev: MapEvent = {
    type,
    map,
    detail: {},
    stoppable: false,
    stop: () => {}
  };

  if (cameraEventTypes.includes(type)) {
    const camEvent = ev as MapCameraChangedEvent;

    const center = map.getCenter();
    const zoom = map.getZoom();
    const heading = map.getHeading() || 0;
    const tilt = map.getTilt() || 0;
    const bounds = map.getBounds();

    if (!center || !bounds || !Number.isFinite(zoom)) {
      console.warn(
        '[createEvent] at least one of the values from the map ' +
          'returned undefined. This is not expected to happen. Please ' +
          'report an issue at https://github.com/visgl/react-google-maps/issues/new'
      );
    }

    camEvent.detail = {
      center: center?.toJSON() || { lat: 0, lng: 0 },
      zoom: zoom as number,
      heading: heading as number,
      tilt: tilt as number,
      bounds: bounds?.toJSON() || {
        north: 90,
        east: 180,
        south: -90,
        west: -180
      }
    };

    return camEvent;
  } else if (mouseEventTypes.includes(type)) {
    if (!srcEvent)
      throw new Error('[createEvent] mouse events must provide a srcEvent');
    const mouseEvent = ev as MapMouseEvent;

    mouseEvent.domEvent = srcEvent.domEvent;
    mouseEvent.stoppable = true;
    mouseEvent.stop = () => srcEvent.stop();

    mouseEvent.detail = {
      latLng: srcEvent.latLng?.toJSON() || null,
      placeId: (srcEvent as google.maps.IconMouseEvent).placeId
    };

    return mouseEvent;
  }

  return ev;
}

const propNameToEventType: { [prop in keyof Required<MapEventProps>]: string } =
  {
    onBoundsChanged: 'bounds_changed',
    onCenterChanged: 'center_changed',
    onClick: 'click',
    onContextmenu: 'contextmenu',
    onDblclick: 'dblclick',
    onDrag: 'drag',
    onDragend: 'dragend',
    onDragstart: 'dragstart',
    onHeadingChanged: 'heading_changed',
    onIdle: 'idle',
    onIsFractionalZoomEnabledChanged: 'isfractionalzoomenabled_changed',
    onMapCapabilitiesChanged: 'mapcapabilities_changed',
    onMapTypeIdChanged: 'maptypeid_changed',
    onMousemove: 'mousemove',
    onMouseout: 'mouseout',
    onMouseover: 'mouseover',
    onProjectionChanged: 'projection_changed',
    onRenderingTypeChanged: 'renderingtype_changed',
    onTilesLoaded: 'tilesloaded',
    onTiltChanged: 'tilt_changed',
    onZoomChanged: 'zoom_changed'
  } as const;

const cameraEventTypes = [
  'bounds_changed',
  'center_changed',
  'heading_changed',
  'projection_changed',
  'tilt_changed',
  'zoom_changed'
];

const mouseEventTypes = [
  'click',
  'contextmenu',
  'dblclick',
  'mousemove',
  'mouseout',
  'mouseover'
];

type MapEventPropName = keyof MapEventProps;
const eventPropNames = Object.keys(propNameToEventType) as MapEventPropName[];

export type MapEvent<T = unknown> = {
  type: string;
  map: google.maps.Map;
  detail: T;

  stoppable: boolean;
  stop: () => void;
  domEvent?: MouseEvent | TouchEvent | PointerEvent | KeyboardEvent | Event;
};

export type MapMouseEvent = MapEvent<{
  latLng: google.maps.LatLngLiteral | null;
  placeId: string | null;
}>;

export type MapCameraChangedEvent = MapEvent<{
  center: google.maps.LatLngLiteral;
  bounds: google.maps.LatLngBoundsLiteral;
  zoom: number;
  heading: number;
  tilt: number;
}>;

export type GoogleMapProps = google.maps.MapOptions &
  MapEventProps & {
    style?: CSSProperties;
    className?: string;
    initialBounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral;
    id?: string;
    viewport?: unknown;
    viewState?: Record<string, unknown>;
    initialViewState?: Record<string, unknown>;
  };

export const GoogleMap = (props: PropsWithChildren<GoogleMapProps>) => {
  const { children, id, className, style, viewState, viewport } = props;

  const context = useContext(GoogleMapsAPIProviderContext);

  if (!context) {
    throw new Error(
      '<GoogleMap> can only be used inside an <GoogleMapsApiProvider> component.'
    );
  }

  const [map, mapRef] = useMapInstance(props, context);
  const cameraStateRef = useInternalCameraState();
  useMapOptions(map, cameraStateRef, props);
  useMapEvents(map, cameraStateRef, props);
  useDeckGLCameraUpdate(map, viewState);

  const isViewportSet = useMemo(() => Boolean(viewport), [viewport]);
  const combinedStyle: CSSProperties = useMemo(
    () => ({
      width: '100%',
      height: '100%',
      zIndex: isViewportSet ? -1 : 0,
      ...style
    }),
    [style, isViewportSet]
  );

  return (
    <div
      ref={mapRef}
      data-testid={'map'}
      style={className ? undefined : combinedStyle}
      className={className}
      {...(id ? { id } : {})}
    >
      {map ? (
        <GoogleMapsContext.Provider value={{ map }}>
          {children}
        </GoogleMapsContext.Provider>
      ) : null}
    </div>
  );
};
GoogleMap.deckGLViewProps = true;

function useApiLoadingStatus(): APILoadingStatus {
  return (
    useContext(GoogleMapsAPIProviderContext)?.status ||
    APILoadingStatus.NOT_LOADED
  );
}

function useApiIsLoaded(): boolean {
  const status = useApiLoadingStatus();

  return status === APILoadingStatus.LOADED;
}

function useCallbackRef<T>() {
  const [el, setEl] = useState<T | null>(null);
  const ref = useCallback((value: T) => setEl(value), [setEl]);

  return [el, ref as Ref<T>] as const;
}

function useMapInstance(
  props: GoogleMapProps,
  context: GoogleMapsAPIProviderContextValue
): readonly [map: google.maps.Map | null, containerRef: Ref<HTMLDivElement>] {
  const apiIsLoaded = useApiIsLoaded();
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [container, containerRef] = useCallbackRef<HTMLDivElement>();

  const {
    id,
    initialBounds,

    ...mapOptions
  } = props;

  useEffect(() => {
    if (!container || !apiIsLoaded) return;

    const { addMapInstance, removeMapInstance } = context;
    const newMap = new google.maps.Map(container, mapOptions);
    setMap(newMap);
    addMapInstance(newMap, id);

    if (initialBounds) {
      newMap.fitBounds(initialBounds);
    }

    return () => {
      if (!container || !apiIsLoaded) return;

      google.maps.event.clearInstanceListeners(newMap);

      setMap(null);
      removeMapInstance(id);
    };
  }, [id, container, apiIsLoaded, props.mapId]);

  useEffect(() => {
    if (!id) return;

    const { mapInstances } = context;

    if (mapInstances[id] && mapInstances[id] !== map) {
      logErrorOnce(
        `The map id '${id}' seems to have been used multiple times. ` +
          'This can lead to unexpected problems when accessing the maps. ' +
          'Please use unique ids for all <Map> components.'
      );
    }
  }, [id, context, map]);

  return [map, containerRef] as const;
}

export const useGoogleMap = (
  id: string | null = null
): google.maps.Map | null => {
  const ctx = useContext(GoogleMapsAPIProviderContext);
  const { map } = useContext(GoogleMapsContext) || {};

  if (ctx === null) {
    logErrorOnce(
      'useMap(): failed to retrieve APIProviderContext. ' +
        'Make sure that the <APIProvider> component exists and that the ' +
        'component you are calling `useMap()` from is a sibling of the ' +
        '<APIProvider>.'
    );

    return null;
  }

  const { mapInstances } = ctx;

  if (id !== null) return mapInstances[id] || null;

  if (map) return map;

  return mapInstances['default'] || null;
};

export default Map;
