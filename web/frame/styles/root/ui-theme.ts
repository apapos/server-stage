import type { BrandVariants, Theme } from '@fluentui/react-components';
import { createDarkTheme, createLightTheme } from '@fluentui/react-components';
interface CustomTheme {
  light: Theme
  dark: Theme
}

const myLightTheme: BrandVariants = {
  10: "#020304",
  20: "#141A1B",
  30: "#1E2B2C",
  40: "#25373A",
  50: "#2D4548",
  60: "#355256",
  70: "#3C6065",
  80: "#446F74",
  90: "#4C7D83",
  100: "#548C93",
  110: "#5D9BA4",
  120: "#65ABB4",
  130: "#6EBBC5",
  140: "#76CBD6",
  150: "#95D8E1",
  160: "#B7E4EA"

};

const myDarkTheme: BrandVariants = {
  10: "#040203",
  20: "#1D141B",
  30: "#32202D",
  40: "#42293C",
  50: "#54324C",
  60: "#663C5C",
  70: "#78456D",
  80: "#8B4F7E",
  90: "#9F5A8F",
  100: "#B364A1",
  110: "#C76EB4",
  120: "#DA7AC5",
  130: "#E18FCE",
  140: "#E8A4D7",
  150: "#EEB8E0",
  160: "#F3CCE9"
};

const lightTheme: Theme = createLightTheme(myLightTheme)

const darkTheme: Theme = createDarkTheme(myDarkTheme)


lightTheme.colorBrandBackground = myLightTheme[120];
lightTheme.colorBrandBackgroundHover = myLightTheme[100];

darkTheme.colorBrandBackground = myDarkTheme[120];
darkTheme.colorBrandBackgroundHover = myDarkTheme[100]

export const customTheme: CustomTheme = {
  light: lightTheme,
  dark: darkTheme
}