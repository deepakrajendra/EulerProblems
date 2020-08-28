// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


//find factors of number
//check if the factor is prime
//set it to max prime factor

//A factor of a number is that when divided by the factor gives reminder 0.

// findLargestPrimeFactor(600851475143);
findLargestPrimeFactor(10);

function findLargestPrimeFactor(number) {
    let largestPrimeFactor = 0;

    for(let i = 2; i <= number / 2; i++) {
        if(isOdd(i) && isFactor(number, i) && isPrime(i)) {
            largestPrimeFactor = i;
        }
    }
    console.log('Largest prime factor of ' + number + ": " + largestPrimeFactor);
}

function isOdd(number) {
    return number % 2 !== 0;
}

function isFactor(number, divisor) {
    return number % divisor === 0;
}

function isPrime(number) {

    for(let i = 2; i < Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}
