const analyser = require('./source/services/analyser');
const { champions, traits, levels } = require('./source/data');

for (let size = 1; size <= 3; size++) {
    console.log(`possible traits for team size ${size}`);
    const comps = analyser.findComps(champions, traits, levels, size);
    console.log(comps);
}