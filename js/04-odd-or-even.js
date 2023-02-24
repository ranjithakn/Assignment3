//Author : Ranjitha

//Date: 02-24-2023

/*Odd or Even ?

    Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even,
    and display a message in the console window.

Sample Output:
"0 is even"
"1 is odd"
"2 is even" */

let i;
//document.write("Odd or Even");
for (i = 0; i < 15; i++) {
    if (i % 2 === 0) {

        document.writeln(+i + " is even");
        document.write('<br/>');
    }
    else {
        document.writeln(+i + " is odd");
        document.write('<br/>');
    }

}