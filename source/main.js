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
const buttons = document.querySelectorAll('.small-vaults-eventTarget')
buttons.forEach(element => {
    element.addEventListener('click', displayInfo)
});


function displayInfo(e){
    const htmlInfo = document.querySelector('.unlocked-html')
    const cssInfo = document.querySelector('.unlocked-css')
    const jsInfo = document.querySelector('.unlocked-js')
    const targetClass = e.target.classList

    if(targetClass[0] === 'HTML-vault' || targetClass[0] === 'HTML-title' || targetClass[0] === 'html-emoji'){
        htmlInfo.style.display = 'block'
        unlockedDiv.style.display = 'none'
    }else if(targetClass[0] === 'CSS-vault' || targetClass[0] === 'CSS-title' || targetClass[0] === 'css-emoji'){
        cssInfo.style.display = 'block'
        unlockedDiv.style.display = 'none'
    
    }else if(targetClass[0] === 'JS-vault' || targetClass[0] === 'JS-title' || targetClass[0] === 'js-emoji'){
        jsInfo.style.display = 'block'
        unlockedDiv.style.display = 'none'
    }
}
