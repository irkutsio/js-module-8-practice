function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({
          id,
          name,
          img,
        }) => `<li class="js-card" data-id="${id}"><img src="${img}" alt="${name}" width="400">
  <h2>${name}</h2>
  <p><a href="#" class="js-info">More infirmation</a></p>
  <div>
    <button class="js-favorite">Add to favourite</button>
    <button class="js-basket">Add to basket</button>
  </div></li>`
      )
      .join('');
  } else {
    markup = `<li><img src="https://bayguzin.ru/assets/cache_image/2014/03/zaglushka_1024x0_326.webp" alt="404" width="600">
   </li>`;
  }
  list.innerHTML = markup;
};

export { createMarkup };
