import flattenStyles from '../flattenStyles';

describe('flattenStyles()', () => {
    const defaultStyle = {
        width: '50%',
    };

    it('should flatten the provided values into a single style object', () => {
        const style = flattenStyles([defaultStyle, null, { height: '50%' }, false]);

        expect(style).toEqual({
            width: '50%',
            height: '50%',
        });
    });
});
