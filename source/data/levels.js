const Level = require('../classes/level');
const { readFile } = require('../services/file');

const parseLevel = (item) => {
    return new Level(item.level, item.tier1 || 0, item.tier2 || 0, item.tier3 || 0, item.tier4 || 0, item.tier5 || 0);
};

function readLevels() {
    const levelsData = readFile('./resources/levels.json');
    return levelsData.map((item) => {
        return parseLevel(item);
    });
}

const Levels = readLevels();

module.exports = Levels;