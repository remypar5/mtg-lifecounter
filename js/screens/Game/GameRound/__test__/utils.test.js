import { splitInHalf, makePairs } from '../utils';

describe('GameRound utils', () => {
    let arr;

    beforeEach(() => {
        arr = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(1).toBe(1);
    });

    describe('splitInHalf()', () => {
        it('splits the given array in half', () => {
            const result = splitInHalf(arr);

            expect(result).toHaveLength(2);
            expect(result[0]).toEqual([1, 2, 3, 4]);
            expect(result[1]).toEqual([5, 6, 7, 8]);
        });

        it('has 1 item more in the first result array with an uneven number of items', () => {
            arr.push(9);
            const result = splitInHalf(arr);

            expect(result[0]).toHaveLength(5);
            expect(result[1]).toHaveLength(4);
        });
    });

    describe('makePairs()', () => {
        it('splits the given array into pairs of 2', () => {
            const result = makePairs(arr);

            expect(result).toHaveLength(4);
            result.forEach((pair) => {
                expect(pair).toHaveLength(2);
            });
            expect(result[0]).toEqual([1, 2]);
            expect(result[1]).toEqual([3, 4]);
            expect(result[2]).toEqual([5, 6]);
            expect(result[3]).toEqual([7, 8]);
        });

        it('has a last pair with 1 single item with an uneven number of items', () => {
            arr.push(9);
            const result = makePairs(arr);

            expect(result).toHaveLength(5);
            expect(result[0]).toEqual([1, 2]);
            expect(result[1]).toEqual([3, 4]);
            expect(result[2]).toEqual([5, 6]);
            expect(result[3]).toEqual([7, 8]);
            expect(result[4]).toEqual([9]);
        });
    });
});
