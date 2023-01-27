function myFunction() {
    var sentence = "I am learning";             //declaring a variable name and value
        sentence += " a lot from this book!";       // adding additional value point to variable
        document.getElementById("Concatenate").innerHTML = sentence; // telling document to pull based on ID
}                                                                     // and place the value in the html


function funEvent() {
    var string = "I am also learning";            //declaring a variable name and value
    string += " new js functions!";       // adding additional value point to variable
    document.getElementById("New").innerHTML = string;   // telling the document to return the ID value in a new window

}

function changeText() {
    var myText = document.getElementById('myText'); // calls the id applied to P of myText
    myText.innerHTML = "This text will change colors!"; // tells the document what to display
    myText.style.color = "#c91cb5"; // tells the document the style change to take place
}