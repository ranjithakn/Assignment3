//Author : Ranjitha

//Date: 02-24-2023
/*Countdown

Write an application that counts down to 0 based on the number that a user passes into a prompt.If the number is 10, it should count down from 10 to 0.
If the number is 100, it should count down from 100 to 0 and so on.*/

document.writeln("Count down");
document.write('<br/>');
let num = prompt("Enter number to count down from backword");
let i;
for (i = num; i >= 0; i--) {
    document.writeln(i);
    document.write('<br/>');
}

