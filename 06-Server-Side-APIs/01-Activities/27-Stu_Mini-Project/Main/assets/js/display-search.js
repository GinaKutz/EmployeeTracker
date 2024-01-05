var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');

function getParams() {
    // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])

        const urlParams = new URLSearchParams(window.location.search);
      
        // Convert search params to an array
        const paramsArray = Array.from(urlParams);
      
        // Alternatively, get individual parameter values
        const query = urlParams.get('q');
        const format = urlParams.get('format');
      
        return { paramsArray, query, format };
      }
      
      // Usage
      const { paramsArray, query, format } = getParams();
      console.log('Parameters Array:', paramsArray);
      console.log('Query:', query);
      console.log('Format:', format);
      
    // Get the query and format values
}

function printResults(resultObj) {
    console.log(resultObj);
    // set up `<div>` to hold result content
}

function searchApi(query, format) {

}

function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#search-input').value;
    var formatInputVal = document.querySelector('#format-input').value;

    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    }

    searchApi(searchInputVal, formatInputVal);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

getParams();
