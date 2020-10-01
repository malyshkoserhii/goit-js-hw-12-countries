import refs from './refs';
import oneCountryTpl from '../templates/one-country.hbs';

function updateCountriesMarkup(country) {
  const markup = oneCountryTpl(country);
  refs.countriesContainerRef.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;
