alert("Hello World!");  // creating a popup window alert with text - window.alert("Hello , World!");  can also be used
document.write('Hello Again!'); // telling the document to display text

var X = "HAAAAYYY" // assigning a value to the variable of X
document.write(X); // telling the document to display text

var Y = "Like seriously, HELLOOOOOO!!" // assing a value to the variable of Y
window.alert(Y); // creating a popup window alert with the value of Y displayed

document.write("Okay, I \"Give Up\"."); // telling the document to display text with quotation marks.
                                        // This ensures that the full comand is not closed out

document.write("\"Be who you are and say what you feel,"     // telling the document to display text with appropriate puncuation 
    + " because those who mind, don\'t matter and those who matter don\'t mind.\""
    + "Dr. Suess");

var A = " " + "This" + " " + "is" + " " + "an" + " " + "concatenated" + " " + "string" + " "; // assigning multiple expressions to a single statement

document.write(A); // telling the document to display text of the full variable A


document.write("Statement" + " " + "Example") // a simple example of a statement and expression

function My_First_Function() {  // Defining a function and giving it a name
    var str = "This is the button text!";   // Defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = str; // Putting the value of the variable
                                                            // into the HTML elemntFromPoint
                                                            // with the "Button_Text" ID
}                   


function ontoggle() {
    var thanks = "Thanks for checking out my code!"; // creating an html ontoggle event when the user clicks on a details element
    window.alert(thanks);
}






