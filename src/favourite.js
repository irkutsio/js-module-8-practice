import { common } from './common';
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { instruments } from './helpers/instruments';

const list = document.querySelector('.js-list');
const favourite = JSON.parse(localStorage.getItem(common.KEY_FAVOURITET)) ?? [];

createMarkup(favourite, list);

list.addEventListener('click', onClick)

function onClick (evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('js-info')) {
      const product = findProduct(evt.target);
      createModal(product)
     }
}

function findProduct(elem) {
    const productId = Number(elem.closest('.js-card').dataset.id);
    return instruments.find(({ id }) => id === productId);
  }