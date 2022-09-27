//declaration functions - allows hoisting (javascript goes to find the function even if you call it before it is assigned.)
show();

function show() {
  console.log("output for developer");
};

function square(num) {
  return num * num;
};

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


//Array Method
const steps = ["one", "two", "three"];

//callback declaration
function makeList(item) {
    const listElement = document.getElementById('myList');
    listElement.innerHTML += `<li>${item}</li>`;
};

steps.forEach(makeList);


//map array method - makes a new array by changing another array's values
let array1 = [1, 4, 9, 16];
let array2 = array1.map(item => item * 2);

console.log(array2);
console.log(array1);