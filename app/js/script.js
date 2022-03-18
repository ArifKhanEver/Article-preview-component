const icon = document.querySelector('.share-icon');
const shareSection = document.querySelector('.share-section');

icon.addEventListener('click', ()=> {
    icon.classList.toggle('active');
    shareSection.classList.toggle('active')
})