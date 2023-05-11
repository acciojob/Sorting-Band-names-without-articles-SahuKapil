// Given array of band names
let bandNames = ["The Beatles", "Anathema", "Aerosmith", "The Who", "Pink Floyd"];

// Remove articles from band names
let updatedBandNames = bandNames.map((name) => {
  return name.replace(/^(a |an |the )/i, "").trim();
});

// Sort band names in lexicographic order
updatedBandNames.sort();

// Get the ul tag with id 'band'
let bandList = document.querySelector("#band");

// Append li tags for each band name
updatedBandNames.forEach((name) => {
  let li = document.createElement("li");
  li.innerText = name;
  bandList.appendChild(li);
});