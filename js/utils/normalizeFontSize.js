import { PixelRatio, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const baseQuantifier = SCREEN_WIDTH / 160;
const deviceDensity = PixelRatio.get();
const deviceFontScale = PixelRatio.getFontScale();
const fontScaleQuantifiers = Object.freeze({
    mdpi: 1.0, // 160dpi+
    hdpi: 1.1, // 240dpi+
    xhdpi: 1.2, // 320dpi+
    xxhdpi: 1.3, // 480dpi+
    xxxhdpi: 1.4, // 560dpi+
});

export const calculateQuantifier = (density) => {
    if (density <= 1) {
        return 'mdpi';
    } else if (density <= 1.5) {
        return 'hdpi';
    } else if (density <= 2) {
        return 'xhdpi';
    } else if (density <= 3) {
        return 'xxhdpi';
    } else if (density <= 3.5) {
        return 'xxxhdpi';
    }
    return 'xhdpi';
};

export const getBaseFontScale = () => (
    fontScaleQuantifiers[calculateQuantifier(deviceDensity)] * deviceFontScale
);

export default (size) => PixelRatio.roundToNearestPixel(size * baseQuantifier * getBaseFontScale());
