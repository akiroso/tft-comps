const { readFile } = require('../services/file');
const Champion = require('../classes/champion');

const parseChampion = (item) => {
    const { champion, cost, traits } = item;
    return new Champion(champion, cost, traits);
};

const ChampionsData = readFile('./resources/champions.json').map((item) => {
    return champ = parseChampion(item);
});

module.exports = ChampionsData;