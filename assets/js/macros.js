 
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
    console.log(macroArray[1]);
    console.log(document.getElementsByName("macro_choice")[1]);
    console.log(document.getElementsByName("macro_choice")[1]);
    
    

    function splitMacros (event) {
        event.preventDefault();
    }