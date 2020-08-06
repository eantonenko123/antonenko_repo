const distributionNew = require('../page/distributionNew');

describe('Distribution for dice', function () {

    it('Distribution', async function () {
        await distributionNew.checkDistributionNew(1,6 , 100); // distribution for 1 dice
        // await distributionNew.checkDistributionNew(2, 12); // distribution for 2 dices (total roll points is a sum of 2 dices)
    });
});
