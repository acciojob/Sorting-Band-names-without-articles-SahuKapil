const bandNames = ["The Virupaksha Temple", "Victoria Memorial", "Taj Mahal"];

// Create a function to strip articles from band names
function stripArticles(bandName) {
  const regex = new RegExp("^(a|an|the)", "i");
  return bandName.replace(regex, "").trim();
}

// Sort the band names without articles (case-insensitively)
const sortedBandNames = bandNames.map(stripArticles).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

// Create an `ul` element with the id `band`
const bandList = document.createElement("ul");
bandList.setAttribute("id", "band");

// Add `li` elements to the `ul` element for each band name
sortedBandNames.forEach((bandName) => {
  const liElement = document.createElement("li");
  liElement.textContent = bandName;
  bandList.appendChild(liElement);
});

// Append the `ul` element to the DOM
document.body.appendChild(bandList);
