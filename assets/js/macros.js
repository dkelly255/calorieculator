 
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
    

let chosenOption    

    function splitMacros (event) {
        event.preventDefault();
        
        if (macroArray[0].checked) {
                
            chosenOption = "standard"
                console.log(chosenOption)
            document.getElementById("protein").innerHTML=localStorage.pdct * 0.25
            document.getElementById("carbs").innerHTML=localStorage.pdct * .45
            document.getElementById("fat").innerHTML=localStorage.pdct * .30
            document.getElementById("total").innerHTML=localStorage.pdct
        localStorage.setItem("macro","standard")
        console.log(localStorage)

        } else if (macroArray[1].checked) {
                
            chosenOption = "highprotein"
                console.log(chosenOption)
            document.getElementById("protein").innerHTML=localStorage.pdct * 0.40
            document.getElementById("carbs").innerHTML=localStorage.pdct * .35
            document.getElementById("fat").innerHTML=localStorage.pdct * .25
            document.getElementById("total").innerHTML=localStorage.pdct
        localStorage.setItem("macro","highprotein")
        console.log(localStorage)

        } else if (macroArray[2].checked) {
                
            chosenOption = "lowcarb"
                console.log(chosenOption)
            document.getElementById("protein").innerHTML=localStorage.pdct * 0.35
            document.getElementById("carbs").innerHTML=localStorage.pdct * .10
            document.getElementById("fat").innerHTML=localStorage.pdct * .55
            document.getElementById("total").innerHTML=localStorage.pdct
        localStorage.setItem("macro","lowcarb")
        console.log(localStorage)
        } else {
                
            chosenOption = "notselected"
                console.log(chosenOption)
        }
       
        console.log(chosenOption)
    }
    console.log(chosenOption)
   
    // deactivated due to time constraints - functionality added to splitMacros above
// let splitButton = document.getElementById("split-macros");
//     console.log(splitButton)
// splitButton.addEventListener("click", mixMyMacros);
//     console.log(splitButton)

// function mixMyMacros (event) {
    
//     if (chosenOption = "standard") {
//         document.getElementById("protein").innerHTML=localStorage.pdct * 0.25
//         document.getElementById("carbs").innerHTML=localStorage.pdct * .45
//         document.getElementById("fat").innerHTML=localStorage.pdct * .30
//         document.getElementById("total").innerHTML=localStorage.pdct
//     } else {
//         console.log("finished")
//     }
    
    
// }