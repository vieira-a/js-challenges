/**
 * Rules
 * Return the sum of all multiples of a given number.
 * Eg. 10 is a natural number; the multiples of 3 or five of numbers below this number: 3, 5, 6 and 9. The sum is 23.
 
* Additionals rules
 * #1 - If the number is negative, return 0 (for languages that do have them).
 * #2 - If the number is a multiple of both 3 and 5, only count it once.
 * 
 * [Project Euler](https://projecteuler.net/problem=1)
 * [CodeWars](https://www.codewars.com/kata/514b92a657cdc65150000006)
 */

const validate = (number) => {
  let multiples = [];
  //Additional rule #1 - If the number is negative, return 0 (for languages that do have them).
  if(number < 0 || number < 3) {
    console.log('Please, give a valid number');
  } else {
    for (var n = 0; n < number; n++) {
      if(n % 3 === 0 || n % 5 === 0) {
        multiples.push(n);
      };
    };
    const multiplesNoRepeated = multiples.filter((item, index) => multiples.indexOf(item) === index);
    const sum = multiplesNoRepeated.reduce((a, b) => {
      return a + b;
    }, 0);
    console.log(sum)
  };
  //Additional rule #2 - If the number is a multiple of both 3 and 5, only count it once
};

validate(2)