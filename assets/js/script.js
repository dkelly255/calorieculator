/* jshint esversion: 8 */
// Clear local storage upon page load to prevent any invalid calculations or flows through the site
localStorage.clear();
    
/* Declare variable calculatePdct and define as the button with ID below from the DOM
This will be used for storing the user's personal daily calorie target */
let calculatePdct = document.getElementById("calculate-pdct");

/* Add event listener to the variable, to listen for a "click" event, and 
run function calculateCalories when the button is clicked */
calculatePdct.addEventListener("click", calculateCalories);
        

/* Defining the Function calculateCalories called by event listener attached to variable 
calculatePdct - this function is passed an event (the click) */
function calculateCalories (event) {
    /* First step is to prevent the default behaviour following the click - default behaviour is to 
    submit the form */
    event.preventDefault();
  	/* Definition of variables used within function calculations
      BMR = Base Metabolic Rate*/
    let bmr;
    // Multiplier is the activity multiplier applied to the user's PDCT based on their lifestyle
    let multiplier;
    /* Variables Age, weight, height, gender and activity are all declared and defined as their equivalent 
    DOM element IDs */
    let age = document.getElementById("age").value;
        console.log(age);
    let weight = document.getElementById("weight").value;
        console.log(weight);
    let height = document.getElementById("height").value;
        console.log(height);
    let gender = document.getElementById("gender").value;
        console.log(gender);
    let activity = document.getElementById("activity").value;
        console.log(activity);
    /* First if statement within function - checks if user is male or female, and uses the appropriate
    BMR formula accordingly*/
    if (gender == "male") {
        bmr = 66 + (6.3 * weight) + (12.9 * height) - (6.8 * age); 
        console.log(bmr);
    } 
    else {
        bmr = 655 + (4.3 * weight) + (4.7 * height) - (4.7 * age); 
    }
        console.log(bmr);
        console.log(age);
    /* Second if statement which checks which Activity level the user has selected, and sets the value
    of the "multiplier" variable accordingly*/        
        if (activity == "sedentary") {
        multiplier = 1.2;
    } else if (activity == "lightlyActive") {
        multiplier = 1.375;
    } else if (activity == "moderatelyActive") {
        multiplier = 1.55;
    } else if (activity == "veryActive") {
        multiplier = 1.725;
    } else {
        multiplier = 1.9;
    } 
        console.log(bmr);
        console.log(multiplier);
    /* Declaring & defining the variable "calories" which is the output of the formula and holds the user's
    personal daily calorie target calculation*/
    let calories = Math.floor(bmr * multiplier);
        console.log(calories);
    /*  Declaring & defining the variable "answer" which is set to the vacant span element (id "display-pdct")
    from the DOM */
    let answer = document.getElementById("display-pdct");
        console.log(answer);
    // Setting the contents of "answer" to the user's pdct using template literals and the innerHTML property
    answer.innerHTML = `${calories}!`;
        console.log(localStorage);
    /* Creating an entry in local storage to allow the user's pdct be accessed by the following pages 
    in downstream calculations for macros and mealplans */
    localStorage.setItem("pdct",calories);
        console.log(localStorage);
}
