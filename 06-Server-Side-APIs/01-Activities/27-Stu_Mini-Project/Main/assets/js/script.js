var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#search-input').value;
    var formatInputVal = document.querySelector('#format-input').value;

    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    }

    //Set the search params in the URL (i.e. `?q=london&format=photo`)
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
