import {arrayToMap, getRange, mapToId, shuffle} from './array';
import {gen} from './rng';

describe('array', () => {
    test('getRange should work', () => {
        expect(getRange(0, 5)).toEqual([0, 1, 2, 3, 4, 5]);
        expect(getRange(3, 5)).toEqual([3, 4, 5]);
    });

    test('mapToId should work', () => {
        const testArray = [
            {id: 'foo', value: 'FOO'},
            {id: 'bar', value: 'BAR'},
        ];
        expect(mapToId(testArray)).toEqual(['foo', 'bar']);
    });

    test('arrayToMap should work', () => {
        const testArray = [
            {id: 'foo', value: 'FOO'},
            {id: 'bar', value: 'BAR'},
        ];
        expect(arrayToMap(testArray)).toEqual({
            foo: {id: 'foo', value: 'FOO'},
            bar: {id: 'bar', value: 'BAR'},
        });
    });

    test('shuffle should be consistent with 7', () => {
        const array = getRange(0, 6);
        let seed = 123;
        const first = [0, 4, 3, 1, 2, 6, 5];
        const second = [1, 0, 3, 4, 5, 2, 6];
        const third = [0, 2, 1, 3, 4, 6, 5];
        expect(shuffle(array, seed)).toEqual(first);
        seed = gen(seed);
        expect(shuffle(array, seed)).toEqual(second);
        seed = gen(seed);
        expect(shuffle(array, seed)).toEqual(third);
    });

    test('shuffle should be consistent with 13', () => {
        const array = getRange(0, 12);
        let seed = 123;
        const first = [8, 3, 2, 5, 4, 10, 0, 6, 11, 1, 7, 9, 12];
        const second = [12, 2, 5, 8, 11, 4, 7, 0, 6, 1, 9, 10, 3];
        const third = [2, 1, 8, 5, 6, 7, 4, 10, 0, 3, 9, 11, 12];
        expect(shuffle(array, seed)).toEqual(first);
        seed = gen(seed);
        expect(shuffle(array, seed)).toEqual(second);
        seed = gen(seed);
        expect(shuffle(array, seed)).toEqual(third);
    });
});
