function filterChampions(champions, trait, levels, teamSize) {
    return champions.filter((champion) => {
        const isChampionOfTrait = champion.traits.includes(trait.name);
        const currentLevel = levels[teamSize - 1];
        const canChampionBeBought = currentLevel.probabilities[champion.cost] > 0;
        return isChampionOfTrait && canChampionBeBought;
    });
}

function filterTraits(traits, teamSize) {
    return traits.filter((trait) => {
        const sets = trait.sets;
        return sets.find((element) => element <= teamSize);
    });
}

const findComps = (champions, traits, levels, teamSize) => {
    const possibleComps = {};
    const possibleTraits = filterTraits(traits, teamSize);
    possibleTraits.forEach(trait => {
        const possibleChampions = filterChampions(champions, trait, levels, teamSize);
        const minPool = Math.min.apply(Math, trait.sets);
        if (possibleChampions.length >= minPool) {
            possibleComps[trait.name] = possibleChampions.map((champion) => champion.name);
        }
    });
    return possibleComps;
}

const optmizedComps = function(champions, traits, levels, teamSize) {
    const possibleComps = findComps(champions, traits, levels, teamSize);
    console.log(possibleComps);
    const compsArrays = Object.values(possibleComps);
    const allChamps = compsArrays.flatMap((comp) => comp);
    console.log(allChamps);
    const counts = {};
    allChamps.forEach((champ) => {
        let count = counts[champ] || 0;
        count++;
        counts[champ] = count;
    });
    console.log(counts);
    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
}

module.exports = {
    findComps,
    optmizedComps,
}
