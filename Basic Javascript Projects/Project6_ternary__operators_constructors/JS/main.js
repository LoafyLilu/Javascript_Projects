

function Ride_Function() {                                                   // Creating a function
    var Height, Can_ride;                                                   // two variables created
    Height = document.getElementById("Height").value;                        // tells where to pull the data from
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough"; // If/else. If true, 'you are too short', if else 'you are tall enough'
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; // states to display the t/f results of can ride by the string, then + to ride

}

function Vote_Function() {                                                   // 
    var Age, Can_vote;                                                   // 
    Age = document.getElementById("Age").value;                        // 
    Can_vote = (Age < 18) ? "You are too young" : "You are old enough"; // If/else. If true, 'you are too short', if else 'you are tall enough'
    document.getElementById("Vote").innerHTML = Can_vote + " to vote."; // states to display the t/f results of can ride by the string, then + to ride

}

function Vehicle(Make, Model, Year, Color) {        // declaring a dictionary and details thereof
    this.Vehicle_Make = Make;                       
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // entries into 'dictionary'
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = // telling the document to display a particular entry and parameter in the dictionary
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() { Starting_point += 1; }
        Plus_one();
        return Starting_point
    }
}


function minus_Function() {         // creating another nested function, 'Subtracting'
    document.getElementById("Subtracting").innerHTML = minus();
    function minus() {
        var Starting_number = 8;
        function Subtract_one() { Starting_number -= 1; }
        Subtract_one();
        return Starting_number
    }
}





