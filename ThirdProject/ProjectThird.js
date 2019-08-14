/* Coding Challenge 2 */

/* John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end John would like to have 2 arrays:

1) Containing all three tips (one for each bill)

2) Containing all three final paid amounts (bill + tip)./

Note: To calculate 20% of a value, simply multiply if with 20/100 = 0.20)

*/


var threeBills = [124, 48, 268];

console.log(threeBills);

	
//var threeFinal = [finalAmountOne, finalAmountTwo, finalAmountThree];


function tipAmount(bill) {
	if(bill < 50 ){
	   return bill * 0.20;
	   } else if (bill >= 50 && bill <= 200) {
	   return bill * 0.15;
	   } else {
	   return bill * 0.10;
	   }
}


//// Calling function and first array "tip"


var tipAmounts = [tipAmount(threeBills[0]), tipAmount(threeBills[1]), tipAmount(threeBills[2])];

console.log(tipAmounts);


/// second array "bill + tip"

var finalAmountOne = threeBills[0] + tipAmounts[0];

var finalAmountTwo = threeBills[1] + tipAmounts[1];

var finalAmountThree = threeBills[2] + tipAmounts[2];


var threeFinal = [finalAmountOne, finalAmountTwo, finalAmountThree];

console.log(threeFinal);


