const arraySplit = (arr, splitters, unique = false) => {
    const results = [];
    splitters.forEach(() => {
        results.push([]);
    });

    arr.forEach((item, idx) => {
        splitters.some((splitter, i) => {
            if (splitter(item, idx, arr)) {
                results[i].push(item);

                return unique;
            }

            return false;
        });
    });

    return results;
};

export default arraySplit;
