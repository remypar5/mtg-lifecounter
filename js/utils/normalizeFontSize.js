import { PixelRatio } from 'react-native';

const deviceDensity = PixelRatio.get();
const deviceFontScale = PixelRatio.getFontScale();
const fontScaleQuantifiers = Object.freeze({
    mdpi: 1.0, // 160dpi+
    hdpi: 1.1, // 240dpi+
    xhdpi: 1.6, // 320dpi+, iPhone 4-6
    xxhdpi: 1.3, // 480dpi+, iPhone 6 plus
    xxxhdpi: 1.4, // 560dpi+ (Google Nexus 6)
});

export const calculateQuantifier = (density) => {
    if (density === 1) {
        return 'mdpi';
    } else if (density === 1.5) {
        return 'hdpi';
    } else if (density === 2) {
        return 'xhdpi';
    } else if (density === 3) {
        return 'xxhdpi';
    } else if (density === 3.5) {
        return 'xxxhdpi';
    }
    return 'xhdpi';
};

export const getBaseFontScale = () => (
    fontScaleQuantifiers[calculateQuantifier(deviceDensity)] * deviceFontScale
);

const normalizeFontSize = (size) => (
    PixelRatio.roundToNearestPixel(size * getBaseFontScale())
);

export default normalizeFontSize;
