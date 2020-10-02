import { notice, defaultModules } from '@pnotify/core';
import * as PNotifyConfirm from '@pnotify/confirm';
import { defaultModules } from '@pnotify/core';
import * as PNotifyBootstrap4 from '@pnotify/bootstrap4';

import updateSomeCountriesMarkup from './js/some-contries-markup';
import updateOneCountryMarkup from './js/one-country-markup';
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';
import './styles.css';

const debauncedInput = _.debounce(countryInput, 500);

refs.inputCountryRef.addEventListener('input', debauncedInput);

function countryInput() {
  refs.countriesContainerRef.innerHTML = '';

  const searchQuery = refs.inputCountryRef.value;

  fetchCountries(searchQuery).then(country => {
    if (country.length === 1) {
      updateOneCountryMarkup(country);
    }
    if (country.length > 1) {
      updateSomeCountriesMarkup(country);
    }
  });
}
