//task1
const inputValue = 5;
if (inputValue > 0) {
  console.log("value is positive");
} else if (inputValue < 0) {
  console.log("value is negative");
} else {
  console.log("value is 0");
}

//task2
const val1 = 24;
const val2 = 8; 
const val3 = 18;
let valMax = val1;
if (val2 > val1 && val2 > val3 ) {
  valMax = val2;
}  else if (val3 > val1 && val3 > val1) {
  valMax = val3;
}
console.log("Greatest value is " + valMax);

//the same solution in moree correct way
const array1 = [-5, null, 1];
let valAnotherMax = 0;
array1.forEach((elment) => {
  if (elment>valAnotherMax) {
    valAnotherMax=elment;
  }
})
console.log("Greatest value is " + valAnotherMax);

//task3 "Days until weekend"
const dayOfTheWeek = 'Sunday';
switch(dayOfTheWeek){
  case 'Monday':
    console.log("Still 4 more days until weekend");
    break;
  case 'Tuesday':
    console.log("Only 3 more days until weekend");
    break;
  case 'Wednesday':
    console.log("Only 2 more days until weekend");
    break;
  case 'Thursday':
    console.log("Only 2 more day until weekend");
    break;
  case 'Friday':
    console.log("Only 1 more days until weekend");
    break;
  case 'Saturday':
  case 'Sunday':
    console.log("It's weekend!");
    break;
  default:
    console.log('Sorry we did not recognise this day');
}

//task4 "Vegetables
const nameOfVegetable = 'Cabbagee';
let priceOfVegetable = null;
switch(nameOfVegetable) {
  case 'Potato':
  case 'Carrot':
    priceOfVegetable = 10;
    break;
  case 'Brocolli':
  case 'Cabbage':
  case 'Asparagus':
    priceOfVegetable = 15;
    break;
}
if (priceOfVegetable) {
  console.log('Price of your vegtable is ' + priceOfVegetable);
} else {
  console.log('Sorry we did not recognise this vegetable');
}


