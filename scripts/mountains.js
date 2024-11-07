"use strict";

const mountainDropdown = document.getElementById("mountainDropdown");
const mountainDetailsParagraph = document.getElementById("mountainDetailsParagraph");
const logoImage = document.getElementById("logoImage");
const elevation = document.getElementById("elevationId");
const cardTitleHeading = document.getElementById("cardTitleHeading");

function loadMountains() {
  mountainsArray.forEach((mountain) => {
    const option = document.createElement("option");
    option.value = mountain.name;
    option.textContent = mountain.name;
    mountainDropdown.appendChild(option);
  });
}

function showMountainDetails() {
  const mountainName = mountainDropdown.value;
  const selectedMountain = mountainsArray.find((mountain) => mountain.name === mountainName);
  if (selectedMountain) {
    logoImage.src = `./images/${selectedMountain.img}`;
    cardTitleHeading.innerText = `${selectedMountain.name}`;
    elevation.innerText = `Elevation: ${selectedMountain.elevation} ft`;
    mountainDetailsParagraph.innerText = `${selectedMountain.desc} Effort: ${selectedMountain.effort}`;
  }
}
loadMountains();
mountainDropdown.addEventListener("change", showMountainDetails);

// function mountainDropdown() {
//     for (let i = 0; i < mountainsArray.length; i++){
//   for (const mountain of mountainsArray) {
//     let option = document.createElement("option");
//     option.value = mountain.name;
//     option.textContent = mountain.name;
//     mountainDropdown.appendChild(option)
//         }
//     }
// }
// loadMountains();

// function showMountainDetails() {
//   const mountainName = mountainDropdown.value;

//   for (const mountain of mountainsArray) {
//     if (mountainDropdown.name == mountainName) {
//       logoImage.src = `./images/${mountainDropdown.img}`;
//         cardTitleHeading.innerText = `Welcome to ${mountainDropdown.name} !`;
//       const details = ` ${mountainDropdown.desc} Effort: ${mountainDropdown.effort}` ;
//       mountainDetailsParagraph.innerText = details;
//     }
//   }
// }
// mountainDropdown.addEventListener("change", showMountainDetails);
