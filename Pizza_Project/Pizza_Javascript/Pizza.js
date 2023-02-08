

function getReceipt() {
    //This initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }


    //Starts with the base price of the selected size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    //holds the value as running total, to then be used in another funtion
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //these variables will get passed on to each function
    getTopping(runningTotal, text1);
}
//starts the total toppings at 0, and adds each element in the topping array if it is checked. The value is then pushed to 
//the consol to show what toppings were selected
    function getTopping(runningTotal, text1) {
        var toppingTotal = 0;
        var selectedTopping = [];
        var toppingArray = document.getElementsByClassName("toppings");
        for (var j = 0; j < toppingArray.length; j++) {
            if (toppingArray[j].checked) {
                selectedTopping.push(toppingArray[j].value);
                console.log("selected topping item: (" + toppingArray[j].value + ")");
                text1 = text1 + toppingArray[j].value + "<br>";
            }
        }
// accounting for the 1 free topping
        var toppingCount = selectedTopping.length;
        if (toppingCount > 1) {
            toppingTotal = (toppingCount - 1);
        } else {
            toppingTotal = 0;
        }
//tells the document to display the string value of selected topppings, and the totalPrice, from runningTotal+ (toppingTotal -1)
        runningTotal = (runningTotal + toppingTotal);
        console.log("total selected topping items:" + toppingCount);
        console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
        console.log("topping text1: " + text1);
        console.log("Purchase Total: " + "$" + runningTotal + ".00");
        document.getElementById("showText").innerHTML = text1;
        document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" +
            runningTotal + ".00" + "</strong></h3>";
    };

