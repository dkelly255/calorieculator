        
        console.log(document.getElementById("calculate-pdct"));    
let calculatePdct = document.getElementById("calculate-pdct");
        console.log(calculatePdct);
    calculatePdct.addEventListener("click", calculateCalories);
        console.log(calculatePdct);


        
let carryPdct = document.getElementById("carry-pdct");
        console.log(carryPdct);
    carryPdct.addEventListener("click", carryPdct);
        console.log(carryPdct);



function calculateCalories (event) {
    event.preventDefault();
    
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

    if (gender = "male") {
        bmr = 66 + (6.3 * weight) + (12.9 * height) - (6.8 * age); 
        console.log(bmr);
    } 
    else {
        bmr = 655 + (4.3 * weight) + (4.7 * height) - (4.7 * age); 
    }
        console.log(bmr);
        console.log(age);
    if (activity = "sedentary") {
        multiplier = 1.2;
    } else if (activity = "lightlyActive") {
        multiplier = 1.375;
    } else if (activity = "moderatelyActive") {
        multiplier = 1.55;
    } else if (activity = "veryActive") {
        multiplier = 1.725;
    } else {
        multiplier = 1.9;
    } 
        console.log(bmr);
        console.log(multiplier);
    let calories = Math.floor(bmr * multiplier);
        console.log(calories);
        
    let answer = document.getElementById("display-pdct");
        console.log(answer);
    answer.innerHTML = `${calories}!`;
        console.log(localStorage);
    localStorage.setItem("pdct",calories);
        console.log(localStorage);
}





