
import { galleryItems } from './gallery-items.js';
const refs = {
  gallery: document.querySelector('.gallery'),
};
const createGalleryItem = ({ preview, original, description }) =>
  `<li class="gallery__item">
<a
  class="gallery__link"
  href=${original}
>
  <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
  />
</a>
</li>`;
const galleryMarkup = galleryItems.reduce((acc, item) => acc + createGalleryItem(item), '');

refs.gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

refs.gallery.addEventListener('click', onClick);
function onClick(evt) {
  evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {    return;  }
 

const instance = basicLightbox.create(`
 <img src="${evt.target.dataset.source}" width="800" height="600">`, {
  onShow: (instance) => {
    document.removeEventListener('keydown', onEscapeKeyDown);
  },
}); instance.show();
  function onEscapeKeyDown(event) {
    if (event.code !== 'Escape') { return; }
    instance.close();
  }
};
  
   
   

