//comparisons

console.log(5==5); //true
console.log(5=='5'); //true due to the lack of strict structure of JS
console.log(5==='5'); //false

console.log(5 > 9); //false


//conditions
let yourage = 13;

if (yourage > 17) {
  console.log("you can vote.");
} else {
  console.log("you cannot vote.");
}


let numSales = 100;

if (numSales <= 50) {
  console.log("Way to few sales");
} else if (numSales <= 1000) {
  console.log("Average number of sales");
} else {
  console.log("A good number of sales.");
}


//functions
function show() {
  console.log("this is a show function");
}

show();


function addIt(n1, n2) {
  return(n1 + n2);
}

console.log(addIt(5, 4));

document.querySelector('img').setAttribute('width', 300);

//Arrays and DOM
let classes = ["Javascript", "Atoms to Humans", "Graphic Design"];

console.log(classes);
console.log(classes[1]); //show specific item in console

classes.push("CIT222"); //add course to the classes array
classes.shift(); //takes off first item
classes.splice(2,1); // taking out array items in the middle 2 is start index and 1 is how many to take out
classes.pop(); //take off the end

document.querySelector('#courses').textContent = classes;