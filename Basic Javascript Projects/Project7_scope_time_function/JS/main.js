var X = 10;                     //This is an example of a global variable
function Add_numbers_1() {      // the variable is declared outside of the function
    document.write(X + 100);
}

function Add_numbers_2() {
    document.write(X + 100);

}

Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {      //This is an example of a local variable
    var X = 10;
    document.write(15 + X);     // As it is declared within the function,
}
// function Add_numbers_2() {      // the variable is not available for use in others
//document.write(X + 100);    // Will produce an error as at this point, X is not availablle as a global variable
// }

// Add_numbers_1();
// Add_numbers_2();


var grade = 75;

if (grade >= 90) {           //Telling the document a list of conditions to run through
    document.write("A");    // If result, if not move to next condition
} else if (grade >= 80) {
    document.write("B");
} else if (grade >= 70) {
    document.write("C");
} else if (grade >= 60) {
    document.write("D");
} else {
    document.write = ("Fail");  // end result if no condition is met as true
}



function Time_function() {              //creates a function
    var Time = new Date().getHours();   // defines a variable and declares how the value of that is defined
    var Reply;
    if (Time < 12 == Time > 0) {        // if condition is met
        Reply = "\u304a\u306f\u3088\u3046\u3054\u3056\u3044\u307e\u3059" // japanese unicode for hiragana symbols
            + " Ohayou gozaimasu - Good Morning"; //  reply - Pronunciation and translation
    }

    else if (Time >= 12 == Time < 18) { 
        Reply = "\u3053\u3093\u306b\u3061\u306f"
            + " Konnichiwa - Hello";
    }

    else {                              // if all conditions are not met, else reply
        Reply = "\u3053\u3093\u3070\u3093\u306f"
            + " Konbanwa - Good evening";  
    }
    document.getElementById("Time_of_day").innerHTML = Reply; // tells the document where to display the results 

}

