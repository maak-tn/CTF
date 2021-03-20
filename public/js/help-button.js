const helpButton = document.querySelector('#help-button')
const overlay = document.querySelector('#overlay')
const hintBody = document.querySelector('#help-dialog')
const exitButton = document.querySelector('#help-exit-button')

helpButton.addEventListener('click', ()=>{
    overlay.style.display ="block"
    hintBody.style.display ="block"
})

exitButton.addEventListener('click', function(){
    overlay.style.display ="none"
    hintBody.style.display ="none"
})