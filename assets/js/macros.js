/* jshint esversion: 8 */

    console.log(localStorage.pdct);
    console.log(document.getElementById("carry-pdct"));
// Set a variable equal to the DOM element button with id "`carry`-pdct" 
let carryPdct = document.getElementById("carry-pdct");
    console.log(carryPdct);
// Attach an event listener to the variable, to run function "importPdct" when a "click" event occurs
carryPdct.addEventListener("click", importPdct);
    console.log(carryPdct);
// Defining the importPdct function to be ran by event listener above
function importPdct() {
    /*Take the pdct from local storage and set it to the inner HTML contents of the DOM element "pdct-box"
    This displays/imports the user's pdct from the previous page in preparation for the application of 
    Macro-nutrient split option selections */
    document.getElementById("pdct-box").innerHTML = localStorage.pdct;
}
/* Set a variable equal to the DOM element button with id "calculate-macros" - this button will be hidden
 using further instructions below, until the user has selected a split option */
let macroChoice = document.getElementById("calculate-macros");
// Add the "hide" class to the button above
macroChoice.classList.add("hide");
    console.log(macroChoice);
// Add event listener to the button, to run function "splitMacros" when a "click" event occurs 
macroChoice.addEventListener("click", splitMacros);
    console.log(macroChoice);
    console.log(document.getElementsByName("macro_choice"));
/* Create an array of all DOM elements with name "macro_choice" (i.e all radio buttons) and store
in variable macroArray*/
let macroArray = document.getElementsByName("macro_choice");
    console.log(macroArray);
    console.log(macroArray[1].checked);
    console.log(document.getElementsByName("macro_choice")[1]);

// find all radio buttons
const radios = document.querySelectorAll("input[name='macro_choice']");
// add click-event for all radio buttons
radios.forEach((radio) => {
    radio.addEventListener("click", checkRadio);
});

// check if any radio buttons are 'checked'
function checkRadio() {
    // if the macroChoice button is 'not' hidden, then unhide it
    if (macroChoice.classList.contains("hide")) {
        macroChoice.classList.remove("hide");
    }
}
// Declare variable for use in function splitMacros to check which macro option the user has selected
let chosenOption;
/* Function used by event listener on line 25 to go through each macroArray element and check if it has been selected, applying the 
appropriate macronutrient split in each case*/
function splitMacros(event) {
    // Prevent default submission of form when button is clicked
    event.preventDefault();
    // Apply the "standard" macronutrient split if "standard" radio button has been selected by user 
    if (macroArray[0].checked) {

        chosenOption = "standard";
        console.log(chosenOption);
        document.getElementById("protein").innerHTML = Math.floor(localStorage.pdct * 0.25);
        document.getElementById("carbs").innerHTML = Math.floor(localStorage.pdct * 0.45);
        document.getElementById("fat").innerHTML = Math.floor(localStorage.pdct * 0.30);
        document.getElementById("total").innerHTML = localStorage.pdct;
        localStorage.setItem("macro", "standard");
        console.log(localStorage);
    // Apply the "high protein" macronutrient split if the "high protein" radio button has been selected by user 
    } else if (macroArray[1].checked) {

        chosenOption = "highprotein";
        console.log(chosenOption);
        document.getElementById("protein").innerHTML = Math.floor(localStorage.pdct * 0.40);
        document.getElementById("carbs").innerHTML = Math.floor(localStorage.pdct * 0.35);
        document.getElementById("fat").innerHTML = Math.floor(localStorage.pdct * 0.25);
        document.getElementById("total").innerHTML = localStorage.pdct;
        localStorage.setItem("macro", "highprotein");
        console.log(localStorage);
    // Apply the "lowcarb" macronutrient split if the "low carb" radio button has been selected by user 
    } else if (macroArray[2].checked) {

        chosenOption = "lowcarb";
        console.log(chosenOption);
        document.getElementById("protein").innerHTML = Math.floor(localStorage.pdct * 0.35);
        document.getElementById("carbs").innerHTML = Math.floor(localStorage.pdct * 0.10);
        document.getElementById("fat").innerHTML = Math.floor(localStorage.pdct * 0.55);
        document.getElementById("total").innerHTML = localStorage.pdct;
        localStorage.setItem("macro", "lowcarb");
        console.log(localStorage);
    } else {
        // If no option is selected
        chosenOption = "notselected";
        console.log(chosenOption);
    }

    console.log(chosenOption);
    // End of the splitMacros function
}
console.log(chosenOption);