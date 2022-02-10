import { galleryItems } from './gallery-items.js';
// Change code below this line



const ref = {
    galaryListHtml: document.querySelector('.gallery'),
    gallaryImageLigthBox: document.querySelector('body')
}

ref.gallaryImageLigthBox.addEventListener('click', tupImG)


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
ref.galaryListHtml.insertAdjacentHTML('beforeend', gallaryFunHtml(galleryItems));


function tupImG(e) {
  
  if (e.target.nodeName === 'IMG') {
    e.preventDefault()
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });        

  }
}

