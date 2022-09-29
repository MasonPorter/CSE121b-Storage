//---------------declaration functions - allows hoisting (javascript goes to find the function even if you call it before it is assigned.)
show();

function show() {
  console.log("output for developer");
}

function square(num) {
  return num * num;
}

document.getElementById("result").textContent = square(5);

//--------------expression function - this doesn't support hoisting and is great when a function will be called multiple times
//const square = function (num) {
//   return num * num;
//};

//document.getElementById("result").textContent = square(5);

//--------------arrow function - just an expression with less syntax
//const square = (num) => {
//   return num * num;
//};

//document.getElementById("result").textContent = square(5);

//-------------Array Method
const steps = ["one", "two", "three"];

//-------------callback declaration
function makeList(item) {
  const listElement = document.getElementById("myList");
  listElement.innerHTML += `<li>${item}</li>`;
}

steps.forEach(makeList);

//--------------map array method - makes a new array by changing another array's values
let array1 = [1, 4, 9, 16];
let array2 = array1.map((item) => item * 2);

console.log(array2);
console.log(array1);

const grades = ["A", "B", "A"];

function displayGrade(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}

const gpaPoints = grades.map(displayGrade);
console.log(gpaPoints);

//------------reduce array method - take all array values and reduce it down to one value
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});

console.log(pointsTotal);

//------------filter array method - removes items from an array
const foods = ["watermelon", "peach", "apple", "grapes"];

const shortWords = foods.filter(function (item) {
  return item.length < 6;
});

console.log(shortWords);

//-------------html button action
const buttonElement = document.getElementById("submitButton");

function copyInput() {
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);

//-------------modulus - filter the odds out.
const nums = [1, 3, 4, 7];

document.querySelector('#output').textContent = nums;

let evens = nums.filter(getEvens);

function getEvens(item) {
  if (item % 2 === 0) {
    return item;
  };
};

console.log(evens);