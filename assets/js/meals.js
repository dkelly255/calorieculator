/* jshint esversion: 8 */

// Fixed allocation of percentage calories per meal
const breakfastAllocation = 0.25;
const lunchAllocation = 0.35;
const dinnerAllocation = 0.40;

// Add variable for the DOM element buttons with ids below & add "hide class" 
let generateMealButton = document.getElementById("generate-meals");
let mealDisplayTable = document.getElementById("mealplan-container");
generateMealButton.classList.add("hide");
mealDisplayTable.classList.add("hide");

// Add functionality for a "select all" option on foods list to improve UX
let selectAll = document.getElementById("selectAll");
selectAll.addEventListener("click", tickAllFoods);

// function to iterate over all available foods, tick the checkboxes & unhide the next step button
function tickAllFoods() {
    let foods = document.getElementsByTagName("input");
    for (let i = 0; i < foods.length; i++) {
        if (!foods[i].checked) {
            foods[i].checked = true;
        }
    }
    generateMealButton.classList.remove("hide");
}

// Add an eventlistener to generate meal button to listen for a "click" event and run the 
// function "runMealGenerator when the event occurs"
generateMealButton.addEventListener("click", runMealGenerator);

// find all input fields
const proteinInputs = document.querySelectorAll("input[class='protein-input']");
const carbInputs = document.querySelectorAll("input[class='carb-input']");
const fatInputs = document.querySelectorAll("input[class='fat-input']");
const allInputs = document.querySelectorAll("input[type='checkbox']");

// add click event-listener for all input fields
allInputs.forEach((input) => {
    input.addEventListener("click", checkAllInputs);
});

// Function "checkallInputs" - Credits to Stack overflow member: derpirscher - see link in readme
// Scan to assess if at least one input buttons from each subgroup (protein/carbs/fats) are 'checked'
// If condition is true - unhide the "generate" button to allow proceeding to generate meal plans
// If condition is false - keep "generate" button hidden to prevent calculation errors
function checkAllInputs() {
    //define local variables for protein, carbs & fat
    let p = false,
        f = false,
        c = false;
    // Check each food group for the presence of at least one "checked" input   
    for (let i = 0; i < proteinInputs.length; i++) {
        //When at least one "check" has been found - set variable to true and break
        if (proteinInputs[i].checked) {
            p = true;
            break;
        }
    }
    for (let i = 0; i < fatInputs.length; i++) {
        if (fatInputs[i].checked) {
            f = true;
            break;
        }
    }
    for (let i = 0; i < carbInputs.length; i++) {
        if (carbInputs[i].checked) {
            c = true;
            break;
        }
    }
    // Check if at least one "checked" input is present in each food group section
    if (p && f && c) {
        // if condition is met - then show the button
        generateMealButton.classList.remove("hide");
    } else { // if condition is not met - then at least one food group has not been selected and is missing
        //so keep the button hidden
        generateMealButton.classList.add("hide");
        mealDisplayTable.classList.add("hide");
    }
}

