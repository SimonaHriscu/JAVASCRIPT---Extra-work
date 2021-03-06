// # Functions Exercises

// Print your answers to the console.

console.log("Exercise 1:");
// **1. Add Up.**
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed
//to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples:
// * addUp(4) ➞ 10
// * addUp(13) ➞ 91
// * addUp(600) ➞ 180300

const addUp = num => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));

console.log("Exercise 2:");
// **2. Cubed.**
// Create a function that takes in three numbers and returns the sum of its cubes.

// Examples:
// * sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes(2) ➞ 8
// * sumOfCubes() ➞ 0

const sumOfCubes = (...num) => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    let numCubes = Math.pow(num[i], 3);
    sum += numCubes;
  }
  return sum;
};

console.log(sumOfCubes(1, 5, 9));
console.log(sumOfCubes(2));
console.log(sumOfCubes());

console.log("Exercise 3:");
// **3. String Check.**
// Create a function that takes a string and a word, and then returns true or false depending on whether the word
//starts with the initial string.

// Examples:
// * dictionary("bu", "button") ➞ true
// * dictionary("tri", "triplet") ➞ true
// * dictionary("beau", "pastry") ➞ false

const dictionary = (letter, string) => {
  if (string.startsWith(letter)) {
    return true;
  } else {
    return false;
  }
};

console.log(dictionary("bu", "button"));
console.log(dictionary("tri", "triplet"));
console.log(dictionary("beau", "pastry"));

console.log("Exercise 4:");
// **4. Less Than or Equal to Zero?**
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero,
//otherwise return false.

// Examples:
// * lessThanOrEqualToZero(3) ➞ false
// * lessThanOrEqualToZero(0) ➞ true
// * lessThanOrEqualToZero(-4) ➞ true
// * lessThanOrEqualToZero(10) ➞ false

function lessThanOrEqualToZero(num) {
  if (num <= 0) {
    return true;
  } else return false;
};

console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-4));
console.log(lessThanOrEqualToZero(10));

console.log("Exercise 5:");
// **5. Count Occurrences.**
// Create a function that accepts two arguments: a string and a letter. The function should count the
//number of occurrences of that letter in the string.

// i.e.
// countOccurrences("this is a string", "i") ➞ 3
const countOccurrences = (str, letter) => {
  let count = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(letter)) {
      count++;
    }
  }
  return count;
};

console.log(countOccurrences("this is a string", "i"));
console.log(countOccurrences("this is a string", "t"));

console.log("Exercise 6:");
// **6. X To The Power of X.**
// Create a function that takes a base number and an exponent number and returns the calculation. **NB:**
//All test inputs will be positive integers.

// Examples:
// * calculateBaseToExponent(5, 5) ➞ 3125
// * calculateBaseToExponent(10, 10) ➞ 10000000000
// * calculateBaseToExponent(3, 3) ➞ 27

const calculateBaseToExponent = (base, exp) => {
  let calc = Math.pow(base, exp);
  return calc;
};

console.log(calculateBaseToExponent(5, 5));
console.log(calculateBaseToExponent(10, 10));
console.log(calculateBaseToExponent(3, 3));

console.log("Exercise 7:");
// **7. Where's Waldo?**
// Create a function that takes a string and returns true if Waldo is found, and false if he's not.

// Examples:
// * isWaldoHere("is there wal here ?") ➞ false
// * isWaldoHere("I found you Waldo!") ➞ true
// * isWaldoHere("is wally here?") ➞ false
// * isWaldoHere("waldo is here") ➞ true

function isWaldoHere(string) {
  if (string.includes("waldo") || string.includes("Waldo")) {
    return true;
  } else return false;
}
console.log(isWaldoHere("is there wal here ?"));
console.log(isWaldoHere("I found you Waldo!"));
console.log(isWaldoHere("is wally here?"));
console.log(isWaldoHere("waldo is here"));

console.log("Exercise 8:");
// **8. Pie.**
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// * Total number of slices.
// * Number of recipients.
// * How many slices each person gets.

// Examples:
// * equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices

// * equalSlices(8, 3, 2) ➞ true
// * equalSlices(8, 3, 3) ➞ false
// * equalSlices(24, 12, 2) ➞ true

const equalSlices = (totalNumOfSlices, recipients, sliceProPers) => {
  let totalSlices = recipients * sliceProPers;
  if (totalSlices <= totalNumOfSlices) {
    return true;
  } else return false;
};

console.log(equalSlices(11, 5, 3));
console.log(equalSlices(8, 3, 2));
console.log(equalSlices(8, 3, 3));
console.log(equalSlices(24, 12, 2));

console.log("Exercise 9:");
// **9. XO**
// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either
//true or false.

// Notes:

// * Return a boolean value (true or false).
// * The string can contain any character.
// * When neither an x nor an o is in the string, return true.

// Examples:
// * XO("ooxx") ➞ true
// * XO("xooxx") ➞ false
// * XO("ooxXm") ➞ true (case insensitive)
// * XO("zpzpzpp") ➞ true (returns true if no x and o)
// * XO("zzoo") ➞ false

const XO = (str) => {
    let countX = 0;
    let countO = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === "x" || str[i] === "X") {
            countX += 1;
        }

        if (str[i] === "o" || str[i] === "O") {
            countO += 1;
        } 
    }
    if (countO === countX) {
        return true
    } else {
        return false
    }
}

console.log(XO("ooxx"));//true
console.log(XO("XOoxx"));//false
console.log(XO("ooxXm"));//true
console.log(XO("zpzpzpp"));//true
console.log(XO("zzoo")); //false


console.log("Exercise 10:");
// **10. isPrime?**
// Create a function that returns true if a number is prime and false if it's not. **NB:** a prime number is 
//any positive integer *greater than 1*, which is *only evenly divisible by two divisors: itself and 1*. 
//The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

// Examples:
// * isPrime(7) ➞ true
// * isPrime(9) ➞ false
// * isPrime(10) ➞ false

function isPrime(num){
    for(let i = 2; i<num;i++){
    if( num%i === 0 ){
    return false;   
    }
    
}return true;
}

console.log(isPrime(7));
console.log(isPrime(9)); 
console.log(isPrime(10)); 


console.log("Exercise 11:");
// **11. Validate Email.**
// Create a function that takes a string, checks if it's a valid email address, and then accordingly returns 
//either true or false.

// * The string must contain an "@" character.
// * The string must contain a "." character.
// * The "@" must have at least one character in front of it.
// * e.g. "john@example.com" is valid while "@example.com" is invalid.
// * The "." and the "@" must be in the appropriate places.
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.

// **Good Luck & Enjoy :)**
