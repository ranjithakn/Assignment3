// JavaScript source code
/*Validate Numeric Entries in Lab 6 (Extra Credit 5 points)

There are 3 lines of code in lab 6 where a user must enter their investment amount, the rate, 
and the number of years they would like to invest for. The code resembled the image outlined below.
Your job in this part of the assignment is to validate those entries. Within investment, the number should be numeric.
Within rate, the number should be numeric and between 0 and a realistic rate like 6%.
For years, the number should be numeric and between 1 and 30.*/
// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseInt(prompt('Enter investment amount as xxxx.xx'));
rate = parseInt(prompt('Enter interest rate as xx.x'));
years = parseInt(prompt('Enter the number of years you want to invest for'));
if (!isNaN(investment) && !isNaN(rate) && rate > 0 && rate <= 6 && !isNaN(years) && years > 0 && years <= 30) {
    // CALCULATE FUTURE VALUE
    futureValue = investment;
    for (let i = 0; i < years; i++) {
        futureValue = futureValue + (futureValue * rate / 100);
    }
    document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
    document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
    document.write(`Years: ${years}<br>`);
    document.write(`Future value: $${futureValue.toFixed(2)}`);
}
else {
    alert('One or both entries are invalid.');
}

// DISPLAY RESULT
/*document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);
*/


