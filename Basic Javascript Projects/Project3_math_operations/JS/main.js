function addition_Function() {      // Declaring a function
    var addition = 6 + 3;
    document.getElementById("Math").innerHTML = "6 + 3 = " + addition;
}

function subtraction_Function() {       // Declaring a function
    var subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication_Function() {        // Declaring a function
    var multiplication = 4 * 5;
    document.getElementById("Math").innerHTML = "4 * 5 = " + multiplication;
}

function division_Function() {      // Declaring a function
    var division = 60 / 5;
    document.getElementById("Math").innerHTML = "60 / 5 =" + division;
}

function more_Math() {      // Declaring a function
    var simple_Math = (1 + 2) * 10 / 2 - 5; // declaring a variable and its value
    document.getElementById("Math").innerHTML = " 1 + 2 , * 10 , /.5 = " + simple_Math; // tells the document to display the results of the operation
}

function modulus_Operator() {       // Declaring a function
    var remainder = 25 % 6; // declaring a variable and its value
    document.getElementById("Math").innerHTML = " 25 / 6 has a remainder of: " + remainder; //tells the document to display the results of the operation
}

function negation_Operator() {      // Declaring a function
    var x = 10;     // Declaring a variable and its value
    document.getElementById("Math").innerHTML = -x;  // tells the document to display the results of the operation
}

var A = 5.25;   // Sets a variable and its value
A--;       // Decrement Operator
document.write(" " + A);        // tells the document to display the results of the operation


var X = 5;      //Sets a variable and its value
X++     // Increment Operator
document.write(" " + X);         // tells the document to display the results of the operation

window.alert(Math.random() * 3);        // tells the document to produce a window with a random number between 1 and 3

function max_Value() {      // Declaring a function
    var largest = Math.max(5, 12, 25, 37);  // Sets a variable and its function
    document.getElementById("Math").innerHTML = " In the string 5, 12, 25, and 37  the largest number is  " + largest;  // tells the document to display the result of the function
}

