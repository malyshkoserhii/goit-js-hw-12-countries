import refs from './refs';
import someCountriesTpl from '../templates/some-countries.hbs';

function updateSomeCountriesMarkup(country) {
  const markup = someCountriesTpl(country);
  refs.countriesContainerRef.insertAdjacentHTML('beforeend', markup);
}

export default updateSomeCountriesMarkup;
