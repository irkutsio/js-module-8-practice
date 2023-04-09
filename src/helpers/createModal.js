import * as basicLightbox from 'basiclightbox';

import 'basicLightbox/dist/basicLightbox.min.css';

function createModal (product) {
    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${product.img}" alt="${product.name}" width="250">
    <h2>${product.name}</h2>
    <h3>${product.price}грн</h3>
    <p>${product.description}</p>
    <div>
    <button class="js-favorite">Add to favourite</button>
    <button class="js-basket">Add to basket</button>
    </div>
  </div>
`);
instance.show();
}

export {createModal};