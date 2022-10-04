//objects
const car = {
  type: "Toyota",
  model: 500,
  color: "white",
};

const person = {
  fname: "joe",
  lname: "biden",
  age: 80,
};

console.log(car.model);

const aCourse = {
  //properties
  code: "CSE121b",
  name: "JavaScript Language",
  logo: "images/jslogo.png",
  //array of objects
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 347",
      enrolled: 30,
      instructor: "Sis A",
    },
    {
      section: 2,
      roomNum: "STC353",
      enrolled: 25,
      instructor: "Bro T",
    },
  ],
  //method
  showSection: function () {
    console.log("showSection method ran");
  },
};

document.querySelector("#title").textContent = aCourse.name;
document.querySelector("img").setAttribute("src", aCourse.logo);
document.querySelector("img").setAttribute("alt", aCourse.name);


//add an <li> with room numbers
function add_room(item){
    document.querySelector('#sections').innerHTML += '<li>' + item.roomNum + '</li>'
}

aCourse.sections.forEach(add_room);

//OR same thing but with arrow syntax

aCourse.sections.forEach(function (item) {
  document.querySelector("#sections").innerHTML +=
    "<li>" + item.roomNum + "</li>";
});

//running object method
aCourse.showSection();