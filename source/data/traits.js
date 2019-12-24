const { readFile } = require('../services/file');
const Trait = require('../classes/trait');

const parseTrait = (item) => {
    const { name, sets } = item;
    return new Trait(name, sets);
};

function readTraits() {
    const traitsData = readFile('./resources/traits.json');
    return traitsData.map((item) => {
        return parseTrait(item);
    });
}

const Traits = readTraits();

module.exports = Traits;