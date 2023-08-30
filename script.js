const input = document.querySelector('#searchBox');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

input.addEventListener('input', function() {
	const query = this.value;
	const results = search(query);
	
	suggestions.innerHTML = ''; // Clear previous results
	
	results.forEach(fruit => {
	  const listItem = document.createElement('li');
	  listItem.textContent = fruit;
	  suggestions.appendChild(listItem);
	});

});

function search(e) {
	const results = fruit.filter(item => 
	  item.toLowerCase().includes(e.toLowerCase())
	);
	return results;
}

function highlightSuggestion(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.add('highlighted');
  }
}

function unhighlightSuggestion(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.remove('highlighted');
  }
}

function useSuggestion(e) {
  if (e.target.tagName === 'LI') {
    const selectedFruit = e.target.textContent;
    document.getElementById('searchBox').value = selectedFruit;
	suggestions.innerHTML = ''; // Clear previous results

  }
}

document.getElementById('results').addEventListener('mouseover', highlightSuggestion);
document.getElementById('results').addEventListener('mouseout', unhighlightSuggestion);
document.getElementById('results').addEventListener('click', useSuggestion);
