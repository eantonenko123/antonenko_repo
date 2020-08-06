const agent = require('../helper/agentHelper');

let percentPerOne;
let percentDeviationMinus;
let percentDeviationPlus;
let arrPercent = {};
let counter = 0;

const distributionNew = function () {
    this.checkDistributionNew = async function (min = 1, max = 6, num = 500, deviation = 2.5) {
        let diff = (min -1);
        let amount = (max - diff);
            await agent
                .get(`https://www.random.org/integers/?num=${num}&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`)
                .then((res) => {
                    let number = res.text;
                    let numberArray = number.split('\n').filter(item => item !== '');
                    console.log("numberArray", numberArray);

                    /**Calculation*/
                    percentPerOne = (100 / num).toFixed(2);
                    percentDeviationMinus = ((100 / amount) - deviation).toFixed(2);
                    percentDeviationPlus = ((100 / amount) + deviation).toFixed(2);
                    console.log("percentPerOne %", percentPerOne);
                    console.log("percentDeviationMinus", percentDeviationMinus);
                    console.log("percentDeviationPlus", percentDeviationPlus);

                    /** Distribution count */
                    let numberCount = {};
                    numberArray.forEach(function(a){
                        if (numberCount[a] !== undefined)
                            ++numberCount[a];
                        else
                            numberCount[a] = 1;
                    });
                    console.log('numberCount', numberCount);

                    /** Calculate percent per count */
                    for (let key in numberCount){
                        arrPercent[key] = (numberCount[key] * percentPerOne).toFixed(2);
                        /**Variant with arr*/
                        // arrPercent.push(percentPerNumber);
                    }
                    console.log('arrPercent', arrPercent);

                    /**Variant with arr*/
                    // for (let i = 0; i < arrPercent.length; i++) {
                    //     counter = i;
                    //     if (arrPercent[i] < percentDeviationMinus || arrPercent[i] > percentDeviationPlus) {
                    //         console.log("Not Good Distribution", arrPercent[i]);
                    //         break;
                    //     }
                    // }

                    for (let key in arrPercent) {
                        ++counter;
                        if (arrPercent[key] < percentDeviationMinus || arrPercent[key] > percentDeviationPlus) {
                            console.log("Not Good Distribution for " + key + " is " + arrPercent[key]);
                            break;
                        }
                    }
                    let length = Object.keys(arrPercent).length;
                    console.log('Length', Object.keys(arrPercent).length);
                    console.log("counter", counter);

                    /**Variant with arr*/
                    // if (counter === arrPercent.length - 1) {
                    //     console.log("Good distribution");
                    // }

                    if (counter === length) {
                        console.log("Good distribution");
                    }

                });

        };

    // this.checkDistributionNew(1,6); // for run from page
};

module.exports = new distributionNew();
