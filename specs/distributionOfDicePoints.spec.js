const distribution = require('../page/distribution');

describe('Distribution for dice', function () {

    it('Distribution', async function () {
        await distribution.checkDistribution(); // distribution for 1 dice
        await distribution.checkDistribution(2, 12, 11, 500); // distribution for 2 dices (total roll points is a sum of 2 dices)
    });
});
