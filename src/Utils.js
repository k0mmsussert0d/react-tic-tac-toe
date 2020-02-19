const Utils = {
    range: (start, stop) =>
        Array.from({ length: stop - start + 1 }, (_, i) => start + i)
};

export default Utils;
