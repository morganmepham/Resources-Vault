const lock = document.querySelector('.lock-emoji')
const passwordRequestDiv = document.querySelector('.password-request')
const unlockedDiv = document.querySelector('.vault-container')
const passwordSubmitButton = document.querySelector('.password-submit')
const passwordInput = document.querySelector('.password-input')
let passwordOfTheDay = '1289'

//Unlock Vault
function lockClick(){
    passwordRequestDiv.style.display = 'flex'
}

function checkPassword(e){
    try{
        e.preventDefault()
    }catch(error){
        console.log(error)
    }

    try{
        if(passwordInput.value == passwordOfTheDay){
            unlockedDiv.style.display = 'grid'
            passwordRequestDiv.style.display = 'none'
            lock.style.display = 'none'
        }
    }catch(error){
        console.log(error)
    }
}

//event handlers
lock.addEventListener('click', lockClick)
passwordSubmitButton.addEventListener('click', checkPassword)


//Display Info
