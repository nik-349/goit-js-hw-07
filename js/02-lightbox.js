import { galleryItems } from './gallery-items.js';
// Change code below this line

const ref = {
    galaryListHtml: document.querySelector('.gallery'),
}


function gallaryFunHtml(lightbox) {
    return lightbox.map(e => {
        return `
  <a class="gallery__item" href='${e.original}'>
    <img
      class="gallery__image"
      src='${e.preview}'
      alt='${e.description}'
    />
  </a>`
    }).join('')
}

function tupImG(e) {
  e.preventDefault()
}



ref.galaryListHtml.insertAdjacentHTML('beforeend', gallaryFunHtml(galleryItems));
ref.galaryListHtml.addEventListener('click', tupImG)

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });         