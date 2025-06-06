const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Function to strip leading articles "a", "an", "the" from beginning of a string
function stripArticle(name) {
  // Use regex with case-insensitive flag
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort bands ignoring the articles
bands.sort((a, b) => {
  let aStripped = stripArticle(a).toLowerCase();
  let bStripped = stripArticle(b).toLowerCase();

  if (aStripped < bStripped) return -1;
  if (aStripped > bStripped) return 1;
  return 0;
});

// Render the sorted list in the <ul id="band">
const ul = document.getElementById('band');
bands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});
