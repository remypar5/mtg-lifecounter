import { arraySplit } from '../../../utils';

const splitInHalf = (arr) => {
    const half = Math.ceil(arr.length / 2);

    return arraySplit(arr, [(item, idx) => idx < half, (item, idx) => idx >= half], true);
};

const makePairs = (arr) => arr.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
        result.push(array.slice(index, index + 2));
    }
    return result;
}, []);

export {
    splitInHalf,
    makePairs,
};
