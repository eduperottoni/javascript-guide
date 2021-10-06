const keyPressedHtml = document.querySelector('.key-pressed')
const keyCodeHtml = document.querySelector('.key-code')

window.addEventListener('keyup', (e)=>{
    e.preventDefault();
    let keyPressed = e.key.toUpperCase()
    console.log(e)
    let keyCode = e.keyCode
    keyPressedHtml.innerHTML = `${keyPressed}`
    keyCodeHtml.innerHTML = `<strong>keyCode:</strong> ${keyCode}`

})
