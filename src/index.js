
import { createMarkup } from './helpers/createMarkup';
import { common } from './common';
import { createModal } from './helpers/createModal';
import { instruments } from './helpers/instruments';


const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

const favouriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVOURITET)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];;



createMarkup(instruments, list);

list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const product = findProduct(evt.target);
    createModal(product)
   }
  if (evt.target.classList.contains('js-basket')) {
    const product = findProduct(evt.target);
    basketArr.push(product);
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
  }

  if (evt.target.classList.contains('js-favorite')) {
    const product = findProduct(evt.target);
    const inStorage = favouriteArr.some(({id}) => id === product.id)
    if (inStorage) {
      return
    };
    favouriteArr.push(product);
    localStorage.setItem(common.KEY_FAVOURITET, JSON.stringify(favouriteArr));
  }
}

function findProduct(elem) {
  const productId = Number(elem.closest('.js-card').dataset.id);
  return instruments.find(({ id }) => id === productId);
};


