/********************************
Name of task: Rental Car 
Author: Finley
Start Date: 01/05/35
********************************/
console.log("Running car_rentals.js");

//Variables
let userNAME;
let userAGE = 0;
let userLICENCE = false;
let userCARvariables = 0;
let userCAR = 0;
let userRECOMMENDEDcar;
let userCARdays = 0;
let rentalPRICE = 50;
let userTOTALprice;
let userCARDnumber;

//Arrays
let cars = ["BAC Mono", "MX5", "null", "Mini", "Falcon", "null", "Outlander", "Estima"];
let carSEATS = [1, 2, "null", 4, 5, "null", 7, 8];

/********************************
Main code
********************************/

userWELCOME();
//userLICENCEcheck();
findUSERcar();

alert("Hello " + userNAME + " at Rob's Rentals the price is $50 per number of seats per day");
userCARdays = prompt("How many days would you like to use a " + cars[userCARvariables]);
userCARdays = Number(userCARdays);
userTOTALprice = userCARdays * (userCARvariables + 1) * rentalPRICE;
userCARDnumber = prompt("The total cost for " + userCARdays + " days is " + userTOTALprice);


checkVARIABLES();

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
    userCARvariables = prompt("What would be the ideal number of seats in your vehicle " + userNAME);
    userCARvariables = userCARvariables - 1;
    if (userCARvariables == 2) {
        userCARvariables = 3;
    }
    if (userCARvariables == 5) {
        userCARvariables = 6;
    }
//If req seats are 3 or 6 they round up one
    userRECOMMENDEDcar = cars[userCARvariables];
//Finds recommended car
    alert("The recommended car that meets your requirements is " + cars[userCARvariables] + ", it has " + carSEATS[userCARvariables] + " seats");
//Tells user recommended car and its number of seats
}

function checkVARIABLES() {
    console.log(userNAME);
    console.log(userAGE);
    console.log(userLICENCE);
    console.log(userCARseats);
    console.log(userRECOMMENDEDcar);
    console.log(userCARdays);
    console.log(rentalPRICE);
    console.log(userTOTALprice);
    console.log(userCARDnumber);
//Easy to check if info is right
}