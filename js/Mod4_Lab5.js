// JavaScript source code

/*Validate Repeat Entry in Lab 5(Extra Credit 5 points)

There�s a line of code in lab 5 that asks the user if they want to repeat their entry.The code resembled the image outlined below.

Your job in this part of the assignment is to validate that entry.If it�s anything other than �y� or �n�,
the prompt should simply reappear until the user enters a valid entry.*/

let miles;
let gallons;
let mpg;
let again = 'y';

do {
    miles = parseFloat(prompt('Enter miles driven'));
    gallons = parseFloat(prompt('How many gallons does your car\'s tank hold'));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        document.writeln(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
    } else {
        alert('One or both entries are invalid.');
    }
    again = prompt('Run application again? (y or n)', 'y');
    if (again !== 'y' || again !== 'n')
        again = prompt('Run application again? (y or n)', 'y');
} while (again === 'y');
document.writeln('Application has exited.');