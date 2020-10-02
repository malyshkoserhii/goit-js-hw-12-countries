import refs from './refs';
import oneCountryTpl from '../templates/one-country.hbs';

function updateOneCountryMarkup(country) {
  const markup = oneCountryTpl(country);
  refs.countriesContainerRef.insertAdjacentHTML('beforeend', markup);
}

export default updateOneCountryMarkup;
