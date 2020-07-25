const select = document.querySelector('#select')
const form = document.querySelector('.form')
const container1 = document.querySelector('#clientIdContainer')
const container2 = document.querySelector('#clientSecretContainer')
const container3 = document.querySelector('#redirectURLContainer')
const container4 = document.querySelector('#refreshTokenContainer')
const clientId = document.querySelector('#clientId')
const clientSecret = document.querySelector('#clientSecret')
const redirectURL = document.querySelector('#redirectURL')
const refreshToken = document.querySelector('#refreshToken')

const printTheOutput = event => {
    event.preventDefault();
    console.log('select', select.options[select.value].innerHTML)
    console.log('clientId', clientId.value)
    console.log('clientSecret', clientSecret.value)
    console.log('redirectURL', redirectURL.value)
    console.log('refreshToken', refreshToken.value)
}

const onSelect = event => {
    event.preventDefault();
    const actionValue = select.value;
    if(actionValue ===  '1') {
        container1.classList.remove('hide')
        container2.classList.remove('hide')
        container3.classList.remove('hide')
        container4.classList.add('hide')
    }
    if(actionValue ===  '2') {
        container1.classList.remove('hide')
        container2.classList.remove('hide')
        container3.classList.remove('hide')
        container4.classList.remove('hide')
    }
    if(actionValue ===  '3') {
        container1.classList.add('hide')
        container2.classList.add('hide')
        container3.classList.add('hide')
        container4.classList.remove('hide')
    }
}

select.addEventListener('change', onSelect)
form.addEventListener('submit', printTheOutput)
