const body = document.querySelector('body')
const popup = document.querySelector('.popup')
const popupOpenBtn = document.querySelector('.result__btn--active')
const popupCloseBtn = document.querySelector('.popup__close')
const popupSelector = document.querySelector('.popup__selector')
const popupSelectorBullets = document.querySelectorAll('.popup__circle')

function deleteActiveBullet(){
    let currentActiveBullet = popupSelector.querySelector('.popup__circle--active');
    if (currentActiveBullet !== null){
        currentActiveBullet.classList.remove('popup__circle--active')
    }
}

popupOpenBtn.addEventListener('click', function(event){
    body.style.overflowY = 'hidden';
    popup.classList.add('popup--active');
});

popupCloseBtn.addEventListener('click', function(event){
    popup.classList.remove('popup--active');
    deleteActiveBullet();
    body.removeAttribute('style');

});

popupSelectorBullets.forEach(function(bullet){
    bullet.addEventListener('click', function(){
        deleteActiveBullet();
        bullet.classList.add('popup__circle--active');
    });
});