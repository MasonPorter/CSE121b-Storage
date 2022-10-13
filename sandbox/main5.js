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
//doesn't need to be url. This can be whatever you want.
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


//sorting

let fruit = ['bannana', 'apple', 'strawberry'];

fruit.sort();

console.log(fruit);


const animals = [
  {
    name: "Meowsy",
    species: "cat",
    foods: {
      likes: ["tuna", "catnip"],
      dislikes: ["ham", "zucchini"],
    },
  },

  {
    name: "Barky",
    species: "dog",
    foods: {
      likes: ["bones", "carrots"],
      dislikes: ["tuna"],
    },
  },

  {
    name: "Purrpaws",
    species: "cat",
    foods: {
      likes: ["mice"],
      dislikes: ["cookies"],
    },
  },
];

console.log(animals[1].name + "likes" + animals[1].foods.likes[0]);

function sortBy() {
  document.querySelector("#pets").innerHTML = "";
  let sort = document.querySelector("#sortBy").value;
  if (sort == "petNameAscending") {
    outputPets(animals.sort(animal_sort_asc));
  } else if (sort == "petNameDescending") {
    outputPets(animals.sort(animal_sort_desc));
  }
}

function animal_sort_asc(a, b) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
}

function animal_sort_desc(a, b) {
  if (a.name < b.name) {
    return 1;
  } else if (a.name > b.name) {
    return -1;
  } else {
    return 0;
  }
}

function outputPets() {
  animals.forEach(function (item) {
    let petSelection = document.querySelector("#pets");
    let petName = document.createElement("h2");
    let petSpecies = document.createElement("h3");
    petName.textContent = item.name;
    petSpecies.textContent = item.species;
    petSelection.appendChild(petName);
    petSelection.appendChild(petSpecies);
  });
}

document.querySelector("#sortBy").addEventListener("change", sortBy);