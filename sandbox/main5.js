//modules
import Person, {printName, printAge} from "./module.js";

const user = new Person('Sally', 20);

console.log(user);

printName(user);
printAge(user);

//async and sync to help program keep running when we have to wait for info
setTimeout(function () {
  console.log("async");
}, 1000);
console.log("synchronous");



// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}

function doStuff(results) {
    const outputElement = document.querySelector("#output");
    const html = `<h2>${results.name}</h2>
                  <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    outputElement.innerHTML = html;
    console.log("first: ", results);
}

getPokemon(url);
console.log("second: ", results);