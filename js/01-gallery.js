

import { galleryItems } from './gallery-items.js';
// Change code below this line
const ref = {
    galaryListHtml: document.querySelector('.gallery'),
    gallaryImageLigthBox: document.querySelector('body')
}
ref.gallaryImageLigthBox.addEventListener('click', tupImG)


function gallaryFunHtml(galleryItems) {
    return galleryItems.map(e => {
        return `<div class="gallery__item">
  <a class="gallery__link" href='${e.original}'>
    <img
      class="gallery__image"
      src='${e.preview}'
      data-source='${e.original}'
      alt='${e.description}'
    />
  </a>
</div>`
    }).join('')
}
ref.galaryListHtml.insertAdjacentHTML('beforeend', gallaryFunHtml(galleryItems));

let instance;


function tupImG(e) {
  
  if (e.target.nodeName === 'IMG') {
    e.preventDefault()
const crElem =`<img src ='${e.target.dataset.source}', alt='${e.target.alt}'>`
 instance = basicLightbox.create(crElem)
    instance.show()
  }
  ref.gallaryImageLigthBox.addEventListener('keydown', closeLiteBox)

}


function closeLiteBox(closingEscape) {

  if (closingEscape.code === 'Escape') {
    ref.gallaryImageLigthBox.removeEventListener('keydown', closeLiteBox)
  instance.close()
  }

}
  


