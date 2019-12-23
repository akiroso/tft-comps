const fs = require('fs');
const Champion = require('./classes/champion');
const Trait = require('./classes/trait');

const parseChampion = (item) => {
    return new Champion(item.champion, item.cost, item.traits);
};

const parseTrait = (item) => {
    return new Trait(item.name, item.sets);
};

try {
    const champions = JSON.parse(fs.readFileSync('./resources/champions.json', 'utf8'));
    const traits = JSON.parse(fs.readFileSync('./resources/traits.json', 'utf8'));
    
    champions.map((item) => {
        const champ = parseChampion(item);
        console.log(champ);
    });
    traits.map((item) => {
        const trait = parseTrait(item);
        console.log(trait);
    });
} catch (err) {
    console.error(err)
}

