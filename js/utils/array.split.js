export default arraySplit = (arr, splitters, unique = false) => {
    const results = [];
    splitters.forEach(() => {
        results.push([]);
    });

    arr.forEach((item, idx) => {
        for (let i in splitters) {
            const splitter = splitters[i];
            if (splitter(item, idx, arr)) {
                results[i].push(item);

                if (unique === true) {
                    return;
                }
            }
        }
    });

    return results;
}
