const bands = ["The Plot in You", "The Devil Wears Prada", "Pierce the Veil", "Norma Jean", "The Bled", "Say Anything", "The Midway State", "We Came as Romans", "Counterparts", "Oh, Sleeper", "A Skylit Drive", "Anywhere But Here", "An Old Dog"];

// Create a function to strip articles from a band name
function stripArticles(bandName) {
  const regex = new RegExp(/^(a |the |an )/i);
  return bandName.replace(regex, "").trim();
}

// Sort the band names without articles
const sortedBands = bands.map(stripArticles).sort();

// Create an `ul` tag with the id `band`
const bandList = document.getElementById("band");

// Add the sorted band names to the `ul` tag
sortedBands.forEach((bandName) => {
  const li = document.createElement("li");
  li.textContent = bandName;
  bandList.appendChild(li);
});
