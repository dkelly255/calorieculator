 
 console.log(localStorage.pdct)
 console.log(document.getElementById("carry-pdct"));
 
 let carryPdct = document.getElementById("carry-pdct");
    console.log(carryPdct)
carryPdct.addEventListener("click", importPdct);
    console.log(carryPdct)

function importPdct (event) {
    document.getElementById("pdct-box").innerHTML=localStorage.pdct
}

let macroChoice = document.getElementById("calculate-macros");
    console.log(macroChoice)
macroChoice.addEventListener("click", splitMacros);
    console.log(macroChoice)
    console.log(document.getElementsByName("macro_choice"));
let macroArray = document.getElementsByName("macro_choice")
    console.log(macroArray);
    console.log(macroArray[1].checked);
    console.log(document.getElementsByName("macro_choice")[1]);
    console.log(document.getElementsByName("macro_choice")[1]);
let chosenOption    

    function splitMacros (event) {
        event.preventDefault();
        
        if (macroArray[0].checked) {
            console.log("StandardChecked")
            chosenOption = "standard"
            console.log(chosenOption)
        } else if (macroArray[1].checked) {
            console.log("HighProteinChecked")
            chosenOption = "highprotein"
            console.log(chosenOption)
        } else if (macroArray[2].checked) {
            console.log("LowCarbChecked")
            chosenOption = "lowcarb"
            console.log(chosenOption)
        } else {
            console.log("NothingChecked")
            chosenOption = "notselected"
            console.log(chosenOption)
        }
        
    }