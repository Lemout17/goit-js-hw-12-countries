import refs from './refs';
import API from './fetchCountries';
import check from './result'

const debounce = require('lodash.debounce');



refs.input.addEventListener('input', debounce(onSearch,500));

function onSearch(e) {
    e.preventDefault();
    let searchQuery = e.target.value;
    
    
    API.fetchCountry(searchQuery)
        .then(check.result)
        .catch(error => console.warn(error))
        .finally(() => setTimeout(() => {
            refs.input.value = null
        },1000));

}



