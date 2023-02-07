

function Fruit_Function() {
    var Fruit_Output;
    var Fruits = document.getElementById("Fruit_Input").value;
    var Fruit_String = " are an awesome fruit!";
    switch (Fruits) {
        case "Apple":
            Fruit_Output = "Apples" + Fruit_String;
        break;
        
        case "Banana":
            Fruit_Output = "Bananas" + Fruit_String;
        break;

        case "Grape":
            Fruit_Output = "Grapes" + Fruit_String;
        break;

        case "Blueberry":
            Fruit_Output = "Blueberries" + Fruit_String;
        break;

        case "Strawberry":
            Fruit_Output = "Strawberries" + Fruit_String;
        break;

        case "Pear":
            Fruit_Output = "Pears" + Fruit_String;
            break;
            default:
            Fruit_Output = "Please enter a fruit exactly as written on the above list.";
    }
        document.getElementById("Output").innerHTML = Fruit_Output;
}

/* adjust names/values */

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

/* canvas element with a gradient, and a canvas with an inserted image
    and shadow */
