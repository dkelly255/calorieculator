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

    // Get the modals
    const ageModal = document.getElementById("ageModal");
    const weightModal = document.getElementById("weightModal");
    const heightModal = document.getElementById("heightModal");
    const numericsModal = document.getElementById("numericsModal");
    const genderModal = document.getElementById("genderModal");
    const activityModal = document.getElementById("activityModal");


    // Get the <span> elements that close the modals
    const ageSpan = document.getElementById("ageSpan");
    const weightSpan = document.getElementById("weightSpan");
    const heightSpan = document.getElementById("heightSpan");
    const numericsSpan = document.getElementById("numericsSpan");
    const genderSpan = document.getElementById("genderSpan");
    const activitySpan = document.getElementById("activitySpan");




    // Create an array to store the contents of numeric data entry variables for flow control/checks
    const checks = [age, weight, height];
    /* First "if" statement within function - checks if inputs are populated, and whether the user is male or female, 
    and uses the appropriate BMR formula accordingly, whilst alerting user via modals if inputs have not been populated*/
    if (age < 18 || age > 95) {
        ageModal.style.display = "block";
        ageSpan.onclick = function () {
            ageModal.style.display = "none";
        }       
    } else if (weight < 85 || weight > 800) {
        weightModal.style.display = "block";
        weightSpan.onclick = function () {
            weightModal.style.display = "none";
        }  
    } else if (height < 36 || height > 107) {
        heightModal.style.display = "block";
        heightSpan.onclick = function () {
            heightModal.style.display = "none";
        }  
    } else if (checks[0] == "") {
        numericsModal.style.display = "block";
        numericsSpan.onclick = function () {
            numericsModal.style.display = "none";
        }  
    } else if (checks[1] == "") {
        numericsModal.style.display = "block";
        numericsSpan.onclick = function () {
            numericsModal.style.display = "none";
        }  
    } else if (checks[2] == "") {
        numericsModal.style.display = "block";
        numericsSpan.onclick = function () {
            numericsModal.style.display = "none";
        }  
    } else if (gender == "male") {
        bmr = 66 + (6.3 * weight) + (12.9 * height) - (6.8 * age);
        console.log(activity)
    } else if (gender == "female") {
        bmr = 655 + (4.3 * weight) + (4.7 * height) - (4.7 * age);
        console.log(activity)
    } else if (gender != "male" || gender != "female") {
        console.log(activity)
        genderModal.style.display = "block";
        genderSpan.onclick = function () {
            genderModal.style.display = "none";
            console.log(activity)
        } 
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
        activityModal.style.display = "block";
        activitySpan.onclick = function () {
            activityModal.style.display = "none";
        }  
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