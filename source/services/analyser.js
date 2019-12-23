
const findComps = (champions, traits, teamSize) => {
    const possibleComps = {};
    const possibleTraits = traits.filter((trait) => {
        const sets = trait.sets;
        return sets.find((element) => element <= teamSize);
    });
    // console.log(possibleTraits.map((trait) => trait.name));
    possibleTraits.forEach(trait => {
        const possibleChampions = champions.filter((champion) => {
            // console.debug(`Trying trait ${trait.name} for champion ${champion.name}`);
            return champion.traits.includes(trait.name);
        });
        // console.log(possibleChampions);
        possibleComps[trait.name] = possibleChampions.map((champion) => champion.name);
    });
    return possibleComps;
}

module.exports = {
    findComps,
}