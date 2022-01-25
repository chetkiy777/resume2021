const certifList = document.querySelector('[data-list]')
const previewElem = document.querySelector('[data-preview]')
const modal = document.querySelector('.modal')

const modalShow = (src) => {
    previewElem.setAttribute('src', src)
    modal.classList.remove('hidden')
}

const modalHide = () => {
    modal.classList.add('hidden')
}

const resize = e => {
    if (e.target.nodeName === 'IMG') {
        const src = e.target.getAttribute('src')
        modalShow(src)
        previewElem.addEventListener('click', modalHide)
    }
}

certifList.addEventListener('click', resize)


