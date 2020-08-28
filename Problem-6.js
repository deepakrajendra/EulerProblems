// The sum of the squares of the first ten natural numbers is 385,

// The square of the sum of the first ten natural numbers is 3025,

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025-385=2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
console.time("Solution one");
console.log(differenceOfSumOfSquaresOfNaturalNumbersTill(100));
console.timeEnd("Solution one");

console.time("Solution two")
console.log(differenceOfSumOfSquaresOfNaturalNumbersTillUsingFormula(100));
console.timeEnd("Solution two");
function differenceOfSumOfSquaresOfNaturalNumbersTill(max) {
    let sumOfSquares = 0;
    let sum = 0;
    for(let i = 1; i <= max; i++) {
        sum = sum + i;
        sumOfSquares = sumOfSquares + Math.pow(i, 2);
    }
    return Math.pow(sum, 2) - sumOfSquares;
}


// Solution 2:

// The sum of the first  perfect squares is given by n(n+1)(2n+1)/6
// The sum of the first  natural numbers is given by  n(n+1)/2
function differenceOfSumOfSquaresOfNaturalNumbersTillUsingFormula(max) {
     let sumOfSquares = (max * (max +1) * ((2*max) + 1))/6;
     let sum = (max * (max+1))/2;
     return Math.pow(sum,2) - sumOfSquares;
}

 
