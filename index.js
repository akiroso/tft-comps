const fs = require('fs');
const Champion = require('./source/classes/champion');
const Trait = require('./source/classes/trait');
const Level = require('./source/classes/level');
const analyser = require('./source/services/analyser');

const parseChampion = (item) => {
    const { champion, cost, traits } = item;
    return new Champion(champion, cost, traits);
};

const parseTrait = (item) => {
    const { name, sets } = item;
    return new Trait(name, sets);
};

const parseLevel = (item) => {
    return new Level(item.level, item.tier1 || 0, item.tier2 || 0, item.tier3 || 0, item.tier4 || 0, item.tier5 || 0);
};

function readFile(filePath) {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    catch (err) {
        console.error(err);
    }
    return [];
}

function readChampions(champions) {
    const championsData = readFile('./resources/champions.json');
    return championsData.map((item) => {
        return champ = parseChampion(item);
    });
}

function readTraits() {
    const traitsData = readFile('./resources/traits.json');
    return traitsData.map((item) => {
        return parseTrait(item);
    });
}

function readLevels() {
    const levelsData = readFile('./resources/levels.json');
    return levelsData.map((item) => {
        return parseLevel(item);
    });
}

const champions = readChampions();
const traits = readTraits();
const levels = readLevels();

// console.log(levels);
for (let size = 1; size <= 9; size++) {
    console.log(`possible traits for team size ${size}`);
    const comps = analyser.findComps(champions, traits, levels, size);
    console.log(comps);
    console.log('================================================');
}