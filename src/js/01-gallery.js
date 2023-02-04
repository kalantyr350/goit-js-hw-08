// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const markupImg = createImgMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', markupImg);

galleryEl.addEventListener('click', onClickImg);

function createImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `
      
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      
    `;
    })
    .join('');
}

function onClickImg(evt) {
  evt.preventDefault();
  // console.log(!evt.target.classList.contains('gallery'));
  if (!evt.target.classList.contains('gallery')) {
    return;
  }
}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
