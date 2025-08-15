'use client';

// 🔌 Vendors
import React, {
  Children,
  Fragment,
  PropsWithChildren,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import type { Ref } from 'react';

// 🔩 Components
import { GoogleMapsContext } from '@/ui/components/GoogleMap';
import {
  GoogleMapsAPIProviderContext,
  useApiIsLoaded
} from '@/ui/components/GoogleMapsProvider';

// 🎨 Styles

// 🤖 Config

type MarkerEventProps = {
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onDrag?: (e: google.maps.MapMouseEvent) => void;
  onDragStart?: (e: google.maps.MapMouseEvent) => void;
  onDragEnd?: (e: google.maps.MapMouseEvent) => void;
  onMouseOver?: (e: google.maps.MapMouseEvent) => void;
  onMouseOut?: (e: google.maps.MapMouseEvent) => void;
};

export type MarkerProps = google.maps.MarkerOptions & MarkerEventProps;

export type MarkerRef = Ref<google.maps.Marker | null>;

interface ApiLibraries {
  core: google.maps.CoreLibrary;
  maps: google.maps.MapsLibrary;
  places: google.maps.PlacesLibrary;
  geocoding: google.maps.GeocodingLibrary;
  routes: google.maps.RoutesLibrary;
  marker: google.maps.MarkerLibrary;
  geometry: google.maps.GeometryLibrary;
  elevation: google.maps.ElevationLibrary;
  streetView: google.maps.StreetViewLibrary;
  journeySharing: google.maps.JourneySharingLibrary;
  drawing: google.maps.DrawingLibrary;
  visualization: google.maps.VisualizationLibrary;
}

export function useMapsLibrary<
  K extends keyof ApiLibraries,
  V extends ApiLibraries[K]
>(name: K): V | null;

export function useMapsLibrary(name: string) {
  const apiIsLoaded = useApiIsLoaded();
  const ctx = useContext(GoogleMapsAPIProviderContext);

  useEffect(() => {
    if (!apiIsLoaded || !ctx) return;
    void ctx.importLibrary(name);
  }, [apiIsLoaded, ctx?.importLibrary]);

  return ctx?.loadedLibraries[name] || null;
}

export interface AdvancedMarkerContextValue {
  marker: google.maps.marker.AdvancedMarkerElement;
}

export const AdvancedMarkerContext =
  React.createContext<AdvancedMarkerContextValue | null>(null);

type AdvancedMarkerEventProps = {
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onDrag?: (e: google.maps.MapMouseEvent) => void;
  onDragStart?: (e: google.maps.MapMouseEvent) => void;
  onDragEnd?: (e: google.maps.MapMouseEvent) => void;
};

export type AdvancedMarkerProps = PropsWithChildren<
  Omit<google.maps.marker.AdvancedMarkerElementOptions, 'gmpDraggable'> &
  AdvancedMarkerEventProps & {
    className?: string;
    draggable?: boolean;
  }
>;

export type AdvancedMarkerRef = google.maps.marker.AdvancedMarkerElement | null;
function useAdvancedMarker(props: AdvancedMarkerProps) {
  const [marker, setMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);
  const [contentContainer, setContentContainer] =
    useState<HTMLDivElement | null>(null);

  const map = useContext(GoogleMapsContext)?.map;
  const markerLibrary = useMapsLibrary('marker');

  const {
    children,
    className,
    onClick,
    onDrag,
    onDragStart,
    onDragEnd,
    collisionBehavior,
    draggable,
    position,
    title,
    zIndex
  } = props;

  const numChilds = Children.count(children);

  useEffect(() => {
    if (!map || !markerLibrary) return;

    const newMarker = new markerLibrary.AdvancedMarkerElement();
    newMarker.map = map;

    setMarker(newMarker);

    if (numChilds > 0) {
      const el = document.createElement('div');
      if (className) el.classList.add(className);

      newMarker.content = el;

      setContentContainer(el);
    }

    return () => {
      newMarker.map = null;
      setMarker(null);
      setContentContainer(null);
    };
  }, [map, markerLibrary, numChilds]);

  useEffect(() => {
    if (!marker) return;

    const m = marker;

    if (onClick) marker.addListener('click', onClick);
    if (onDrag) marker.addListener('drag', onDrag);
    if (onDragStart) marker.addListener('dragstart', onDragStart);
    if (onDragEnd) marker.addListener('dragend', onDragEnd);

    if ((onDrag || onDragStart || onDragEnd) && !draggable) {
      console.warn(
        'You need to set the marker to draggable to listen to drag-events.'
      );
    }

    return () => {
      google.maps.event.clearInstanceListeners(m);
    };
  }, [marker, draggable, onClick, onDragStart, onDrag, onDragEnd]);

  useEffect(() => {
    if (!marker) return;

    if (position !== undefined) marker.position = position;
    if (draggable !== undefined) marker.gmpDraggable = draggable;
    if (collisionBehavior !== undefined)
      marker.collisionBehavior = collisionBehavior;
    if (zIndex !== undefined) marker.zIndex = zIndex;
    if (typeof title === 'string') marker.title = title;
  }, [marker, position, draggable, collisionBehavior, zIndex, title]);

  return [marker, contentContainer] as const;
}

export const AdvancedMarker = forwardRef(
  (props: AdvancedMarkerProps, ref: Ref<AdvancedMarkerRef>) => {
    const { children } = props;
    const [marker, contentContainer] = useAdvancedMarker(props);

    useImperativeHandle(ref, () => (marker! && marker), [marker]);

    if (!marker) {
      return null;
    }

    return (
      <AdvancedMarkerContext.Provider value={{ marker }}>
        {contentContainer !== null && createPortal(children, contentContainer)}
      </AdvancedMarkerContext.Provider>
    );
  }
);

export function useAdvancedMarkerRef() {
  const [marker, setMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);

  const refCallback = useCallback((m: AdvancedMarkerRef | null) => {
    setMarker(m);
  }, []);

  return [refCallback, marker] as const;
}

function useMarker(props: MarkerProps) {
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);
  const map = useContext(GoogleMapsContext)?.map;

  const {
    onClick,
    onDrag,
    onDragStart,
    onDragEnd,
    onMouseOver,
    onMouseOut,
    ...markerOptions
  } = props;

  const { position, draggable } = markerOptions;

  useEffect(() => {
    if (!map) {
      if (map === undefined)
        console.error('<Marker> has to be inside a Map component.');

      return;
    }

    const newMarker = new google.maps.Marker(markerOptions);
    newMarker.setMap(map);
    setMarker(newMarker);

    return () => {
      newMarker.setMap(null);
      setMarker(null);
    };
  }, [map]);

  useEffect(() => {
    if (!marker) return;

    const m = marker;

    if (onClick) m.addListener('click', onClick);
    if (onDrag) m.addListener('drag', onDrag);
    if (onDragStart) m.addListener('dragstart', onDragStart);
    if (onDragEnd) m.addListener('dragend', onDragEnd);
    if (onMouseOver) m.addListener('mouseover', onMouseOver);
    if (onMouseOut) m.addListener('mouseout', onMouseOut);

    marker.setDraggable(Boolean(draggable));

    return () => {
      google.maps.event.clearInstanceListeners(m);
    };
  }, [
    marker,
    draggable,
    onClick,
    onDrag,
    onDragStart,
    onDragEnd,
    onMouseOver,
    onMouseOut
  ]);

  useEffect(() => {
    if (!marker) return;
    if (markerOptions) marker.setOptions(markerOptions);
  }, [marker, markerOptions]);

  useEffect(() => {
    if (draggable || !position || !marker) return;
    marker.setPosition(position);
  }, [draggable, position, marker]);

  return marker;
}

export const Marker = forwardRef((props: MarkerProps, ref: MarkerRef) => {
  const marker = useMarker(props);

  useImperativeHandle(ref, () => marker!, [marker]);

  return <Fragment />;
});

export function useMarkerRef() {
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);

  const refCallback = useCallback((m: google.maps.Marker | null) => {
    setMarker(m);
  }, []);

  return [refCallback, marker] as const;
}

export default Marker;