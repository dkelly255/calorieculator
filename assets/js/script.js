/* jshint esversion: 8 */
// Clear local storage upon page load to prevent any invalid calculations or flows through the site
localStorage.clear();

let pdctSection = document.getElementById("pdct-section");
let nextStepBtn = document.getElementById("buttonBox");
let linkMacro = document.getElementById("link-macro");

/* Declare variable calculatePdct and define as the button with ID below from the DOM
This will be used for storing the user's personal daily calorie target */
let calculatePdct = document.getElementById("calculate-pdct");

/* Add event listener to the variable, to listen for a "click" event, and 
run function calculateCalories when the button is clicked */
calculatePdct.addEventListener("click", calculateCalories);


/* Defining the Function calculateCalories called by event listener attached to variable 
calculatePdct - this function is passed an event (the click) */
function calculateCalories(event) {
    /* First step is to prevent the default behaviour following the click - default behaviour is to 
    submit the form */
    event.preventDefault();
    /* Definition of variables used within function calculations
      BMR = Base Metabolic Rate*/

    // show the pdct amount and next step button if localStorage exists
    if (localStorage.getItem("pdct")) {
        pdctSection.classList.remove("hide");
        nextStepBtn.classList.remove("hide");
        linkMacro.classList.remove("hide");
    };

    let bmr;
    // Multiplier is the activity multiplier applied to the user's PDCT based on their lifestyle
    let multiplier;
    /* Variables Age, weight, height, gender and activity are all declared and defined as their equivalent 
    DOM element IDs */
    let age = document.getElementById("age").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let gender = document.getElementById("gender").value;
    let activity = document.getElementById("activity").value;


    // Create an array to store the contents of numeric data entry variables for flow control/checks
    const checks = [age, weight, height];
    /* First "if" statement within function - checks if inputs are populated, and whether the user is male or female, 
    and uses the appropriate BMR formula accordingly, whilst alerting user if a inputs have not been populated*/
    if (age < 18 || age > 95) {
        alert("Age must be between 18 and 95 for safety purposes");
    } else if (weight < 85 || weight > 800) {
        alert("Starting Weight should not be under 85lbs or over 800 lbs for safety purposes");
    } else if (height < 36 || height > 107) {
        alert("Height should be between 36 to 107 inches for safety purposes");
    } else if (checks[0] == "") {
        alert("Please populate Age, Weight & Height fields");
    } else if (checks[1] == "") {
        alert("Please populate Age, Weight & Height fields");
    } else if (checks[2] == "") {
        alert("Please populate Age, Weight & Height fields");
    } else if (gender == "male") {
        bmr = 66 + (6.3 * weight) + (12.9 * height) - (6.8 * age);
    } else if (gender == "female") {
        bmr = 655 + (4.3 * weight) + (4.7 * height) - (4.7 * age);
    } else {
        alert("Please select a Gender");
    }

    /* Second if statement which checks which Activity level the user has selected, and sets the value
    of the "multiplier" variable accordingly, and alerts the user if an activity level has not been selected*/
    if (activity == "sedentary") {
        multiplier = 1.2;
    } else if (activity == "lightlyActive") {
        multiplier = 1.375;
    } else if (activity == "moderatelyActive") {
        multiplier = 1.55;
    } else if (activity == "veryActive") {
        multiplier = 1.725;
    } else if (activity == "extraActive") {
        multiplier = 1.9;
    } else {
        alert("Please select an Activity Level");
    }

    /* Declaring & defining the variable "calories" which is the output of the formula and holds the user's
    personal daily calorie target calculation*/
    let calories = Math.floor(bmr * multiplier);

    /*  Declaring & defining the variable "answer" which is set to the vacant span element (id "display-pdct")
    from the DOM */
    let answer = document.getElementById("display-pdct");
    // Setting the contents of "answer" to the user's pdct using template literals and the innerHTML property
    // Including a control check that prevents "NaN" being populated as the PDCT output
    if (isNaN(calories)) {
        answer.innerHTML = "";
    } else answer.innerHTML = `${calories}!`;
    /* Creating an entry in local storage to allow the user's pdct be accessed by the following pages 
    in downstream calculations for macros and mealplans */
    localStorage.setItem("pdct", calories);
}

// Attempting addition of control to final "Next Step" button on page
// let next_step1 = document.getElementById("nextStep1");
// next_step1.addEventListener("click", flowCheck1);

// function flowCheck1(event)
//     event.preventDefault();
//     if (localStorage.length == 0) {
//         alert("Please complete PDCT calculation prior to proceeding")
//     } else {
//         window.location.href = "macros.html"
//     }