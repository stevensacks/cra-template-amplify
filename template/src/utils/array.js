import {gen, rng} from './rng';

export const mapToId = array => (array ? array.map(({id}) => id) : array);

export const getRange = (start, end) =>
    Array(end - start + 1)
        .fill(start)
        .map((value, i) => value + i);

export const arrayToMap = (data = [], key = 'id') =>
    data.reduce((acc, item) => {
        acc[item[key]] = item;
        return acc;
    }, {});

// Durstenfeld Shuffle
export const shuffle = (array, seed = Date.now()) => {
    const result = [...array];
    const len = result.length - 1;
    for (let i = len; i > -1; i--) {
        const j = rng(seed, len + 1);
        [result[i], result[j]] = [result[j], result[i]];
        seed = gen(seed);
    }
    return result;
};
