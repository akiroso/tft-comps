const { findComps, optmizedComps } = require('../analyser');
const { champions, traits, levels } = require('../../data');

test('should find no comps on level 1', () => {
    expect(findComps(champions, traits, levels, 1)).toEqual({});
});

test('should find no comps on level 2', () => {
    const comps = findComps(champions, traits, levels, 2);
    expect(Object.keys(comps)).toContain('Druid');
    expect(Object.keys(comps)).toContain('Warden');
});

test('should find 3 sized comps on level 3', () => {
    const comps = findComps(champions, traits, levels, 3);
    expect(Object.keys(comps)).toContain('Berserker');
    expect(Object.keys(comps)).toContain('Shadow');
    expect(Object.keys(comps)).toContain('Light');
    expect(Object.keys(comps)).toContain('Inferno');
});

test("shouldn't find poison before level 5", () => {
    const level4 = findComps(champions, traits, levels, 4);
    const level5 = findComps(champions, traits, levels, 5);
    expect(Object.keys(level4)).not.toContain('Poison');
    expect(Object.keys(level5)).toContain('Poison');
});

test("shouldn't find crystal before level 5", () => {
    const level4 = findComps(champions, traits, levels, 4);
    const level5 = findComps(champions, traits, levels, 5);
    expect(Object.keys(level4)).not.toContain('Crystal');
    expect(Object.keys(level5)).toContain('Crystal');
});

test("shouldn't find mystic before level 5", () => {
    const level4 = findComps(champions, traits, levels, 4);
    const level5 = findComps(champions, traits, levels, 5);
    expect(Object.keys(level4)).not.toContain('Mystic');
    expect(Object.keys(level5)).toContain('Mystic');
});

test("shouldn't find alchemist before level 7", () => {
    const level6 = findComps(champions, traits, levels, 6);
    const level7 = findComps(champions, traits, levels, 7);
    expect(Object.keys(level6)).not.toContain('Alchemist');
    expect(Object.keys(level7)).toContain('Alchemist');
});

test("volibear should appear in 3 comps by level 3", () => {
    const data = optmizedComps(champions, traits, levels, 3);
    expect(data).toEqual('Qiyana');
});