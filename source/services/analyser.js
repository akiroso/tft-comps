
const findComps = (champions, traits, levels, teamSize) => {
    const possibleComps = {};
    const possibleTraits = traits.filter((trait) => {
        const sets = trait.sets;
        return sets.find((element) => element <= teamSize);
    });
    possibleTraits.forEach(trait => {
        const possibleChampions = champions.filter((champion) => {
            const isChampionOfTrait = champion.traits.includes(trait.name);
            const currentLevel = levels[teamSize - 1];
            const canChampionBeBought = currentLevel.probabilities[champion.cost] > 0;
            return isChampionOfTrait && canChampionBeBought;
        });
        if (possibleChampions.length >= Math.min.apply(Math, trait.sets)) {
            possibleComps[trait.name] = possibleChampions.map((champion) => champion.name);
        }
    });
    return possibleComps;
}

module.exports = {
    findComps,
}