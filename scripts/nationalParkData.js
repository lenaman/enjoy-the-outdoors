const fiftyStates = document.querySelector("#fiftyStates");
const parksData = document.querySelector("#parksData");
const filterByStateRadio = document.getElementById("filterByState");
const filterByTypeRadio = document.getElementById("filterByType");

// Initialize the locations dropdown
function locations() {
  fiftyStates.innerHTML = "<option value=''> --Select a State-- </option>"; //Fine
  for (let i = 0; i < locationsArray.length; i++) {
    let option = document.createElement("option");
    option.innerText = locationsArray[i];
    option.value = locationsArray[i];
    fiftyStates.appendChild(option);
  }
}

// Initialize park types dropdown
function populateTypes() {
  fiftyStates.innerHTML = "<option value=''>--Select a Park Type--</option>";

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
    tableData.innerText = nationalParksArray[i].LocationName || "N/A";

    let tableData2 = tableRow.insertCell();
    tableData2.innerText = nationalParksArray[i].Address || "N/A";

    let tableData3 = tableRow.insertCell();
    tableData3.innerText = nationalParksArray[i].City || "N/A";

    let tableData4 = tableRow.insertCell();
    tableData4.innerText = nationalParksArray[i].State || "N/A";

    let tableData5 = tableRow.insertCell();
    tableData5.innerText = nationalParksArray[i].ZipCode || "N/A";

    let tableData6 = tableRow.insertCell();
    tableData6.innerText = nationalParksArray[i].Phone || "N/A";

    let tableData7 = tableRow.insertCell();
    tableData7.innerText = nationalParksArray[i].Visit || "N/A";
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
    tableData.innerText = parksFilter[i].LocationName || "N/A";

    let tableData2 = tableRow.insertCell();
    tableData2.innerText = parksFilter[i].Address || "N/A";

    let tableData3 = tableRow.insertCell();
    tableData3.innerText = parksFilter[i].City || "N/A";

    let tableData4 = tableRow.insertCell();
    tableData4.innerText = parksFilter[i].State || "N/A";

    let tableData5 = tableRow.insertCell();
    tableData5.innerText = parksFilter[i].ZipCode || "N/A";

    let tableData6 = tableRow.insertCell();
    tableData6.innerText = parksFilter[i].Phone || "N/A";

    let tableData7 = tableRow.insertCell();
    tableData7.innerText = nationalParksArray[i].Visit || "N/A";
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
