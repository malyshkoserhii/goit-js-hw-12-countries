import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

import updateSomeCountriesMarkup from './js/some-contries-markup';
import updateOneCountryMarkup from './js/one-country-markup';
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';
import './styles.css';

const debauncedInput = _.debounce(countryInput, 500);

refs.inputCountryRef.addEventListener('input', debauncedInput);

function countryInput() {
  const searchQuery = refs.inputCountryRef.value;

  if (searchQuery === '') {
    refs.countriesContainerRef.innerHTML = '';
  }

  fetchCountries(searchQuery).then(country => {
    if (country.length === 1) {
      refs.countriesContainerRef.innerHTML = '';
      updateOneCountryMarkup(country);

      success({
        text: 'Your query is successful!',
        hide: true,
        delay: 2000,
      });
    }
    if (country.length > 1) {
      updateSomeCountriesMarkup(country);

      error({
        text: 'Too many matches found. Please enter a more specific query!',
        hide: true,
        delay: 2000,
      });
    }
  });
}
