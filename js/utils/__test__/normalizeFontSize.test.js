import normalizeFontSize, { calculateQuantifier, getBaseFontScale } from '../normalizeFontSize';
import { FONT_SIZE, FONT_SIZE_TINY, FONT_SIZE_SMALL, FONT_SIZE_LARGE, FONT_SIZE_HUGE } from '../constants';

describe('calculateQuantifier()', () => {
    it('returns the correct DPI scale base on the input density', () => {
        expect(calculateQuantifier(1)).toBe('mdpi');
        expect(calculateQuantifier(1.5)).toBe('hdpi');
        expect(calculateQuantifier(2)).toBe('xhdpi');
        expect(calculateQuantifier(3)).toBe('xxhdpi');
        expect(calculateQuantifier(3.5)).toBe('xxxhdpi');
        expect(calculateQuantifier(17)).toBe('xhdpi');
    });
});

describe('getBaseFontSize()', () => {
    it('gets a font size factor based on the screen size', () => {
        // TODO: 2.4 is a magic number. I need to mock the PixelRatio and Dimensions API
        // to be able to calculate this value;
        expect(getBaseFontScale()).toBe(2.4);
    });
});

describe('normalizeFontSize()', () => {
    // TODO: Also magic numbers. No clue what they are based on
    it('creates a scaled font size based on the input', () => {
        expect(normalizeFontSize(FONT_SIZE_TINY)).toBe(90);
        expect(normalizeFontSize(FONT_SIZE_SMALL)).toBe(135);
        expect(normalizeFontSize(FONT_SIZE)).toBe(180);
        expect(normalizeFontSize(FONT_SIZE_LARGE)).toBe(225);
        expect(normalizeFontSize(FONT_SIZE_HUGE)).toBe(337.5);
    });
});
