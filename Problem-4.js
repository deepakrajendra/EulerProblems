// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

findLargestPalindrome(100,1000);



function findLargestPalindrome(min,max){
    let largestPalindrome = 0;
    for(let i=min; i< max; i++){
        for(let j = i; j<max; j++){
            let product = i*j;
            if(isPalindrome(product) && (product)> largestPalindrome){
                largestPalindrome = product;
            }
        }
    }
    console.log(largestPalindrome);
}

function isPalindrome(number){
    let numberAsString = number.toString();
    let reverseNumber = numberAsString.split('').reverse().join('');
    return numberAsString === reverseNumber;
}
   