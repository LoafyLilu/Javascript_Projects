/* ++ used to add one, -- to subtract
    telling the document to count to ten */

function count_to_Ten() {
    var Digit = " ";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

/*telling the document to display values of multiple variables */
    A = "Always ";
    B = "remember: ";
    document.write(A + B);

    X = "you ";
    Y = "are ";
    document.write(X + Y);

    M = "unique " ;
    N = "just like everyone else.";
    document.write(M + N + "<br><br>");

/* telling the document to display results based on the results of a function */

function Call_Loop() {
    const  popLimit = 5;
    var cats = 0;
    while (cats < popLimit) {
        cats++
        document.write("oh...I see you have " + (cats) + " more cats...." + "<br>");
    }
    
    if (cats == popLimit) {
        document.write("Lord thats a lot of cats!");
    }
    document.getElementById("Loop").innerHTML = cats;
}

/* creates a function with a block of code to loop to collect length of variable string values */

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = " ";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

/* telling the document to display the value of an index in the array */

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "Playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

/* creating a function to give a constant value then changing it within the function */
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "900$";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function reassign_function() {
    var Motorcycle = { type: "Sport/Standard", brand: "Triumph", model:"Street Triple", color:"Purple", cost: "$11000" };
        Motorcycle.model ="Daytona"
        Motorcycle.price ="$13000"
        Motorcycle.year = "2014"
    document.getElementById("Reassign").innerHTML = "The cost of the " + Motorcycle.year + " " +
        Motorcycle.brand + " " +  Motorcycle.model + " was " + Motorcycle.price;
}

/* let allows the value to be adjusted temporarily withing the block, then defaulting to defined value */

var X = 66;
document.write(X);
{
    let X = 24;
    document.write("<br>" + X);
}
    document.write("<br>" + X + "<br>");


/* example of using this to refer to the variable defined in the same block */
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

