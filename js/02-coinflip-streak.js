//Author : Ranjitha

//Date: 02-24-2023

/*The “Coin Flip Streak” Game

In this part of the assignment you will explore what you’ve learned so far about variables, do while loops, conditionals, operators, math, and more to create a “coin flip streak game”.The point of this simple game is to see what kind of streak you can get to(how many times “Heads” comes up in a row before “Tails” does to end the game).To complete the game follow the steps outlined below:

1)Begin your application by declaring a variable called coinFlip.Do not assign the variable a number just yet.
2)Create a do while loop.
3)Within the do while loop assign a randomly generated number to You will have to use the same Math formula that you used in the 
previous assignment to get this number.
4)Use a conditional statement to check the result of the coin flip.If it’s 0, write out “Heads” into the console window.
If it’s 1, write out “Tails” into the console window.
Set the condition of the do while loop to end once the coinFlip becomes “Tails”.*/

let coinFlip,flip;
//let input = prompt("Enter how many times you want to flip the coin");
document.writeln("CoinFlip game");
do {//ocument.writeln("CoinFlip game");
    //const rndInt = Math.floor(Math.random() * 10) + 0;
    let rndInt = Math.floor(Math.random() * 10); // returns a random integer between 0 and 9 
    coinFlip = rndInt;
    //document.writeln(coinFlip);
    if (coinFlip === 0) {
        alert("Its an Head");
        flip = "heads";
        break;
    }
    if (coinFlip === 1) {
        alert("Its a Tail");
        flip = "tails";
        break;
    }
} while (flip === "tails");
