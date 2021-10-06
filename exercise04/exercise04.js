const headerHeight = document.querySelector('header').offsetHeight
const topButton = document.querySelector('button')

window.addEventListener('scroll', onOffButton)

function onOffButton(){
    let scrollTopPosition = window.scrollY

    if(scrollTopPosition > headerHeight){
        topButton.classList.remove('off')
        topButton.classList.add('on')
    }else{
        topButton.classList.remove('on')
        topButton.classList.add('off')
    }   
}

function moveUp(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}