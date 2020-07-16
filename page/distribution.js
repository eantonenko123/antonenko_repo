const agent = require('../helper/agentHelper');

let percentPerOne;
let percentDeviationMinus;
let percentDeviationPlus;
let percentArray = [];
let counter = 0;

const distribution = function () {
    this.checkDistribution = async function (min = 1, max = 6, numberOfCombinations = 6, step = 200) {
        for (let i = 100; i < 5000; i += step) {
            await agent
                .get(`https://www.random.org/integers/?num=${i}&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`)
                .then((res) => {
                    let number = res.text;
                    let numberArray = number.split('\n');
                    let numberOneLength = numberArray.filter(item => item === '1').length;
                    let numberTwoLength = numberArray.filter(item => item === '2').length;
                    let numberThreeLength = numberArray.filter(item => item === '3').length;
                    let numberFourLength = numberArray.filter(item => item === '4').length;
                    let numberFiveLength = numberArray.filter(item => item === '5').length;
                    let numberSixLength = numberArray.filter(item => item === '6').length;
                    let numberSevenLength = numberArray.filter(item => item === '7').length;
                    let numberEightLength = numberArray.filter(item => item === '8').length;
                    let numberNineLength = numberArray.filter(item => item === '9').length;
                    let numberTenLength = numberArray.filter(item => item === '10').length;
                    let numberElevenLength = numberArray.filter(item => item === '11').length;
                    let numberTwelveLength = numberArray.filter(item => item === '12').length;

                    percentPerOne = (100 / i).toFixed(2);
                    percentDeviationMinus = (100 / numberOfCombinations - (100 / numberOfCombinations) * 0.05).toFixed(2);
                    percentDeviationPlus = (100 / numberOfCombinations + (100 / numberOfCombinations) * 0.05).toFixed(2);

                    console.log("Number of try", i);
                    console.log("percentDeviationMinus", percentDeviationMinus);
                    console.log("percentDeviationPlus", percentDeviationPlus);

                    percentArray.length = 0;
                    if (max === 6) {
                        let percentForOne = (numberOneLength * percentPerOne).toFixed(2);
                        percentArray.push(percentForOne);
                        let percentForTwo = (numberTwoLength * percentPerOne).toFixed(2);
                        percentArray.push(percentForTwo);
                        let percentForThree = (numberThreeLength * percentPerOne).toFixed(2);
                        percentArray.push(percentForThree);
                        let percentForFour = (numberFourLength * percentPerOne).toFixed(2);
                        percentArray.push(percentForFour);
                        let percentForFive = (numberFiveLength * percentPerOne).toFixed(2);
                        percentArray.push(percentForFive);
                        let percentForSix = (numberSixLength * percentPerOne).toFixed(2);
                        percentArray.push(percentForSix);
                    } else {
                        let percentForTwo = (numberTwoLength * percentPerOne).toFixed(2);
                        percentArray.push(percentForTwo);
                        let percentForThree = (numberThreeLength * percentPerOne).toFixed(2);
                        percentArray.push(percentForThree);
                        let percentForFour = (numberFourLength * percentPerOne).toFixed(2);
                        percentArray.push(percentForFour);
                        let percentForFive = (numberFiveLength * percentPerOne).toFixed(2);
                        percentArray.push(percentForFive);
                        let percentForSix = (numberSixLength * percentPerOne).toFixed(2);
                        percentArray.push(percentForSix);
                        let percentForSeven = (numberSevenLength * percentPerOne).toFixed(2);
                        percentArray.push(percentForSeven);
                        let percentForEight = (numberEightLength * percentPerOne).toFixed(2);
                        percentArray.push(percentForEight);
                        let percentForNine = (numberNineLength * percentPerOne).toFixed(2);
                        percentArray.push(percentForNine);
                        let percentForTen = (numberTenLength * percentPerOne).toFixed(2);
                        percentArray.push(percentForTen);
                        let percentForEleven = (numberElevenLength * percentPerOne).toFixed(2);
                        percentArray.push(percentForEleven);
                        let percentForTwelve = (numberTwelveLength * percentPerOne).toFixed(2);
                        percentArray.push(percentForTwelve);
                    }
                    console.log("numberArray", numberArray);
                    console.log("percentPerOne %", percentPerOne);
                    console.log("percentArray %", percentArray);
                    console.log("percentArrayLength", percentArray.length);

                    for (let j = 0; j < percentArray.length; j++) {
                        counter = j;
                        if (percentArray[j] < percentDeviationMinus || percentArray[j] > percentDeviationPlus) {
                            console.log("Not Good percent", percentArray[j]);
                            break;
                        }
                    }

                });
            if (counter === percentArray.length - 1) {
                console.log("Good distribution for " + i + "tries");
                break;
            }
        }

    };
};

module.exports = new distribution();

