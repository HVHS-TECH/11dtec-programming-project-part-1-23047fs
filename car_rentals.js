/********************************
Name of task: Rental Car 
Author: Finley
Date: Term 2
********************************/
console.log("Running car_rentals.js");

//Variables
let userNAME;
let userAGE = 0;
//let userLICENCE = false;
let userCARvariables = 0;
let userCAR = 0;
let userRECOMMENDEDcar;
let userCARdays = 0;
let rentalPRICE = 50;
let userTOTALprice;
let userCARDnumber;

//Arrays
let cars = ["BAC Mono", "MX5", "Mini", "Falcon", "Outlander", "Estima"];
let carSEATS = [1, 2, 4, 5, 7, 8];

/********************************
Main code
********************************/

function start() {
    userWELCOME();
    //userLICENCEcheck();
    findUSERcar();
    userCARdaysANDprice()
    userFINALcheck()
    checkVARIABLES();
}

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
    userCARvariables = prompt(userNAME + " what would be the ideal number of seats in your vehicle, 1-8");
    userCARvariables = userCARvariables - 1;
    if (userCARvariables >= 3) {
        userCARvariables = userCARvariables - 1;
    }
    if (userCARvariables >= 6) {
        userCARvariables = userCARvariables - 2;
    }

//If req seats are 3 or 6 they round up one
    userRECOMMENDEDcar = cars[userCARvariables];
//Finds recommended car
    alert("The recommended car that meets your requirements is " + cars[userCARvariables] + ", it has " + carSEATS[userCARvariables] + " seats");
//Tells user recommended car and its number of seats
}

function userCARdaysANDprice() {
    alert("Hello " + userNAME + " at Rob's Rentals the price is $50 per number of seats per day");
    userCARdays = prompt("How many days would you like to use a " + cars[userCARvariables]);
    userCARdays = Number(userCARdays);
//Converts string to number
    userTOTALprice = userCARdays * (userCARvariables + 1) * rentalPRICE;
//Calculates price day * car seats + 1 (cause - 1 for arrays) * rental price
    userCARDnumber = prompt("The total cost for " + userCARdays + " days is $" + userTOTALprice + ". Please input your card number");
}

function userFINALcheck() {
    alert("You have been assigned the " + cars[userCARvariables] + " for " + userCARdays + " days, the total cost is $" + userTOTALprice);
//Final check with user
}

function checkVARIABLES() {
    console.log(userNAME);
    console.log(userAGE);
    //console.log(userLICENCE);
    console.log(userCARvariables);
    console.log(userRECOMMENDEDcar);
    console.log(userCARdays);
    console.log(rentalPRICE);
    console.log(userTOTALprice);
    console.log(userCARDnumber);
//Easy to check if info is right
}