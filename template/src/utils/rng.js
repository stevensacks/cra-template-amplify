// Linear Congruential Generator
// newSeed : Int -> Int
export const gen = seed => (1103515245 * seed + 12345) & 0x7fffffff;
// calcSeed : Int -> Float
export const calc = seed => (seed >>> 16) / 0x7fff;
// rng : Int -> Float
export const rng = (seed = Date.now(), value = 0) =>
    ~~(value * calc(gen(seed)));
