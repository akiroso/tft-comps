const fs = require('fs');
const Champion = require('./source/classes/champion');
const Trait = require('./source/classes/trait');
const analyser = require('./source/services/analyser');

const parseChampion = (item) => {
    const { champion, cost, traits } = item;
    return new Champion(champion, cost, traits);
};

const parseTrait = (item) => {
    const { name, sets } = item;
    return new Trait(name, sets);
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

const champions = readChampions();
const traits = readTraits();

// console.log(traits);
for (let size = 1; size <= 12; size++) {
    console.log(`possible comps for team size ${size}`);
    const comps = analyser.findComps(champions, traits, size);
    console.log(comps);
    console.log('================================================');
}