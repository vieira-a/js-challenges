/**
 * A function that can take any non-negative integer as an argument and return it with its digits in descending order. 
 * Essentially, rearrange the digits to create the highest possible number.
 * [Codewars](https://www.codewars.com/kata/5467e4d82edf8bbf40000155)
 * Examples:
 * Input: 42145 Output: 54421
 * Input: 145263 Output: 654321
 * 123456789 Output: 987654321
*/


function descendingOrder(n){

	if(n > 0) {

		const arrayNumber = Array.from(String(n), Number);
		const arrayDescendingOrder = arrayNumber.sort().reverse();
		const numberArrayDescendingOrder = Number(arrayDescendingOrder.join(''))
		console.log(numberArrayDescendingOrder)

	} 
}

descendingOrder(1)
