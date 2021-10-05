/* jshint esversion: 8 */

console.log(localStorage.pdct);
console.log(document.getElementById("carry-pdct"));

let carryPdct = document.getElementById("carry-pdct");
console.log(carryPdct);
carryPdct.addEventListener("click", importPdct);
console.log(carryPdct);

function importPdct() {
    document.getElementById("pdct-box").innerHTML = localStorage.pdct;
}


let macroChoice = document.getElementById("calculate-macros");
macroChoice.classList.add("hide");
console.log(macroChoice);
macroChoice.addEventListener("click", splitMacros);
console.log(macroChoice);
console.log(document.getElementsByName("macro_choice"));
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

let chosenOption;

function splitMacros(event) {
    event.preventDefault();

    if (macroArray[0].checked) {

        chosenOption = "standard";
        console.log(chosenOption);
        document.getElementById("protein").innerHTML = Math.floor(localStorage.pdct * 0.25);
        document.getElementById("carbs").innerHTML = Math.floor(localStorage.pdct * 0.45);
        document.getElementById("fat").innerHTML = Math.floor(localStorage.pdct * 0.30);
        document.getElementById("total").innerHTML = localStorage.pdct;
        localStorage.setItem("macro", "standard");
        console.log(localStorage);

    } else if (macroArray[1].checked) {

        chosenOption = "highprotein";
        console.log(chosenOption);
        document.getElementById("protein").innerHTML = Math.floor(localStorage.pdct * 0.40);
        document.getElementById("carbs").innerHTML = Math.floor(localStorage.pdct * 0.35);
        document.getElementById("fat").innerHTML = Math.floor(localStorage.pdct * 0.25);
        document.getElementById("total").innerHTML = localStorage.pdct;
        localStorage.setItem("macro", "highprotein");
        console.log(localStorage);

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

        chosenOption = "notselected";
        console.log(chosenOption);
    }

    console.log(chosenOption);
}
console.log(chosenOption);