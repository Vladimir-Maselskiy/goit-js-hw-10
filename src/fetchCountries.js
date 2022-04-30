import { makeHTML } from './makeIndeHTMLResponce';
const BASE_URL = 'https://restcountries.com/v3.1/name/';

export function fetchCountries(name) {
  const FULL_URL = `${BASE_URL}${name}?fields=name,capital,population,flags,languages`;
  fetch(FULL_URL)
    .then(responce => responce.json())
    .then(makeHTML)
    .catch(console.log);
}
