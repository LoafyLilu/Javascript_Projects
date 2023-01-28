// Start of main js file 

function my_Dictionary() {      // creating a dictionary
    var Animal = {              // creating a list in the dictionary
        Species: "Cat",         // Key Value pairs for each listing
        Color: "Black",
        Breed: "Short Hair",
        Age: 5,
        Sound: "Nya!"
    };

    delete Animal.Breed     // deleting the details of Animal.Breed, before it is displayed

    document.getElementById("Dictionary").innerHTML = Animal.Breed;     // document returns 'undefined', as the entry
                                                                        // has been deleted
}

// End of main js file