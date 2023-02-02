

function full_Sentence() {      
    var part_1 = "I have ";         // defines the various 'parts' of the variable
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); // states what the new variable will be by concatenating multiple parts
    document.getElementById("Concatenate").innerHTML = whole_sentence; // tells the document to display the 'new variable' created by concatenating parts
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);       // tells the document to 'slice' out the characters starting at 27, ending at 33
    document.getElementById("Slice").innerHTML = Section;
}

function upper_Case() {
    let text = document.getElementById("Bigletters").innerHTML;
    document.getElementById("Bigletters").innerHTML =
        text.toUpperCase();     // tells the document to display the text in upper case
}

function lower_Case() {
    let text = document.getElementById("Smolletters").innerHTML;
    document.getElementById("Smolletters").innerHTML =
        text.toLowerCase(); // tells the document to display the text in lower case
}



function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();  //tells the document to display the number data as a string
}

function precision_Method() {       
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10); //tells the document to display
                                                                        // the variable to the precision of 10 digits.
}

function fixed_Method() {
    var num = 6.6183004783
    var n = num.toFixed(5)

    document.getElementById("Fixed").innerHTML = n;     // tells the document to display the number with a 
                                                        // fixed amount of digits after the decimal point
}

function binary_Method() {
    var num = 37
    var text = num.toString(2);     // tells the document to display the number as read in base 2/binary

    document.getElementById("Binary").innerHTML = text; //tells the document to display the new variable after being converted to a base 2 string
}

