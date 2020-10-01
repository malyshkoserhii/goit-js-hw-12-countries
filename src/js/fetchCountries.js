import refs from './refs';
import countriesTpl from '../templates/countries.hbs';

function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(response => response.json())
    .then(country => {
      const markup = countriesTpl(country);
      refs.countriesContainerRef.insertAdjacentHTML('beforeend', markup);
    });
}

export default fetchCountries;
