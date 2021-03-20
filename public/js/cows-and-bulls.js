const form = document.querySelector('#main-submit')
const input = document.querySelector('#userTry')
const warning = document.querySelector('.error')

form.addEventListener('submit', e =>{
    e.preventDefault()
    const userTry = input.value

    if(userTry.length == 4){
        let matches = 0
        for (let i = 0; i < userTry.length; i++) {
            const digit = userTry[i];
            for (let j = 0; j < userTry.length; j++) {
                const element = userTry[j];
                if(digit == element){
                    matches ++
                }
            }
        }
        if (matches != 4) {
            warning.classList.add('false')
            warning.innerHTML = "Do not use a digit more than once within the same try."
            return
        }else{
            console.log('all good')
            form.submit()
        }
    }else{
        warning.classList.add('false')
        warning.innerHTML = "Too long, only 4 digits are needed"
        return
    }
})