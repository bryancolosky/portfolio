// 🔌 Vendors
// 🔩 Components
// 🎨 Styles
import { nearestColor } from '@/ui/utils';
import { colors, colorsArray } from '@/ui/colors';

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
export { colors, colorsArray } from '@/ui/colors';

export function getTheme(color: string) {
  let themeColorName: string;
  let closestColor: string = nearestColor(`${color}`, colorsArray);
  if (
    color.match(
      /^(red|orange|yellow|green|blue|teal|indigo|violet|black|white)$/
    )
  ) {
    themeColorName = `${color}`;
  } else {
    switch (closestColor) {
      // Red Theme
      case `${colors.maroon}`:
      case `${colors.darkRed}`:
      case `${colors.red}`:
      case `${colors.lightRed}`:
      case `${colors.washedRed}`: {
        themeColorName = 'red';
        break;
      }
      // Orange Theme
      case `${colors.gold}`:
      case `${colors.tangerine}`:
      case `${colors.orange}`:
      case `${colors.rust}`: {
        themeColorName = 'orange';
        break;
      }
      // Yellow Theme
      case `${colors.brown}`:
      case `${colors.yellow}`:
      case `${colors.lightYellow}`:
      case `${colors.washedYellow}`: {
        themeColorName = 'yellow';
        break;
      }
      // Green Theme
      case `${colors.forest}`:
      case `${colors.darkGreen}`:
      case `${colors.olive}`:
      case `${colors.lime}`:
      case `${colors.green}`:
      case `${colors.lightGreen}`:
      case `${colors.washedGreen}`: {
        themeColorName = 'green';
        break;
      }
      // Blue
      case `${colors.navy}`:
      case `${colors.darkBlue}`:
      case `${colors.blue}`:

      case `${colors.lightBlue}`:
      case `${colors.lightestBlue}`:
      case `${colors.washedBlue}`: {
        themeColorName = 'blue';
        break;
      }

      // Teal
      case `${colors.teal}`:
      case `${colors.aqua}`: {
        themeColorName = 'teal';
        break;
      }

      // Indigo Theme
      case `${colors.purple}`:
      case `${colors.lightPurple}`:
      case `${colors.lightestPurple}`:
      case `${colors.washedPurple}`: {
        themeColorName = 'indigo';
        break;
      }
      // Violet Theme
      case `${colors.darkPink}`:
      case `${colors.fuchsia}`:
      case `${colors.hotPink}`:
      case `${colors.pink}`:
      case `${colors.lightPink}`:
      case `${colors.lightestPink}`:
      case `${colors.washedPink}`: {
        themeColorName = 'violet';
        break;
      }
      // Black Theme
      case `${colors.black}`:
      case `${colors.nearBlack}`:
      case `${colors.darkGray}`:
      case `${colors.midGray}`:
      case `${colors.gray}`:
      case `${colors.silver}`: {
        themeColorName = 'black';
        break;
      }

      // White Theme
      case `${colors.white}`:
      case `${colors.nearWhite}`:
      case `${colors.lightGray}`:
      case `${colors.moonGray}`:
      case `${colors.lightSilver}`: {
        themeColorName = 'white';
        break;
      }

      default: {
        themeColorName = `${color}`;
        break;
      }
    }
  }
  return themeColorName;
}

export default getTheme;
