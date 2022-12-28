/**
 * Given a string, replace every letter with its position in the alphabet.
 * If anything in the text isn't a letter, ignore it and don't return it.
 * "a" = 1, "b" = 2, etc.
 * Eg. alphabetPosition("The sunset sets at twelve o' clock.")
 * Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
 */


const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => {
  return String.fromCharCode(x)
} 
);


function alphabetPosition(str) {
  str.toUpperCase().split('').forEach((letter) => {
    console.log(alphabet.indexOf(letter) + 1)
  })
}

alphabetPosition("anderson")