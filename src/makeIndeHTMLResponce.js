import { refs } from './refs';
import Notiflix from 'notiflix';

export function makeHTML(result) {
  if (result.status === 404) {
    refs.div.innerHTML = '';
    Notiflix.Notify.failure('Oops, there is no country with that name');
    return;
  }

  if (result.length > 10) {
    refs.div.innerHTML = '';
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  }
  if (result.length === 1) {
    refs.div.innerHTML = '';
    const markup = getCartByOneCountry(result);
    refs.div.innerHTML = markup;
    return;
  }
  refs.div.innerHTML = '';
  const blockOfCountries = getCartByFindedCountries(result);
  refs.div.append(blockOfCountries);
}

function getCartByOneCountry(result) {
  const country = result[0];
  const { name, capital, population, flags, languages } = country;
  const languagesStingFormat = Object.values(languages).join(', ');
  const markup = `<div class="country-name-block">
                    <img class="country-flag" src=${flags.svg} alt="country flag" >
                    <h3 class="country-name">${name.official}</h3>
                 </div>
                 <div class="country-info-block">
                    <p class="country-info-block__caption">Capital: <span class="country-info-block__value">${capital}</span> </p>
                    <p class="country-info-block__caption">Population: <span class="country-info-block__value">${population}</span> </p>
                    <p class="country-info-block__caption">Languages: <span class="country-info-block__value">${languagesStingFormat}</span> </p>
                 </div>
                 `;

  return markup;
}

function getCartByFindedCountries(result) {
  var countriesBlock = document.createElement('div');

  result.forEach(country => {
    const { name, flags } = country;
    const markup = `<div class="countries-blocks">
                        <img class="country-flag" src=${flags.svg} alt="country flag" >
                        <p class="country-name-in-list">${name.official}</p>
                    </div>
                        `;
    countriesBlock.insertAdjacentHTML('beforeend', markup);
  });
  return countriesBlock;
}
