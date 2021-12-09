const body = document.querySelector('body')
const popup = document.querySelector('.popup')
const addUserPopupOpenBtn = document.querySelector('.header__button')
const popupCloseBtn = document.querySelector('.popup__button--cancel')
const popupAddUserBtn = document.querySelector('.popup__button--add')
const popupFormInputs = document.querySelectorAll('.popup__input')
const inputs = {
    firstName: document.querySelector('.popup__input--first-name'),
    lastName: document.querySelector('.popup__input--last-name'),
    email: document.querySelector('.popup__input--email'),
    password: document.querySelector('.popup__input--password'),
}


function needToChangeAddBtnState(){
    let isBlank = false;
    for (key in inputs){
        if (!inputs[key].value){
            isBlank = true;
        }
    }
    if (isBlank){
        return false;
    }
    else{
        return true;
    }
}


addUserPopupOpenBtn.addEventListener('click', function(event){
    body.style.overflowY = 'hidden';
    popup.classList.add('popup--active');
    popupAddUserBtn.disabled = true;
});

popupCloseBtn.addEventListener('click', function(event){
    popup.classList.remove('popup--active');
    body.removeAttribute('style');
});

popupFormInputs.forEach(function(form_input){
    form_input.addEventListener('keyup', function(event){
        console.log(event.type)
        if (needToChangeAddBtnState()){
            popupAddUserBtn.disabled = false;
        }
        else{
            popupAddUserBtn.disabled = true;
        }
    });
});

