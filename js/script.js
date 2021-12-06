const body = document.querySelector('body')
const popup = document.querySelector('.popup')
const popupOpenBtn = document.querySelector('.result__btn--active')
const popupCloseBtn = document.querySelector('.popup__close')


popupOpenBtn.addEventListener('click', function(event){
    body.style.overflowY = 'hidden';
    popup.classList.add('popup--active');
});

popupCloseBtn.addEventListener('click', function(event){
    popup.classList.remove('popup--active');
    body.removeAttribute('style');
});