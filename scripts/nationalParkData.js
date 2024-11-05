const fiftyStates = document.querySelector("#fiftyStates");
const parksData = document.querySelector("#parksData");
const filterByStateRadio = document.getElementById("filterByState");
const filterByTypeRadio = document.getElementById("filterByType");

// Initialize the locations dropdown
function locations() {
  fiftyStates.innerHTML = "<option value=''>Select a State</option>"; //Fine
  for (let i = 0; i < locationsArray.length; i++) {
    let option = document.createElement("option");
    option.innerText = locationsArray[i];
    option.value = locationsArray[i];
    fiftyStates.appendChild(option);
  }
}

// Initialize park types dropdown
function populateTypes() {
  fiftyStates.innerHTML = "<option value=''>Select a Park Type</option>";

  for (let i = 0; i < parkTypesArray.length; i++) {
    let option = document.createElement("option");
    option.innerText = parkTypesArray[i];
    option.value = parkTypesArray[i];
    fiftyStates.appendChild(option);
  }
}

// Display initial parks data
function getParkData() {
  parksData.innerHTML = "";
  for (let i = 0; i < nationalParksArray.length; i++) {
    let tableRow = parksData.insertRow();

    let tableData = tableRow.insertCell();
    tableData.innerText = nationalParksArray[i].LocationName;

    let tableData2 = tableRow.insertCell();
    tableData2.innerText = nationalParksArray[i].Address;

    let tableData3 = tableRow.insertCell();
    tableData3.innerText = nationalParksArray[i].City;

    let tableData4 = tableRow.insertCell();
    tableData4.innerText = nationalParksArray[i].State;

    let tableData5 = tableRow.insertCell();
    tableData5.innerText = nationalParksArray[i].LocationID;
  }
}

// Filter by selected value
function filterByValue() {
  let parksValue = fiftyStates.value;
  if (!parksValue) {
    getParkData();
    return;
  }

  let parksFilter;
  if (filterByStateRadio.checked) {
    // Filter by state
    parksFilter = nationalParksArray.filter((park) => park.State === parksValue);
  } else {
    // Filter by park type
    parksFilter = nationalParksArray.filter((park) => park.LocationName.includes(parksValue));
  }

  parksData.innerHTML = "";
  for (let i = 0; i < parksFilter.length; i++) {
    let tableRow = parksData.insertRow();

    let tableData = tableRow.insertCell();
    tableData.innerText = parksFilter[i].LocationName;

    let tableData2 = tableRow.insertCell();
    tableData2.innerText = parksFilter[i].Address;

    let tableData3 = tableRow.insertCell();
    tableData3.innerText = parksFilter[i].City;

    let tableData4 = tableRow.insertCell();
    tableData4.innerText = parksFilter[i].State;

    let tableData5 = tableRow.insertCell();
    tableData5.innerText = parksFilter[i].LocationID;
  }
}

// Handle radio button changes
function stateFilter() {
  if (filterByStateRadio.checked) {
     locations();
  } else {
    populateTypes();
  }
  filterByValue(); // Reset the table when switching filter types
}

// Initial setup
locations();
getParkData();