// Defining the Function to generate meal ideas on click of button above
function runMealGenerator() {
    // Show the display table for the user's meal plan
    mealDisplayTable.classList.remove("hide");
    // Define variables to contain calculation elements below
    let breakfastTotalCalories;
    let lunchTotalCalories;
    let dinnerTotalCalories;
    // Check which option the user has stored in Local Storage and Apply Standard, High Protein, or Low Carb splits as appropriate
    if (localStorage.macro == "standard") {

        // Declare a variable to store Calories Allocation per Macronutrient for Breakfast meal 
        breakfastTotalCalories = Math.round(localStorage.pdct * breakfastAllocation);


        // Populate each section of the "Breakfast" output table with the relative calories per macronutrient 
        document.getElementById('breakfast-total-calories').innerHTML = (breakfastTotalCalories);
        // Use Math.round() to ensure numbers are readable & displayed without decimal points
        document.getElementById('breakfast-protein-calories').innerHTML = (Math.round(breakfastTotalCalories * 0.25));
        document.getElementById('breakfast-carbs-calories').innerHTML = (Math.round(breakfastTotalCalories * 0.45));
        document.getElementById('breakfast-fat-calories').innerHTML = (Math.round(breakfastTotalCalories * 0.30));

        // Declare a variable to store Calories Allocation per Macronutrient for Lunch meal 
        lunchTotalCalories = Math.round(localStorage.pdct * lunchAllocation);



        // Populate each section of the "Lunch" output table with the relative calories per macronutrient
        document.getElementById('lunch-total-calories').innerHTML = (lunchTotalCalories);
        // Use Math.round() to ensure numbers are readable & displayed without decimal points 
        document.getElementById('lunch-protein-calories').innerHTML = (Math.round(lunchTotalCalories * 0.25));
        document.getElementById('lunch-carbs-calories').innerHTML = (Math.round(lunchTotalCalories * 0.45));
        document.getElementById('lunch-fat-calories').innerHTML = (Math.round(lunchTotalCalories * 0.30));

        // Declare a variable to store Calories Allocation per Macronutrient for Dinner meal 
        dinnerTotalCalories = Math.round(localStorage.pdct * dinnerAllocation);

        // Populate each section of the "Dinner" output table with the relative calories per macronutrient
        document.getElementById('dinner-total-calories').innerHTML = (dinnerTotalCalories);
        // Use Math.round() to ensure numbers are readable & displayed without decimal points 
        document.getElementById('dinner-protein-calories').innerHTML = (Math.round(dinnerTotalCalories * 0.25));
        document.getElementById('dinner-carbs-calories').innerHTML = (Math.round(dinnerTotalCalories * 0.45));
        document.getElementById('dinner-fat-calories').innerHTML = (Math.round(dinnerTotalCalories * 0.30));

    } else if (localStorage.macro == "highprotein") {

        // Declare a variable to store Calories Allocation per Macronutrient for Breakfast meal 
        breakfastTotalCalories = Math.round(localStorage.pdct * breakfastAllocation);


        // Populate each section of the "Breakfast" output table with the relative calories per macronutrient 
        document.getElementById('breakfast-total-calories').innerHTML = (breakfastTotalCalories);
        // Use Math.round() to ensure numbers are readable & displayed without decimal points
        document.getElementById('breakfast-protein-calories').innerHTML = (Math.round(breakfastTotalCalories * 0.40));
        document.getElementById('breakfast-carbs-calories').innerHTML = (Math.round(breakfastTotalCalories * 0.35));
        document.getElementById('breakfast-fat-calories').innerHTML = (Math.round(breakfastTotalCalories * 0.25));

        // Declare a variable to store Calories Allocation per Macronutrient for Lunch meal 
        lunchTotalCalories = Math.round(localStorage.pdct * lunchAllocation);


        // Populate each section of the "Lunch" output table with the relative calories per macronutrient
        document.getElementById('lunch-total-calories').innerHTML = (lunchTotalCalories);
        // Use Math.round() to ensure numbers are readable & displayed without decimal points 
        document.getElementById('lunch-protein-calories').innerHTML = (Math.round(lunchTotalCalories * 0.40));
        document.getElementById('lunch-carbs-calories').innerHTML = (Math.round(lunchTotalCalories * 0.35));
        document.getElementById('lunch-fat-calories').innerHTML = (Math.round(lunchTotalCalories * 0.25));

        // Declare a variable to store Calories Allocation per Macronutrient for Dinner meal 
        dinnerTotalCalories = Math.round(localStorage.pdct * dinnerAllocation);

        // Populate each section of the "Dinner" output table with the relative calories per macronutrient
        document.getElementById('dinner-total-calories').innerHTML = (dinnerTotalCalories);
        // Use Math.round() to ensure numbers are readable & displayed without decimal points 
        document.getElementById('dinner-protein-calories').innerHTML = (Math.round(dinnerTotalCalories * 0.40));
        document.getElementById('dinner-carbs-calories').innerHTML = (Math.round(dinnerTotalCalories * 0.35));
        document.getElementById('dinner-fat-calories').innerHTML = (Math.round(dinnerTotalCalories * 0.25));

    } else if (localStorage.macro == "lowcarb") {

        // Declare a variable to store Calories Allocation per Macronutrient for Breakfast meal 
        breakfastTotalCalories = Math.round(localStorage.pdct * breakfastAllocation);


        // Populate each section of the "Breakfast" output table with the relative calories per macronutrient 
        document.getElementById('breakfast-total-calories').innerHTML = (breakfastTotalCalories);
        // Use Math.round() to ensure numbers are readable & displayed without decimal points
        document.getElementById('breakfast-protein-calories').innerHTML = (Math.round(breakfastTotalCalories * 0.35));
        document.getElementById('breakfast-carbs-calories').innerHTML = (Math.round(breakfastTotalCalories * 0.10));
        document.getElementById('breakfast-fat-calories').innerHTML = (Math.round(breakfastTotalCalories * 0.55));

        // Declare a variable to store Calories Allocation per Macronutrient for Lunch meal 
        lunchTotalCalories = Math.round(localStorage.pdct * lunchAllocation);


        // Populate each section of the "Lunch" output table with the relative calories per macronutrient
        document.getElementById('lunch-total-calories').innerHTML = (lunchTotalCalories);
        // Use Math.round() to ensure numbers are readable & displayed without decimal points 
        document.getElementById('lunch-protein-calories').innerHTML = (Math.round(lunchTotalCalories * 0.35));
        document.getElementById('lunch-carbs-calories').innerHTML = (Math.round(lunchTotalCalories * 0.10));
        document.getElementById('lunch-fat-calories').innerHTML = (Math.round(lunchTotalCalories * 0.55));

        // Declare a variable to store Calories Allocation per Macronutrient for Dinner meal 
        dinnerTotalCalories = Math.round(localStorage.pdct * dinnerAllocation);

        // Populate each section of the "Dinner" output table with the relative calories per macronutrient
        document.getElementById('dinner-total-calories').innerHTML = (dinnerTotalCalories);
        // Use Math.round() to ensure numbers are readable & displayed without decimal points 
        document.getElementById('dinner-protein-calories').innerHTML = (Math.round(dinnerTotalCalories * 0.35));
        document.getElementById('dinner-carbs-calories').innerHTML = (Math.round(dinnerTotalCalories * 0.10));
        document.getElementById('dinner-fat-calories').innerHTML = (Math.round(dinnerTotalCalories * 0.55));

    }

    // Fixed lookup index of foods per macronutrient - food name and calories per gram for meal generator grams column (see sources in Readme - Credits section)
    // proteinIndex covers all possible protein foods selectable by the user
    const proteinIndex = [{
            "name": "chicken",
            "calpergram": 1.51,
        },
        {
            "name": "turkey",
            "calpergram": 1.04,
        },
        {
            "name": "fish",
            "calpergram": 0.86,
        },
        {
            "name": "beef",
            "calpergram": 1.52,
        },
        {
            "name": "eggs",
            "calpergram": 1.4,
        },
        {
            "name": "pork",
            "calpergram": 1.58,
        },
    ];

    // Fixed lookup index of foods per macronutrient - food name and calories per gram for meal generator grams column (see sources in Readme - Credits section)
    // carbIndex covers all possible protein foods selectable by the user
    const carbIndex = [{
            "name": "bread",
            "calpergram": 2.51,
        },
        {
            "name": "pasta",
            "calpergram": 2.04,
        },
        {
            "name": "rice",
            "calpergram": 1.76,
        },
        {
            "name": "oats",
            "calpergram": 2.52,
        },
        {
            "name": "cereal",
            "calpergram": 2.4,
        },
        {
            "name": "quinoa",
            "calpergram": 2.58,
        },
    ];

    // Fixed lookup index of foods per macronutrient - food name and calories per gram for meal generator grams column (see sources in Readme - Credits section)
    // fatIndex covers all possible protein foods selectable by the user
    const fatIndex = [{
            "name": "butter",
            "calpergram": 4.51,
        },
        {
            "name": "cheese",
            "calpergram": 4.04,
        },
        {
            "name": "cream",
            "calpergram": 3.76,
        },
        {
            "name": "nuts",
            "calpergram": 4.52,
        },
        {
            "name": "bacon",
            "calpergram": 5.4,
        },
        {
            "name": "olive-oil",
            "calpergram": 9.58,
        },
    ];

    // Breakfast section of meal generator
    // Protein section of Breakfast section
    // proteinFoods =  list of all possible foods that can be selected by user - baseline options for random meal generator
    const proteinFoods = document.getElementsByClassName("protein-input");

    // Declaring a variable to measure the maximum number of foods to be included in random number generator 
    let numberOfFoodsProtein = proteinFoods.length;

    // proteinArray = foods selected by user for inclusion in meal generator options - extracted from proteinFoods
    let proteinArray = [];

    // function to extract which foods are checked by user, and push onto proteinArray 
    for (let i = 0; i < numberOfFoodsProtein; i++) {
        if (proteinFoods[i].checked) {
            proteinArray.push(proteinFoods[i].name);
        }
    }

    // rand1 = Random number between 1 and how many food have been checked per food group - used to pick a random checked food's name for meal plan buildout
    const rand1 = Math.floor(Math.random() * (proteinArray.length));

    // Declare variable for the first food to be randomly selected for the breakfast meal generator
    const food1 = proteinArray[rand1];
    // Set the inner HTML content of the first cell in the Breakfast output table to be equal to food1
    document.getElementById("breakfast-protein-food").innerHTML = (food1);

    // calculate grams of selected food required to fill calories allocation
    const food1grams = (Math.round(breakfastTotalCalories * 0.25)) / (proteinIndex.find(x => x.name === proteinArray[rand1]).calpergram);

    // populate grams per food into meal plan table template
    document.getElementById("breakfast-protein-grams").innerHTML = (Math.round(food1grams));

    // Carb section of Breakfast generation
    const carbFoods = document.getElementsByClassName("carb-input");
    let numberOfFoodsCarbs = carbFoods.length;
    let carbArray = [];

    for (let i = 0; i < numberOfFoodsCarbs; i++) {
        if (carbFoods[i].checked) {
            carbArray.push(carbFoods[i].name);
        }
    }

    const rand2 = Math.floor(Math.random() * (carbArray.length));
    const food2 = carbArray[rand2];
    document.getElementById("breakfast-carbs-food").innerHTML = (food2);
    const food2grams = (Math.round(breakfastTotalCalories * 0.25)) / (carbIndex.find(x => x.name === carbArray[rand2]).calpergram);
    document.getElementById("breakfast-carbs-grams").innerHTML = (Math.round(food2grams));

    // Fat section of Breakfast generation
    const fatFoods = document.getElementsByClassName("fat-input");
    let numberOfFoodsFat = fatFoods.length;
    let fatArray = [];

    for (let i = 0; i < numberOfFoodsFat; i++) {
        if (fatFoods[i].checked) {
            fatArray.push(fatFoods[i].name);
        }
    }

    const rand3 = Math.floor(Math.random() * (fatArray.length));
    const food3 = fatArray[rand3];
    document.getElementById("breakfast-fat-food").innerHTML = (food3);
    const food3grams = (Math.round(breakfastTotalCalories * 0.25)) / (fatIndex.find(x => x.name === fatArray[rand3]).calpergram);
    document.getElementById("breakfast-fat-grams").innerHTML = (Math.round(food3grams));
    document.getElementById("breakfast-total-grams").innerHTML = (Math.round(food1grams + food2grams + food3grams));

    // Lunch section of meal generator
    // protein section of lunch 
    const rand4 = Math.floor(Math.random() * (proteinArray.length));
    const food4 = proteinArray[rand4];
    document.getElementById("lunch-protein-food").innerHTML = (food4);
    const food4grams = (Math.round(lunchTotalCalories * 0.40)) / (proteinIndex.find(x => x.name === proteinArray[rand4]).calpergram);
    document.getElementById("lunch-protein-grams").innerHTML = (Math.round(food4grams));

    // Carb section of lunch 
    const rand5 = Math.floor(Math.random() * (carbArray.length));
    const food5 = carbArray[rand5];
    document.getElementById("lunch-carbs-food").innerHTML = (food5);
    const food5grams = (Math.round(lunchTotalCalories * 0.40)) / (carbIndex.find(x => x.name === carbArray[rand5]).calpergram);
    document.getElementById("lunch-carbs-grams").innerHTML = (Math.round(food5grams));

    // Fat section of lunch 
    const rand6 = Math.floor(Math.random() * (fatArray.length));
    const food6 = fatArray[rand6];
    document.getElementById("lunch-fat-food").innerHTML = (food6);
    const food6grams = (Math.round(lunchTotalCalories * 0.40)) / (fatIndex.find(x => x.name === fatArray[rand6]).calpergram);
    document.getElementById("lunch-fat-grams").innerHTML = (Math.round(food6grams));
    document.getElementById("lunch-total-grams").innerHTML = (Math.round(food4grams + food5grams + food6grams));

    // Dinner section of meal generator
    // Protein section of Dinner 
    const rand7 = Math.floor(Math.random() * (proteinArray.length));
    const food7 = proteinArray[rand7];
    document.getElementById("dinner-protein-food").innerHTML = (food7);
    const food7grams = (Math.round(dinnerTotalCalories * 0.35)) / (proteinIndex.find(x => x.name === proteinArray[rand7]).calpergram);
    document.getElementById("dinner-protein-grams").innerHTML = (Math.round(food7grams));
    // Carb section of dinner 
    const rand8 = Math.floor(Math.random() * (carbArray.length));
    const food8 = carbArray[rand8];
    document.getElementById("dinner-carbs-food").innerHTML = (food8);
    const food8grams = (Math.round(dinnerTotalCalories * 0.35)) / (carbIndex.find(x => x.name === carbArray[rand8]).calpergram);
    document.getElementById("dinner-carbs-grams").innerHTML = (Math.round(food8grams));
    // Fat section of dinner 
    const rand9 = Math.floor(Math.random() * (fatArray.length));
    const food9 = fatArray[rand9];
    document.getElementById("dinner-fat-food").innerHTML = (food9);
    const food9grams = (Math.round(dinnerTotalCalories * 0.35)) / (fatIndex.find(x => x.name === fatArray[rand9]).calpergram);
    document.getElementById("dinner-fat-grams").innerHTML = (Math.round(food9grams));
    document.getElementById("dinner-total-grams").innerHTML = (Math.round(food7grams + food8grams + food9grams));

    // Grand total section of meal generator
    document.getElementById("total-total-grams").innerHTML = Math.round((food1grams + food2grams + food3grams + food4grams + food5grams + food6grams + food7grams + food8grams + food9grams));
    document.getElementById("total-total-calories").innerHTML = (localStorage.pdct);
    // End of Meal Generator function
}