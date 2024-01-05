

var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value;
  var formatInputVal = document.querySelector('#format-input').value;

<<<<<<< HEAD
    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    }
    location.assign('/search-input')

=======
  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
>>>>>>> 647c0087b9a808c3149aecb07bc799e3aa8ce4c5
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
