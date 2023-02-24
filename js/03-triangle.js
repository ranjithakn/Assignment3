//Author : Ranjitha

//Date: 02-24-2023

/*Looping a Triangle

Write a loop that displays the following triangle within a console window:

#
##
###
####
#####
######
####### */

let i, j;
for (i = 0; i <= 6; i++) {
    for (j = 0; j < (i + 1); j++) {
        document.writeln("#");
       
    }
    document.write('<br/>');
}