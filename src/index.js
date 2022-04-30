import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { refs } from './refs';
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(event) {
  const name = refs.input.value.trim();
  if (name === '') {
    refs.div.innerHTML = '';
    return;
  }
  fetchCountries(name);
}
