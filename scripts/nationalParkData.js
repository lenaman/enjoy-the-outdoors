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

    let name = tableRow.insertCell();
    name.innerText = nationalParksArray[i].LocationName || "N/A";

    let address = tableRow.insertCell();
    address.innerText = nationalParksArray[i].Address || "N/A";

    let city = tableRow.insertCell();
    city.innerText = nationalParksArray[i].City || "N/A";

    let state = tableRow.insertCell();
    state.innerText = nationalParksArray[i].State || "N/A";

    let zipCode = tableRow.insertCell();
    zipCode.innerText = nationalParksArray[i].ZipCode || "N/A";

    let phone = tableRow.insertCell();
    phone.innerText = nationalParksArray[i].Phone || "N/A";

    let websiteLink = tableRow.insertCell(); // Parent Element
    if (nationalParksArray[i].Visit) {
      let link = document.createElement("a"); // create a hyperlink element
      link.href = nationalParksArray[i].Visit; // the href attribute is the actual URL 
      link.innerText = nationalParksArray[i].Visit;
      link.target = "_blank"; // optional: opens the link in a new tab
      websiteLink.appendChild(link); // Here, the parent is the websiteLink cell, so you append the link to the cell
    } else {
      websiteLink.innerText = "N/A";
    }
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

    let name = tableRow.insertCell();
    name.innerText = parksFilter[i].LocationName || "N/A";

    let address = tableRow.insertCell();
    address.innerText = parksFilter[i].Address || "N/A";

    let city = tableRow.insertCell();
    city.innerText = parksFilter[i].City || "N/A";

    let state = tableRow.insertCell();
    state.innerText = parksFilter[i].State || "N/A";

    let zipCode = tableRow.insertCell();
    zipCode.innerText = parksFilter[i].ZipCode || "N/A";

    let phone = tableRow.insertCell();
    phone.innerText = parksFilter[i].Phone || "N/A";

    let websiteLink = tableRow.insertCell();

    if (parksFilter[i].Visit) {
      let link = document.createElement("a"); // create a link element
      link.href = parksFilter[i].Visit; // the href attribute is the URL so that makes it blue
      link.innerText = parksFilter[i].Visit;
      link.target = "_blank"; // Optional: opens the link in a new tab
      websiteLink.appendChild(link); // Here, the parent is the websiteLink cell, so you apoebd the link to the cell
    } else {
      websiteLink.innerText = "N/A";
    }
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
