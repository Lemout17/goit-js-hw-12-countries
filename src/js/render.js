import refs from './refs';
import countryCard from '../templates/country-card.hbs';
import countryList from '../templates/country-list.hbs';

const render = {
    CountryCard(country) {
    const markup = countryCard(...country);
    refs.cardContainer.innerHTML = '';
    refs.cardContainer.insertAdjacentHTML('beforeend', markup);
    },

    CountryList(country) {
    const markup = countryList(country);
    refs.cardContainer.innerHTML = '';
    refs.cardContainer.insertAdjacentHTML('beforeend', markup);

    }
}

export default render;