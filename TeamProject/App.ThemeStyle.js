import { Platform } from 'react-native';

// custom color name
let theme1 = '#0EA518'; // light green
let theme2 = '#005501'; // dark green
let theme3 = '#FFBF00'; // ember

// default style settings
let tabBgColors = theme1;    // tab background color
let tabActiveColors = 'white';
let tabInactiveColors = 'black';
let tabFontSize = 12;
let allFontFamilies = ['Kohinoor Bangla', 'Arial'];
let fontFamilies = Platform.OS === 'android'? allFontFamilies[0] : allFontFamilies[1];
let tabIconSize = 30;

export {tabBgColors, tabActiveColors, tabInactiveColors,
    tabFontSize, fontFamilies, tabIconSize,
    theme1, theme2, theme3 };
