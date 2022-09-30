/* Lesson 3 */

/* FUNCTIONS */


//-------add
function add(number1, number2) {
  return parseInt(number1) + parseInt(number2);
}

function addNumbers() {
  let addend1 = document.getElementById("addend1").value;
  let addend2 = document.getElementById("addend2").value;
  let addfunction = add(addend1, addend2);
  document.getElementById("sum").value = addfunction;
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);


//-------subtract
function subract(number1, number2) {
  return parseInt(number1) - parseInt(number2);
}

function subtractNumbers() {
  let minuend = document.getElementById("minuend").value;
  let subtrahend = document.getElementById("subtrahend").value;
  let minusfunction = subract(minuend, subtrahend);
  document.getElementById("difference").value = minusfunction;
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);


//--------multiply
function multiply(number1, number2) {
  return parseInt(number1) * parseInt(number2);
}

function multiplyNumbers() {
  let factor1 = document.getElementById("factor1").value;
  let factor2 = document.getElementById("factor2").value;
  let multiplyfunction = multiply(factor1, factor2);
  document.getElementById("product").value = multiplyfunction;
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

//----------divide
function divide(number1, number2) {
    return parseInt(number1) / parseInt(number2);
  }
  
function divideNumbers() {
  let dividend = document.getElementById("dividend").value;
  let divisor = document.getElementById("divisor").value;
  let dividefunction = divide(dividend, divisor);
  document.getElementById("quotient").value = dividefunction;
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);


/* BUILT-IN METHODS */

let currentYear = new Date().getFullYear();
document.querySelector("#year").textContent = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById('array').textContent = numberArray;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let odds = numberArray.filter(getOdds);

function getOdds(item) {
  if (item % 2 === 1) {
    return item;
  }
}

document.getElementById("odds").textContent = odds;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evens = numberArray.filter(getEvens);

function getEvens(item) {
  if (item % 2 === 0) {
    return item;
  }
}

document.getElementById("evens").textContent = evens;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const arrayTotal = numberArray.reduce(function (total, item) {
    return total + item;
})

document.getElementById('sumOfArray').textContent = arrayTotal;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const mapArray = numberArray.map(arrayTimesTwo);

function arrayTimesTwo (num){
    return num * 2;
}

document.getElementById('multiplied').textContent = mapArray;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const sumTimesTwo = mapArray.reduce(function (total, item) {
    return total + item;
})

document.getElementById('sumOfMultiplied').textContent = sumTimesTwo;