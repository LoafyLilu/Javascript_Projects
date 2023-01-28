
document.write(typeof 3);       // telling the document to display the type of data ( number )
document.write("<br>");         //*
document.write(typeof "Word"); // telling the document to display the type of data ( string )
document.write("<br>");
document.write


document.write(Number(false)); // tellung the document to display the number value of boolean false
document.write("<br>");         //*
document.write(Number(true));   // telling the document to display the number value of boolean  true
document.write("<br>");         //*
document.write

function my_Function() {
    // document.getElementById("Test").innerHTML = 0 / 0; // NaN because you cant divide 0 by 3
    document.getElementById("Test").innerHTML = isNaN('007'); // will display false because 007 is a number
    // document.getElementById("Test").innerHTML = isNaN('Hello'); // will display true because Hello is a string
}

document.write(2E310);      // will state 'Infinity' because this is the
                            // longest floating number that can display
document.write("<br>");         //*
document.write(-3E310);
document.write("<br>");         //*

document.write(10 > 2);        // will display true as 10 is greater than 2
document.write("<br>");         //*
document.write(10 < 2);         // will display false as 10 is not less than 2
document.write("<br>");         //*


console.log(2 + 2);             // tells the browser to display the operation in the console dev tool

document.write(10 == 10);       // will provide the output 'true'
document.write("<br>");         //*
document.write(3 == 11);        // will provide the output 'false'
document.write("<br>");         //*

var X = 10;                 // Declaring variables key and values
var Y = 10;
document.write(X === Y); // document will return true as both variables are equal in value and type
document.write("<br>");         //*


var A = 82;                 // Declaring variables key and values
var B = "82";
document.write(A === B);        // will display false as the two are not the same data type
document.write("<br>");         //*

var C = "Magnus";
var D = "Magnus";
document.write(C === D);        // Will display true as both are same data type and value
document.write("<br>");         //*


// Boolean logic operators

document.write(5 > 2 && 10 > 4); // && - AND - requires both statements be true, if else false
document.write("<br>");         //*
document.write(5 > 10 && 10 > 4); // will return false as both statements are not true
document.write("<br>");         //*

document.write(5 > 10 || 10 > 4); // || - OR - will return true as one of the statements is true
document.write("<br>");         //*
document.write(5 > 10 || 10 > 20); // will return false, since neither statement is true


// NOT operator checks to see if something is false. If false, 'true' will return
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10); // would return false, as 20 is not -not- greater than 10
}


function not_Function() {
    document.getElementById("doubleneg").innerHTML = !(5 > 10); // would return true, as 5 is not  greater than 10
}




