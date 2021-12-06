const eyeIcon = document.querySelectorAll('.form__eye-icon')
const openEyeIcon = document.querySelector('.form__eye-icon--open')
const closeEyeIcon = document.querySelector('.form__eye-icon--close')
const passwordInputField = document.querySelector('.form__input--password')

function changeIconState(){
    let display = window.getComputedStyle(openEyeIcon,null).getPropertyValue("display");
    if (display === "block"){
        openEyeIcon.style.display = 'none';
        closeEyeIcon.style.display = 'block';
        passwordInputField.setAttribute("type", "text");
        passwordInputField.style.letterSpacing = 'normal';
    }
    else{
        openEyeIcon.style.display = 'block';
        closeEyeIcon.style.display = 'none';
        passwordInputField.setAttribute("type", "password");
        passwordInputField.style.letterSpacing = '5px';
    }
}

eyeIcon.forEach(function(icon){
    icon.addEventListener('click', function(){
        console.log('clicked')
        changeIconState();
    });
})