import './css/styles.css';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');
const divEl = document.querySelector('country-info');

inputEl.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e) {
  outputClear();
  if (e.target.value.trim() != " ") {
    fetchCountries(e.target.value.trim());
    .then (renderHTML)
      .catch(error => {
        Notify.failure('Oops, there is no country with that name');
console.log(error);
      
    })
  }
}

function onInputChange() {
  listEl.innerHTML = ' ';
  divEl.innerHTML = ' ';
}

function renderHTML(coutreis)