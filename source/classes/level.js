class Level {
    constructor(number, tier1, tier2, tier3, tier4, tier5) {
        this.number = number;
        this.probabilities = {
            1: tier1,
            2: tier2,
            3: tier3,
            4: tier4,
            5: tier5
        }
    }
}

module.exports = Level;