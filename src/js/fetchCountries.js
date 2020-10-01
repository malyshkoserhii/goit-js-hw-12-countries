import refs from './refs';

function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/Estonia`;

  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
}

refs.searchCounrtyBtnRef.addEventListener('click', fetchCountries);
export default fetchCountries;
