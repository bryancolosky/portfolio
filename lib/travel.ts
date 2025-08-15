export type Point = google.maps.LatLngLiteral & { key: string };
export type Props = { points: Point[] };

export type RawLocation = [string, number, number];

export type Location = {
  key: string;
  name: string;
  lat: number;
  lng: number;
};

export const locations: RawLocation[] = [
  ['Brooklyn, NY', 40.661329, -73.9482107],
  ['Apple Valley, CA', 34.5513402, -117.2674049],
  ['Seattle, WA', 47.6129235, -122.5072124],
  ['Berlin, Germany', 52.5067292, 13.2595848],
  ['Sultanahmet Camii, Turkey', 41.0054096, 28.9742389],
  ['San Luis Obispo, CA', 35.2724891, -120.7115855]
];

export const travelData: Location[] = locations.map(([name, lat, lng]) => ({
  name,
  lat,
  lng,
  key: JSON.stringify({ name, lat, lng })
}));
