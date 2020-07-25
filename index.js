const select = document.querySelector('#select')
const form = document.querySelector('.form')
const container1 = document.querySelector('#clientIdContainer')
const container2 = document.querySelector('#clientSecretContainer')
const container4 = document.querySelector('#refreshTokenContainer')
const container5 = document.querySelector('#oAuthScopeContainer')
const clientId = document.querySelector('#clientId')
const clientSecret = document.querySelector('#clientSecret')
const refreshToken = document.querySelector('#refreshToken')
const oAuthScope = document.querySelector('#oAuthScope')
const clientIdError = document.querySelector('#clientIdError')
const clientSecretError = document.querySelector('#clientSecretError')
const refreshTokenError = document.querySelector('#refreshTokenError')
const oAuthScopeError = document.querySelector('#oAuthScopeError')
const selectError = document.querySelector('#selectError')


const printTheOutput = event => {
    event.preventDefault();
    console.log('select', select.options[select.value].innerHTML)
    console.log('clientId', clientId.value)
    console.log('clientSecret', clientSecret.value)
    console.log('refreshToken', refreshToken.value)
    console.log('oAuthScope', oAuthScope.value)
}

const onSelect = event => {
    event.preventDefault();
    const actionValue = select.value;
    if(actionValue ===  '1') {
        container1.classList.remove('hide')
        container2.classList.remove('hide')
        container4.classList.add('hide')
        container5.classList.remove('hide')
        clientId.required = true
        clientSecret.required = true
        refreshToken.required = false
        oAuthScope.required = true
        clientId.disabled = false
        clientSecret.disabled = false
        refreshToken.disabled = true
        oAuthScope.disabled = false
    }
    if(actionValue ===  '2') {
        container1.classList.remove('hide')
        container2.classList.remove('hide')
        container4.classList.remove('hide')
        container5.classList.add('hide')
        clientId.required = true
        clientSecret.required = true
        refreshToken.required = true
        oAuthScope.required = false
        clientId.disabled = false
        clientSecret.disabled = false
        refreshToken.disabled = false
        oAuthScope.disabled = true
    }
    if(actionValue ===  '3') {
        container1.classList.add('hide')
        container2.classList.add('hide')
        container4.classList.remove('hide')
        container5.classList.add('hide')
        clientId.required = false
        clientSecret.required = false
        refreshToken.required = true
        oAuthScope.required = false
        clientId.disabled = true
        clientSecret.disabled = true
        refreshToken.disabled = false
        oAuthScope.disabled = true
    }
}

select.addEventListener('change', onSelect)
form.addEventListener('submit', printTheOutput)
