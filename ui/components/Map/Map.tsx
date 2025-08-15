'use client';

// 🔌 Vendors
import React, { Fragment, useCallback, useRef, useState } from 'react';

import { useMarkerRef } from '@vis.gl/react-google-maps';

// 🔩 Components
import {
  getSystemAppAppearance,
  useAppAppearance,
  UseAppAppearanceProps
} from '../AppAppearance';

import GoogleMapsAPIProvider from '../GoogleMapsProvider';
import { GoogleMap } from '../GoogleMap';
import Marker from '../Markers/elements';
import { Point } from '../Markers';

// 🎨 Styles
import styles from './Map.module.scss';

export type MapConfig = {
  id: string;
  label: string;
  mapId?: string;
  mapTypeId?: string;
  styles?: google.maps.MapTypeStyle[];
};

export interface GoogleMapsContextValue {
  map: google.maps.Map | null;
}
export const GoogleMapsContext =
  React.createContext<GoogleMapsContextValue | null>(null);

const API_KEY = process.env.GOOGLE_MAPS_API_KEY as string;

const MapTypeId = {
  HYBRID: 'hybrid',
  ROADMAP: 'roadmap',
  SATELLITE: 'satellite',
  TERRAIN: 'terrain'
};

const ZoomControlPostionType = {
  INLINE_START_BLOCK_END: 1.0
};

const MarkerShapeType = {
  CIRCLE: 0.0
};

const GoogleMapStylesLight = [
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#f9f9f9' }]
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{ color: '#f5f5f5' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#eeeeee' }]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#e8fdf5' }]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#ffcbdc' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#fbf1a9' }]
  },
  { elementType: 'labels.text.stroke', stylers: [{ visibility: 'off' }] },
  {
    elementType: 'labels.text.fill',
    stylers: [{ visibility: 'off' }, { color: '#aaaaaa' }]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{ color: '#aaaaaa' }]
  },
  { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#9eebcf' }]
  }
] as google.maps.MapTypeStyle[];

const GoogleMapStylesDark = [
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#000000' }]
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{ color: '#111111' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#333333' }]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#137752' }]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#85144b' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#614500' }]
  },
  { elementType: 'labels.text.stroke', stylers: [{ visibility: 'off' }] },
  {
    elementType: 'labels.text.fill',
    stylers: [{ visibility: 'off' }, { color: '#777777' }]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{ color: '#5e2ca5' }]
  },
  { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#3d9970' }]
  }
] as google.maps.MapTypeStyle[];

const MarkerColorLight = '#f012be';
const MarkerColorDark = '#ffb700';

const MAP_CONFIGS: MapConfig[] = [
  {
    id: 'gm',
    label: 'Bryan Colosky',
    mapTypeId: MapTypeId.ROADMAP
  }
];

const DefaultLatLng = { lat: 40.661329, lng: -73.9482107 };
const ZoomControlPostion: google.maps.ControlPosition =
  ZoomControlPostionType.INLINE_START_BLOCK_END;

const MapOptions = {
  backgroundColor: 'transparent',
  disableDefaultUI: true,
  zoomControl: false,
  zoomControlOptions: { position: ZoomControlPostion },
  zoom: 12.5,
  scrollwheel: false,
  draggable: false
};

const MARKER_CONFIG: google.maps.SymbolPath = MarkerShapeType.CIRCLE;

const Map = ({
  id,
  center = DefaultLatLng,
  zoom = MapOptions.zoom,
  keyLocation = DefaultLatLng,
  markers,
  marks
}: {
  id?: string;
  center?: google.maps.LatLngLiteral;
  zoom?: number;
  keyLocation?: google.maps.LatLngLiteral;
  markers?: Point[];
  marks?: Point[];
}) => {
  const ref = useRef(null);
  const [mapConfig, setMapConfig] = useState<MapConfig>(MAP_CONFIGS[0]);
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [markerRef, marker] = useMarkerRef();

  const { appearance }: UseAppAppearanceProps = useAppAppearance();

  function isDark(appearance: string): boolean {
    if (appearance === 'system') {
      appearance = getSystemAppAppearance();
      if (appearance != 'light') {
        return true;
      } else return false;
    }
    if (appearance != 'light') {
      return true;
    } else return false;
  }

  const applyMarkerColor = useCallback(
    (markerColor: any) => {
      let color = markerColor;
      if (!color) return;
      return isDark(color) == true ? MarkerColorDark : MarkerColorLight;
    },
    [appearance]
  );

  const applyMapMode = useCallback(
    (appearanceMode: any) => {
      let mode = appearanceMode;
      if (!mode) return;
      return isDark(mode) == true ? GoogleMapStylesDark : GoogleMapStylesLight;
    },
    [appearance]
  );
  return (
    <Fragment>
      <div ref={ref} id={mapConfig.id} className={`${styles.map}`}>
        <GoogleMapsAPIProvider apiKey={API_KEY}>
          <GoogleMap
            // mapId={mapConfig.mapId}
            mapTypeId={mapConfig.mapTypeId}
            styles={applyMapMode(appearance)}
            gestureHandling={'greedy'}
            center={center}
            {...MapOptions}
            zoom={zoom}
          >
            {keyLocation && !marks ? (
              <Marker
                ref={markerRef}
                position={keyLocation}
                icon={{
                  path: MARKER_CONFIG,
                  strokeWeight: 12,
                  strokeColor: applyMarkerColor(appearance),
                  scale: 16
                }}
              />
            ) : null}
            {/* {markers && <Markers markers={markers} />} */}
            {marks! &&
              marks.map((mark, index) => (
                <Marker
                  ref={markerRef}
                  key={index}
                  position={mark}
                  icon={{
                    path: MARKER_CONFIG,
                    strokeWeight: 6,
                    strokeColor: applyMarkerColor(appearance),
                    scale: 3
                  }}
                />
              ))}
          </GoogleMap>
        </GoogleMapsAPIProvider>
      </div>
    </Fragment>
  );
};

export default Map;
