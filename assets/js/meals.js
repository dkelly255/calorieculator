
const breakfastAllocation = .25
const dinnerAllocation = .3
const lunchAllocation = .35


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


// const rand1 = Math.floor( Math.random() * 6 );
//     console.log(rand1);

const proteinFoods = document.getElementsByClassName("protein-input")
let numberOfFoods = proteinFoods.length;
console.log(numberOfFoods)

for (let i = 0; i < numberOfFoods; i++) {
    console.log(proteinFoods[i].name);
}

