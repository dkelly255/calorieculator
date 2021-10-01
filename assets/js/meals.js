// Fixed allocation of percentage calories per meal
const breakfastAllocation = .25
const lunchAllocation = .40
const dinnerAllocation = .35
console.log(localStorage.pdct)

// Eventlistener to generate meal button
let generateMealButton = document.getElementById("generate-meals")
console.log(generateMealButton)
generateMealButton.addEventListener("click", runMealGenerator)
console.log(generateMealButton)

// Overall Function to generate meal ideas on click of button above
function runMealGenerator (event) {

// Breakfast Calories Allocation per Macronutrient
const breakfastTotalCalories = Math.round(localStorage.pdct * breakfastAllocation)
    console.log(breakfastTotalCalories)
document.getElementById('breakfast-total-calories').innerHTML=(breakfastTotalCalories)
document.getElementById('breakfast-protein-calories').innerHTML=(Math.round(breakfastTotalCalories*.25))
document.getElementById('breakfast-carbs-calories').innerHTML=(Math.round(breakfastTotalCalories*.45))
document.getElementById('breakfast-fat-calories').innerHTML=(Math.round(breakfastTotalCalories*.30))

// Lunch Calories Allocation per Macronutrient
const lunchTotalCalories = Math.round(localStorage.pdct * lunchAllocation)
    console.log(lunchTotalCalories)
document.getElementById('lunch-total-calories').innerHTML=(lunchTotalCalories)
document.getElementById('lunch-protein-calories').innerHTML=(Math.round(lunchTotalCalories*.25))
document.getElementById('lunch-carbs-calories').innerHTML=(Math.round(lunchTotalCalories*.45))
document.getElementById('lunch-fat-calories').innerHTML=(Math.round(lunchTotalCalories*.30))

// Dinner Calories Allocation per Macronutrient
const dinnerTotalCalories = Math.round(localStorage.pdct * dinnerAllocation)
    console.log(dinnerTotalCalories)
document.getElementById('dinner-total-calories').innerHTML=(dinnerTotalCalories)
document.getElementById('dinner-protein-calories').innerHTML=(Math.round(dinnerTotalCalories*.25))
document.getElementById('dinner-carbs-calories').innerHTML=(Math.round(dinnerTotalCalories*.45))
document.getElementById('dinner-fat-calories').innerHTML=(Math.round(dinnerTotalCalories*.30))



// Fixed lookup index of foods per macronutrient - food name and calories per gram for meal generator grams column
const proteinIndex = [
    {
      "name": "chicken",
      "calpergram": 1.51,      
    },
    {
        "name": "turkey",
        "calpergram": 1.04,
    },
    {
        "name": "fish",
        "calpergram": 0.76,
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
  ]
    console.log(proteinIndex)

    const carbIndex = [
        {
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
      ]
        console.log(carbIndex)

        const fatIndex = [
        {
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
      ]
        console.log(fatIndex)

let proteinIndexLength = proteinIndex.length
    console.log(proteinIndexLength)

//Breakfast section of meal generator
// proteinFoods =  list of all possible foods that can be selected by user - baseline options for random meal generator
const proteinFoods = document.getElementsByClassName("protein-input")
    console.log(proteinFoods)
let numberOfFoodsProtein = proteinFoods.length;
    console.log(numberOfFoodsProtein)

// proteinArray = foods selected by user for inclusion in meal generator options - extracted from proteinFoods
let proteinArray = []
    console.log(proteinArray)

// function to extract which foods are checked by user, and push onto proteinArray 
for (let i = 0; i < numberOfFoodsProtein; i++) {
    if (proteinFoods[i].checked) {
    proteinArray.push(proteinFoods[i].name);
    }
}

    console.log(proteinArray)
    console.log(proteinArray[0])
    console.log(proteinFoods[0].checked)
    console.log(proteinArray.length)
    console.log(proteinFoods.length)

// rand1 = Random number between 1 and how many food have been checked per food group - used to pick a random checked food's name for meal plan buildout
const rand1 = Math.floor( Math.random() * (proteinArray.length - 1) );
    console.log(rand1);
const food1 = proteinArray[rand1]
document.getElementById("breakfast-protein-food").innerHTML=(food1)
    console.log(rand1);
    console.log(proteinIndex[rand1].name)
    console.log(proteinIndex[rand1].calpergram)
    console.log(proteinArray[rand1])
    
// log calories per gram of randomly selected food from user choices
    console.log(proteinIndex.find(x => x.name === proteinArray[rand1]).calpergram)
  
// calculate grams of selected food required to fill calories allocation
const food1grams = (Math.round(breakfastTotalCalories*.25)) / (proteinIndex.find(x => x.name === proteinArray[rand1]).calpergram)
    console.log(food1grams)
    console.log('hello')
    console.log(rand1);

// populate grams per food into meal plan table template
document.getElementById("breakfast-protein-grams").innerHTML=(Math.round(food1grams))  

// Carb section of Breakfast generation
const carbFoods = document.getElementsByClassName("carb-input")
    console.log(carbFoods)
let numberOfFoodsCarbs = carbFoods.length;
    console.log(numberOfFoodsCarbs)
let carbArray = []
    console.log(carbArray)
    
for (let i = 0; i < numberOfFoodsCarbs; i++) {
    if (carbFoods[i].checked) {
    carbArray.push(carbFoods[i].name);
    }
}

    console.log(carbArray)
    console.log(carbArray[0])
    console.log(carbFoods[0].checked)

const rand2 = Math.floor( Math.random() * (carbArray.length - 1) );
    console.log(rand2);
const food2 = carbArray[rand2]
document.getElementById("breakfast-carbs-food").innerHTML=(food2)
    console.log(rand2);

const food2grams = (Math.round(breakfastTotalCalories*.25)) / (carbIndex.find(x => x.name === carbArray[rand2]).calpergram)
    console.log(food2grams)
    console.log('hello')
    console.log(rand2);

document.getElementById("breakfast-carbs-grams").innerHTML=(Math.round(food2grams)) 

// Fat section of Breakfast generation
const fatFoods = document.getElementsByClassName("fat-input")
    console.log(fatFoods)
let numberOfFoodsFat = fatFoods.length;
    console.log(numberOfFoodsFat)
let fatArray = []
    console.log(fatArray)
    
for (let i = 0; i < numberOfFoodsFat; i++) {
    if (fatFoods[i].checked) {
    fatArray.push(fatFoods[i].name);
    }
}

    console.log(fatArray)
    console.log(fatArray[0])
    console.log(fatFoods[0].checked)

const rand3 = Math.floor( Math.random() * (fatArray.length - 1) );
    console.log(rand3);
const food3 = fatArray[rand3]
document.getElementById("breakfast-fat-food").innerHTML=(food3)
    console.log(rand3);

const food3grams = (Math.round(breakfastTotalCalories*.25)) / (fatIndex.find(x => x.name === fatArray[rand3]).calpergram)
    console.log(food3grams)
    console.log('hello')
    console.log(rand3);

document.getElementById("breakfast-fat-grams").innerHTML=(Math.round(food3grams)) 
document.getElementById("breakfast-total-grams").innerHTML=(Math.round(food1grams + food2grams + food3grams)) 

// Lunch section of meal generator
// protein section of lunch 
const rand4 = Math.floor( Math.random() * (proteinArray.length - 1) );
    console.log(rand4);
const food4 = proteinArray[rand4]
document.getElementById("lunch-protein-food").innerHTML=(food4)
    console.log(rand4);
    console.log(proteinIndex[rand4].name)
    console.log(proteinIndex[rand4].calpergram)
    console.log(proteinArray[rand4]) 
    console.log(proteinIndex.find(x => x.name === proteinArray[rand4]).calpergram)
const food4grams = (Math.round(lunchTotalCalories*.40)) / (proteinIndex.find(x => x.name === proteinArray[rand4]).calpergram)
    console.log(food4grams)
    console.log('hello')
    console.log(rand4);
document.getElementById("lunch-protein-grams").innerHTML=(Math.round(food4grams))

// carb section of lunch 
const rand5 = Math.floor( Math.random() * (carbArray.length - 1) );
    console.log(rand5);
const food5 = carbArray[rand5]
document.getElementById("lunch-carbs-food").innerHTML=(food5)
    console.log(carbIndex.find(x => x.name === carbArray[rand5]).calpergram)
const food5grams = (Math.round(lunchTotalCalories*.40)) / (carbIndex.find(x => x.name === carbArray[rand5]).calpergram)
document.getElementById("lunch-carbs-grams").innerHTML=(Math.round(food5grams))

// fat section of lunch 
const rand6 = Math.floor( Math.random() * (fatArray.length - 1) );
    console.log(rand6);
const food6 = fatArray[rand6]
document.getElementById("lunch-fat-food").innerHTML=(food6)
    console.log(fatIndex.find(x => x.name === fatArray[rand6]).calpergram)
const food6grams = (Math.round(lunchTotalCalories*.40)) / (fatIndex.find(x => x.name === fatArray[rand6]).calpergram)
document.getElementById("lunch-fat-grams").innerHTML=(Math.round(food6grams))
document.getElementById("lunch-total-grams").innerHTML=(Math.round(food4grams + food5grams + food6grams)) 

// Dinner section of meal generator
// protein section of Dinner 
const rand7 = Math.floor( Math.random() * (proteinArray.length - 1) );
const food7 = proteinArray[rand7]
document.getElementById("dinner-protein-food").innerHTML=(food7)
const food7grams = (Math.round(dinnerTotalCalories*.35)) / (proteinIndex.find(x => x.name === proteinArray[rand7]).calpergram)
document.getElementById("dinner-protein-grams").innerHTML=(Math.round(food7grams))
// carb section of dinner 
const rand8 = Math.floor( Math.random() * (carbArray.length - 1) );
const food8 = carbArray[rand8]
document.getElementById("dinner-carbs-food").innerHTML=(food8)
const food8grams = (Math.round(dinnerTotalCalories*.35)) / (carbIndex.find(x => x.name === carbArray[rand8]).calpergram)
document.getElementById("dinner-carbs-grams").innerHTML=(Math.round(food8grams))
// fat section of dinner 
const rand9 = Math.floor( Math.random() * (fatArray.length - 1) );
const food9 = fatArray[rand9]
document.getElementById("dinner-fat-food").innerHTML=(food9)
const food9grams = (Math.round(dinnerTotalCalories*.35)) / (fatIndex.find(x => x.name === fatArray[rand9]).calpergram)
document.getElementById("dinner-fat-grams").innerHTML=(Math.round(food9grams))
document.getElementById("dinner-total-grams").innerHTML=(Math.round(food7grams + food8grams + food9grams)) 



// end of Meal Generator function
}

