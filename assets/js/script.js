function calculateCalories () {
    let age = document.getElementById("age").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let gender = document.getElementById("gender").value;
    let activity = document.getElementById("activity").value

    if (gender = "Male") {
        let bmr = 66 + (6.3 * weight) + (12.9 * height) - (6.8 * age); 
    } 
    else {
        let bmr = 655 + (4.3 * weight) + (4.7 * height) - (4.7 * age); 
    }

    if (activity = "Sedentary") {
        let multiplier = 1.2
    } else if (activity = "Lightly Active") {
        let multiplier = 1.375
    } else if (activity = "Moderately Active") {
        let multiplier = 1.55 
    } else if (activity = "Very Active") {
        let multiplier = 1.725
    } else {
        let multiplier = 1.9
    } 
    
    let calories = bmr * multiplier

}