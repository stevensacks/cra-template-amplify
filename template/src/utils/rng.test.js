import {calc, gen, rng} from './rng';

describe('random number generator', () => {
    it('gen should be consistent', () => {
        let seed = 123;
        expect(gen(seed)).toBe(440917656);
        seed = gen(seed);
        expect(gen(seed)).toBe(1476151040);
        seed = gen(seed);
        expect(gen(seed)).toBe(1041001216);
        seed = gen(seed);
        expect(gen(seed)).toBe(1977859840);
        seed = gen(seed);
        expect(gen(seed)).toBe(1344963328);
        seed = gen(seed);
        expect(gen(seed)).toBe(1745090304);
        seed = gen(seed);
        expect(gen(seed)).toBe(150100736);
        seed = gen(seed);
        expect(gen(seed)).toBe(149614400);
    });

    it('calc should be consistent', () => {
        let seed = gen(123);
        expect(calc(seed)).toBe(0.2052980132450331);
        seed = gen(seed);
        expect(calc(seed)).toBe(0.6873989074373608);
        seed = gen(seed);
        expect(calc(seed)).toBe(0.4847560045167394);
        seed = gen(seed);
        expect(calc(seed)).toBe(0.9210180974761193);
        seed = gen(seed);
        expect(calc(seed)).toBe(0.6263008514664143);
        seed = gen(seed);
        expect(calc(seed)).toBe(0.8126163518173772);
        seed = gen(seed);
        expect(calc(seed)).toBe(0.06988738670003357);
        seed = gen(seed);
        expect(calc(seed)).toBe(0.0696432386242256);
    });

    it('rng should be consistent', () => {
        expect(rng()).toBe(0);
        let seed = 123;
        expect(rng(seed, 7)).toBe(1);
        seed = gen(seed);
        expect(rng(seed, 7)).toBe(4);
        seed = gen(seed);
        expect(rng(seed, 7)).toBe(3);
        seed = gen(seed);
        expect(rng(seed, 7)).toBe(6);
        seed = gen(seed);
        expect(rng(seed, 7)).toBe(4);
        seed = gen(seed);
        expect(rng(seed, 7)).toBe(5);
        seed = gen(seed);
        expect(rng(seed, 7)).toBe(0);
        seed = gen(seed);
        expect(rng(seed, 7)).toBe(0);
    });
});
