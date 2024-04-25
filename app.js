//wijden
//Question 5
function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

const num = 7;
if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
} else {
    console.log(`${num} is not a prime number.`);
}

//Question 6
function reverseString(str) {
    return str.split('').reverse().join('');
}

const inputStr = "hello";
const reversedStr = reverseString(inputStr);
console.log(`Original String: ${inputStr}`);
console.log(`Reversed String: ${reversedStr}`);
