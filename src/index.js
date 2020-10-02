import { alert, notice, info, success, error } from '@pnotify/core';
import { defaults } from '@pnotify/core';
import { defaultModules } from '@pnotify/core';
// import * as PNotifyBootstrap4 from '@pnotify/bootstrap4';

import updateSomeCountriesMarkup from './js/some-contries-markup';
import updateOneCountryMarkup from './js/one-country-markup';
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';
// import '@pnotify/bootstrap4/dist/PNotifyBootstrap4.css';
import '@pnotify/core/dist/BrightTheme.css';
import './styles.css';

// defaultModules.set(PNotifyBootstrap4, {});

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
    }
    if (country.length > 1) {
      updateSomeCountriesMarkup(country);

      // let errorMessage = error({
      //   text: "I'm an error message.",
      //   closer: false,
      //   delay: 600,
      //   sticker: false,
      //   hide: true,
      // });
    }
  });
}

// PNotify.error({
//   title: 'Oh No!',
//   text: 'Something terrible happened.',
// });

// const myError = error({
//   text: "I'm an error message.",
//   closer: false,
//   delay: 600,
//   sticker: false,
// });
