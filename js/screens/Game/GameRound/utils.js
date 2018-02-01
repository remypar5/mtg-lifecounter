import arraySplit from '../../../utils';

const splitInHalf = (arr) => {
    const half = Math.ceil(arr.length / 2);

    return arraySplit(arr, [(item, idx) => idx < half, (item, idx) => idx >= half], true);
};

export default splitInHalf;
