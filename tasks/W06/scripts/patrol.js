const resident_data = "https://raw.githubusercontent.com/MasonPorter/CSE121b-Storage/main/tasks/W06/json/resident_data.json";
async function getResident(resident_data) {
    const response =  await fetch(resident_data);
    if (response.ok) {
        const data = await response.json();
        printResident(data);
    }
}
getResident(resident_data);

function printResident(results) {
  results.forEach(function (item) {
    let output = document.getElementById('entry-output');
    let personName = document.createElement("h5");
    personName.textContent = item.name;
    output.appendChild(personName);
  });
}

const buttonElement = document.getElementById("submit");

function copyInput() {
    const inputElement = document.getElementById('fullname');
    const outputElement = document.getElementById('name');
    outputElement.innerHTML = inputElement.value;
}

buttonElement.addEventListener("click", copyInput);