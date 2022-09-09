const lock = document.querySelector('.lock-emoji')
const passwordRequestDiv = document.querySelector('.password-request')
const unlockedDiv = document.querySelector('.vault-container')
const passwordSubmitButton = document.querySelector('.password-submit')
const passwordInput = document.querySelector('.password-input')
let passwordOfTheDay = '1289'

function lockClick(){
    passwordRequestDiv.style.display = 'flex'
}

function checkPassword(e){
    e.preventDefault()
    if(passwordInput.value == passwordOfTheDay){
        unlockedDiv.style.display = 'grid'
        passwordRequestDiv.style.display = 'none'
    }else{
        console.log('err')
    }
}

//event handlers
lock.addEventListener('click', lockClick)
passwordSubmitButton.addEventListener('click', checkPassword)