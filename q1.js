programs using anonymous function & IIFE



a// Print odd numbers in an array
(() => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    arr.forEach(num => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  })();
  
 
  b// Convert all the strings to title caps in a string array
  (() => {
    const strArr = ["hello", "world", "javascript"];
    const titleCapsArr = strArr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
    console.log(titleCapsArr);
  })();
  
 
 c // Sum of all numbers in an array
  (() => {
    const arr = [1, 2, 3, 4, 5];
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
  })();
  

  d// Return all the prime numbers in an array
  (() => {
    const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    const isPrime = num => {
      for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    };
    const primeNumbers = arr.filter(isPrime);
    console.log(primeNumbers);
  })();
  
 
 e // Return all the palindromes in an array
  (() => {
    const arr = ["level", "hello", "madam", "world", "racecar"];
    const isPalindrome = str => str === str.split('').reverse().join('');
    const palindromes = arr.filter(isPalindrome);
    console.log(palindromes);
  })();
  
 
 
  f// Return median of two sorted arrays of the same size
  (() => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const mergedArr = arr1.concat(arr2).sort((a, b) => a - b);
    const length = mergedArr.length;
    const median = length % 2 === 0 ? (mergedArr[length / 2 - 1] + mergedArr[length / 2]) / 2 : mergedArr[Math.floor(length / 2)];
    console.log(median);
  })();
  
  
 
  g // Remove duplicates from an array
  (() => {
    const arr = [1, 2, 3, 4, 2, 5, 6, 1];
    const uniqueArr = [...new Set(arr)];
    console.log(uniqueArr);
  })();
  
 
 
  h // Rotate an array by k times
  (() => {
    const arr = [1, 2, 3, 4, 5];
    const k = 2;
    const rotatedArr = [...arr.slice(k), ...arr.slice(0, k)];
    console.log(rotatedArr);
  })();
  