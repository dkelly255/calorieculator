
const breakfastAllocation = .25
const dinnerAllocation = .35
const lunchAllocation = .40
console.log(localStorage.pdct)

let generateMealButton = document.getElementById("generate-meals")
console.log(generateMealButton)
generateMealButton.addEventListener("click", runMealGenerator)
console.log(generateMealButton)

function runMealGenerator (event) {

const breakfastTotalCalories = Math.round(localStorage.pdct * breakfastAllocation)
    console.log(breakfastTotalCalories)
document.getElementById('breakfast-total-calories').innerHTML=(breakfastTotalCalories)
document.getElementById('breakfast-protein-calories').innerHTML=(Math.round(breakfastTotalCalories*.25))
document.getElementById('breakfast-carbs-calories').innerHTML=(Math.round(breakfastTotalCalories*.45))
document.getElementById('breakfast-fat-calories').innerHTML=(Math.round(breakfastTotalCalories*.30))

const dinnerTotalCalories = Math.round(localStorage.pdct * dinnerAllocation)
    console.log(dinnerTotalCalories)
document.getElementById('dinner-total-calories').innerHTML=(dinnerTotalCalories)
document.getElementById('dinner-protein-calories').innerHTML=(Math.round(dinnerTotalCalories*.25))
document.getElementById('dinner-carbs-calories').innerHTML=(Math.round(dinnerTotalCalories*.45))
document.getElementById('dinner-fat-calories').innerHTML=(Math.round(dinnerTotalCalories*.30))

const lunchTotalCalories = Math.round(localStorage.pdct * lunchAllocation)
    console.log(lunchTotalCalories)
document.getElementById('lunch-total-calories').innerHTML=(lunchTotalCalories)
document.getElementById('lunch-protein-calories').innerHTML=(Math.round(lunchTotalCalories*.25))
document.getElementById('lunch-carbs-calories').innerHTML=(Math.round(lunchTotalCalories*.45))
document.getElementById('lunch-fat-calories').innerHTML=(Math.round(lunchTotalCalories*.30))



// Fixed lookup index of foods per macronutrient - food name and calories per gram for meal generator grams column
const proteinIndex = [
    {
      "name": "chicken",
      "calpergram": 2,      
    },
    {
        "name": "Turkey",
        "calpergram": 7,
    },
    {
        "name": "Fish",
        "calpergram": 15,
    },
    {
        "name": "beef",
        "calpergram": 9,
    },
    {
        "name": "eggs",
        "calpergram": 12.2,
    },
    {
        "name": "pork",
        "calpergram": 11,
    },
  ]
    console.log(proteinIndex)
let proteinIndexLength = proteinIndex.length
    console.log(proteinIndexLength)

// proteinFoods =  list of all possible foods that can be selected by user - baseline options for random meal generator
const proteinFoods = document.getElementsByClassName("protein-input")
let numberOfFoods = proteinFoods.length;
    console.log(numberOfFoods)

// proteinArray = foods selected by user for inclusion in meal generator options - extracted from proteinFoods
let proteinArray = []
    console.log(proteinArray)

// function to extract which foods are checked by user, and push onto proteinArray 
for (let i = 0; i < numberOfFoods; i++) {
    if (proteinFoods[i].checked) {
    proteinArray.push(proteinFoods[i].name);
    }
}

    console.log(proteinArray)
    console.log(proteinArray[0])
    console.log(proteinFoods[0].checked)
    console.log(proteinArray.length)
    console.log(proteinFoods.length)

// Random number between 1 and how many food have been checked per food group - used to pick a random checked food's name for meal plan buildout
const rand1 = Math.floor( Math.random() * (proteinArray.length - 1) );
    console.log(rand1);
const food1 = proteinArray[rand1]
document.getElementById("breakfast-protein-food").innerHTML=(food1)
    console.log(rand1);
    console.log(proteinIndex[rand1].name)
    console.log(proteinIndex[rand1].calpergram)
    console.log(proteinArray[rand1])
    

  
    console.log(proteinIndex.find(x => x.name === 'chicken').calpergram)
    console.log('hello')

    // for (let i = 0; i < proteinIndexLength; i++) {
    //     if (proteinIndex[i].name = proteinArray[rand1]) {
            
    //         // document.getElementById("breakfast-protein-grams").innerHTML=(proteinIndex[i].calpergram);
    //         console.log(proteinIndex[i].name)
    //         console.log(proteinArray[rand1])
    //         console.log[i]
    //     } else {
    //         console.log("food not in array")
    //     }
    // }
    console.log(rand1);
    



// document.getElementById("breakfast-protein-grams").innerHTML=(proteinArray[rand1])
//     console.log(rand1);

}

