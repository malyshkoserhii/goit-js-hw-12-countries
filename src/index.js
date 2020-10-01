import updateCountriesMarkup from './js/countries-markup';

import fetchCountries from './js/fetchCountries';
import refs from './js/refs';
import './styles.css';

refs.searchCounrtyBtnRef.addEventListener('click', event => {
  const searchQuery = refs.inputCountryRef.value;

  fetchCountries(searchQuery);
  //   updateCountriesMarkup();
});
