//your code here

// script.js
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Pink Floyd', 'The Beatles', 'Aerosmith', 'The Who'];

function stripArticles(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

bandNames.sort((a, b) => stripArticles(a) > stripArticles(b) ? 1 : -1);

const bandList = document.getElementById('band');
for (let i = 0; i < bandNames.length; i++) {
  const li = document.createElement('li');
  li.textContent = bandNames[i];
  bandList.appendChild(li);
}
