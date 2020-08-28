// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

console.time();
console.log('Smallest positive number evenly divisible: ' + findSmallestNumberDivisible(1, 20));
console.timeEnd();

function findSmallestNumberDivisible(min, max) {

    for(let i = max + 1; i < Number.MAX_SAFE_INTEGER; i++) {
        let numberOfDivisible = 0;
        for(let j = min; j <= max; j++) {
            if(i % j === 0) {
                numberOfDivisible++;
            } else {
                break;
            }
            if(numberOfDivisible == max) {
                return i;
            }
        }
    }
}