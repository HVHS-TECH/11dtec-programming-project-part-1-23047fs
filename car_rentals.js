/********************************
Name of task: Rental Car 
Author: Finley
Start Date: 01/05/35
********************************/
console.log("Running car_rentals.js");

//Variables
let userNAME;
let userAGE = 0;
let userLICENCE = true;
let userCARseats = 0;
let userCAR = 0;
let userRECOMMENDEDcar;


//Arrays
let cars = ["BACMono", "null", "MX5", "Mini", "Falcon", "null", "Outlander", "Estima"];
let carSEATS = [1, 2, "null", 4, "null", 5, 7, 8];

/********************************
Main code
********************************/

userWELCOME()
userLICENCEcheck()
findUSERcar()
tellUSERrecommendedCAR()

checkVARIABLES()
/********************************
Functions
********************************/
function userWELCOME() {
    userNAME = prompt("Hello, what is your name");
    userAGE = prompt("Hello " + userNAME + ", what is your age");
//Asks user name and age
    userAGE = Number(userAGE);
//Converts string to number
}

/*
function userLICENCEcheck() {
    if (userAGE == 16) {
        userLICENCE = prompt("Please verify if you have a licence, true or false");
    } else if (userAGE > 16) {
        userLICENCE = true;
    } else if (userAGE <= 15) {
        alert("Sorry but you can't have a car");
        userLICENCE = false;
    }
//Checks if user has a licence
}
*/
//Can't abort yet so it is redundant


function findUSERcar() {
    userCARseats = prompt("What would be the ideal number of seats in your vehicle " + userNAME)
    userCARseats = userCARseats - 1;
    if (userCARseats == 2) {
    userCARseats = 3;
    }
    if (userCARseats == 5) {
    userCARseats = 6;
    }
//If req seats are 3 or 6 they round up one
    userRECOMMENDEDcar = cars[userCARseats]
//Finds recommended car
}

function tellUSERrecommendedCAR() {
    alert("The recommended car that meets your requirements is " + cars[userCARseats] + ", it has " + carSEATS[userCARseats] + " seats");
    alert("Hello" + userNAME + "at Rob's Rentals the price is calculated, per day, for the number of seats");
//Tells user recommended car and its number of seats
}

function checkVARIABLES() {
    console.log(userNAME);
    console.log(userAGE);
    console.log(userLICENCE);
    console.log(userCARseats);
    console.log(userRECOMMENDEDcar);
//Easy to check if info is right
}