import { Platform } from 'react-native';

// custom color name
let theme1 = '#81B78D'; // dark sea green
let theme2 = '#679C73'; // russian green
let theme3 = '#404040'; // onyx grey

// default style settings
let tabBgColors = 'white';    // tab background color
let tabActiveColors = theme2;
let tabInactiveColors = 'black';
let tabFontSize = 12;
let allFontFamilies = ['Kohinoor Bangla', 'Arial'];
let fontFamilies = Platform.OS === 'android'? allFontFamilies[0] : allFontFamilies[1];
let tabIconSize = 30;

export {tabBgColors, tabActiveColors, tabInactiveColors,
    tabFontSize, fontFamilies, tabIconSize,
    theme1, theme2, theme3 };
