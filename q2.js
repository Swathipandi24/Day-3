program using arrow  functions

a// Print odd numbers in an array
const printOddNumbers = arr => {
    arr.forEach(num => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  // Test printOddNumbers function
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
printOddNumbers(testArray);


b// Convert all the strings to title caps in a string array
const convertToTitleCaps = strArr => {
    return strArr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
  };
  // Test convertToTitleCaps function
const testStrArray = ["hello", "world", "javascript"];
console.log(convertToTitleCaps(testStrArray));

c// Sum of all numbers in an array
const sumOfNumbers = arr => arr.reduce((acc, curr) => acc + curr, 0);

// Test sumOfNumbers function
const testNumArray = [1, 2, 3, 4, 5];
console.log(sumOfNumbers(testNumArray));

d// Return all the prime numbers in an array
const getPrimeNumbers = arr => {
    const isPrime = num => {
      for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    };
    return arr.filter(isPrime);
  };
  
  // Test getPrimeNumbers function
  const testPrimeArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(getPrimeNumbers(testPrimeArray));

e// Return all the palindromes in an array
const getPalindromes = arr => {
    const isPalindrome = str => str === str.split('').reverse().join('');
    return arr.filter(isPalindrome);
  };
  
  // Test getPalindromes function
  const testPalindromeArray = ["level", "hello", "madam", "world", "racecar"];
  console.log(getPalindromes(testPalindromeArray));