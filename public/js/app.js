const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messagTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messagTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messagTwo.textContent = data.forecast
            }
        })
    })
})