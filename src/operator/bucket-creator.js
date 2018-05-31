/**
 * Creates bin from the data and the supplied config.
 *
 * @param {Array} data - The input data.
 * @param {Object} config - The config object.
 * @param {number} config.binSize - The size of the bin.
 * @param {number} config.numOfBins - The number of bins to be created.
 * @return {Array} Returns an array of created bins.
 */
export function createBuckets(data, config) {
    const { binSize, numOfBins } = config;

    let min = data[0];
    let max = data[0];
    data.forEach((val) => {
        min = val < min ? val : min;
        max = val > max ? val : max;
    });
    max += 5;
    min = config.origin || min;

    const bins = [];
    if (binSize) {
        const count = Math.ceil((max - min) / binSize);
        for (let i = 0; i < count; i += 1) {
            const start = min + (i * binSize);
            const end = min + ((i + 1) * binSize);
            bins.push({
                start,
                end,
                label: `${start}-${end}`,
            });
        }
        return bins;
    }
    const count = numOfBins;
    const size = Math.ceil((max - min) / numOfBins);
    for (let i = 0; i < count; i += 1) {
        const start = min + (i * size);
        let end = min + ((i + 1) * size);
        bins.push({
            start,
            end,
            label: `${start}-${end}`,
        });
    }
    return bins;
}
