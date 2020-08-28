// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?


console.log('Nth prime number is: ' + findNthPrimeNumber(1));


function findNthPrimeNumber(nthPrimeNumber) {
    let primeNumberCount = 0;
    for(let i = 2; i < Number.MAX_SAFE_INTEGER; i++) {
        if(isPrime(i)) {
            primeNumberCount++;
        }
        if(primeNumberCount == nthPrimeNumber) {
            return i;
        }
    }
}

function isPrime(number) {
    if(number == 2) {
        return true;
    } else if(number % 2 == 0) {
        return false;
    } else {
        for(let i = 3; i < number; i = i + 2) {
            if(number % i === 0) {
                return false;
            }
        }
    }
    return true;
}