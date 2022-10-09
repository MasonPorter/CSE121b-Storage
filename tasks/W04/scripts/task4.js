/* Lesson 4 */

/* DATA */

const personalInfo = {
  name: "Mason",
  photo: "images/IMG_4546.JPG",
  favoriteFoods: ["pizza", "strawberries", "mashed potatoes"],
  hobbies: ["reading", "learning", "gaming", "art"],
  placesLived: [
    {
      location: 1,
      place: "Idaho",
      length: "7 years",
    },
    {
      location: 2,
      place: "Ohio",
      length: "3 years",
    },
    {
      location: 3,
      place: "Texas",
      length: "3 years",
    },
  ],
};


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById('name').textContent = personalInfo.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').setAttribute("src", personalInfo.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').setAttribute("alt", personalInfo.name);

document.getElementById('photo').setAttribute("width", 300);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
function add_favFood(item){
    document.getElementById('favorite-foods').innerHTML += '<li>' + item + '</li>';
};

personalInfo.favoriteFoods.forEach(add_favFood);

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
function add_favHobby(item){
    document.getElementById('hobbies').innerHTML += '<li>' + item + '</li>';
};

personalInfo.hobbies.forEach(add_favHobby);

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
function add_location(item){
    document.querySelector('#places-lived').innerHTML += '<dt>' + item.place + '</dt>'
    document.querySelector('#places-lived').innerHTML += '<dd>' + item.length + '</dd>'
}

personalInfo.placesLived.forEach(add_location);
