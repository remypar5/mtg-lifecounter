import splitArray from '../array.split';

function isEven(x) {
    return x % 2 === 0;
}

function isOdd(x) {
    return x % 2 === 1;
}

function isThird(x) {
    return x > 0 && x % 3 === 0;
}

describe('test utilities', () => {
    it('correctly checks if input for isEven() is an even number', () => {
        expect(isEven(0)).toBe(true);
        expect(isEven(1)).toBe(false);
        expect(isEven(2)).toBe(true);
    });

    it('correctly checks if input for isOdd() is an odd number', () => {
        expect(isOdd(0)).toBe(false);
        expect(isOdd(1)).toBe(true);
        expect(isOdd(2)).toBe(false);
    });

    it('correctly checks if input for isThird() is divisible by 3', () => {
        expect(isThird(0)).toBe(false);
        expect(isThird(1)).toBe(false);
        expect(isThird(2)).toBe(false);
        expect(isThird(3)).toBe(true);
    });
});

describe('splitArray()', () => {
    it('splits an array into arrays based on the provided splitters', () => {
        const arr = '0123456789'.split('');
        const split = splitArray(arr, [isEven, isOdd]);

        expect(split.length).toBe(2);
        expect(split[0]).toEqual(['0', '2', '4', '6', '8']);
        expect(split[1]).toEqual(['1', '3', '5', '7', '9']);
    });

    it('splits on unique values', () => {
        const arr = '0123456789'.split('');
        const split = splitArray(arr, [isEven, isOdd, isThird], false);

        expect(split[0]).toEqual(['0', '2', '4', '6', '8']);
        expect(split[1]).toEqual(['1', '3', '5', '7', '9']);
        expect(split[2]).toEqual(['3', '6', '9']);

        const splitUnique = splitArray(arr, [isEven, isOdd, isThird], true);

        expect(splitUnique[0]).toEqual(split[0]);
        expect(splitUnique[1]).toEqual(split[1]);
        expect(splitUnique[2]).toEqual([]);
    });
});
