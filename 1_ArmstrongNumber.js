/**
 * Rules
 * Is a number that is the sum of its own digits each raised to the power of the number of digits.
 * Eg. 153 = 1³ + 5³ + 3³
 * 153 has three digits (each digit raised to ³ power)
 */

const validate = (number) => {
  let arrayNumber = number.toString().split('');
  let pow = arrayNumber.length
  let arrayPow = []

  arrayNumber.forEach((element) => {
    arrayPow.push(Math.pow(element, pow))
  })
  
  const powSum = arrayPow.reduce((a, b) => {
    return a + b;
  }, 0);

  let msgTrue = `${number} has ${pow} digits. The sum of each digits raised to ${pow} power is ${powSum} (exacly the self number ${number}).`
  let msgFalse = `${number} has ${pow} digits. The sum of each digits raised to ${pow} power is ${powSum} (not exacly the self number ${number}).`
  if(number === powSum) {
    console.log(`${number} is an Armstrong number!`)
    console.log(msgTrue)
  } else {
    console.log(`${number} is not an Armstrong number!`)
    console.log(msgFalse)
  }
}

validate(164)