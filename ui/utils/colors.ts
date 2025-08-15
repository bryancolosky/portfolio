export type Colors =
  | 'maroon'
  | 'dark-red'
  | 'red'
  | 'light-red'
  | 'washed-red'
  | 'rust'
  | 'orange'
  | 'tangerine'
  | 'gold'
  | 'brown'
  | 'yellow'
  | 'light-yellow'
  | 'washed-yellow'
  | 'forest'
  | 'dark-green'
  | 'olive'
  | 'green'
  | 'lime'
  | 'light-green'
  | 'washed-green'
  | 'navy'
  | 'dark-blue'
  | 'blue'
  | 'aqua'
  | 'light-blue'
  | 'lightest-blue'
  | 'washed-blue'
  | 'purple'
  | 'light-purple'
  | 'lightest-purple'
  | 'washed-purple'
  | 'dark-pink'
  | 'fuchsia'
  | 'hot-pink'
  | 'pink'
  | 'light-pink'
  | 'lightest-pink'
  | 'washed-pink'
  | 'black'
  | 'near-black'
  | 'dark-gray'
  | 'mid-gray'
  | 'gray'
  | 'silver'
  | 'light-silver'
  | 'moon-gray'
  | 'light-gray'
  | 'near-white'
  | 'white';

export function hexToRGB(hex: string): { r: number; g: number; b: number } {
  hex = hex.replace('#', '');

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return { r, g, b };
}

export function nearestColor(
  targetColor: string,
  colorArray: string[]
): string {
  let closestDistance: number | null = null;
  let closestColor: string | null = null;

  const { r: r1, g: g1, b: b1 } = hexToRGB(targetColor);

  colorArray.forEach((color) => {
    const { r: r2, g: g2, b: b2 } = hexToRGB(color);

    const distance = Math.sqrt(
      (r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2
    );

    if (closestDistance === null || distance < closestDistance) {
      closestDistance = distance;
      closestColor = color;
    }
  });

  return closestColor!;
}
