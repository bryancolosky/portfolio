'use client';

// 🔌 Vendors
import React, { Fragment, useEffect, useRef, useState } from 'react';

import { MarkerClusterer } from '@googlemaps/markerclusterer';
import type { Marker } from '@googlemaps/markerclusterer';

// 🔩 Components
import { useGoogleMap } from '../GoogleMap';
import { AdvancedMarker } from './elements/Marker';

// 🎨 Styles

// 🤖 Configs
import { travelData } from '@/lib/travel';

export type Point = google.maps.LatLngLiteral & { key: string };
export type Points = { points: Point[] };

export const MarkerCluster = ({ points }: Points) => {
  const map = useGoogleMap();
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
  const clusterer = useRef<MarkerClusterer | null>(null);

  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return (
    <Fragment>
      {points.map((point) => (
        <AdvancedMarker
          position={point}
          key={point.key}
          ref={(marker) => setMarkerRef(marker, point.key)}
        />
      ))}
    </Fragment>
  );
};

const Markers = ({ markers = travelData }: { markers?: Point[] }) => {
  return (
    <Fragment>
      <MarkerCluster points={markers} />
    </Fragment>
  );
};

export default Markers;
