const file = "json/resident_data.json";
let results = null;
async function getResident(file) {
    const response =  await fetch(file);
    if (response.ok) {
        const data = await response.json();
        printResident(data);
    }
}

getResident(file);