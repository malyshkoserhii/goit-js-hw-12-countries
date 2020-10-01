import updateCountriesMarkup from './js/countries-markup';
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';
import './styles.css';

const debauncedInput = _.debounce(countryInput, 500);

refs.inputCountryRef.addEventListener('input', debauncedInput);

function countryInput() {
  refs.countriesContainerRef.innerHTML = '';

  const searchQuery = refs.inputCountryRef.value;

  console.log(searchQuery);
  fetchCountries(searchQuery).then(updateCountriesMarkup);
}
