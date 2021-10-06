const image = document.querySelector('img')
const animalList = Array.from(document.getElementsByClassName('animal')) 
console.log(animalList)

function changeAnimal(animal){
    image.setAttribute('src',`./${animal}.jpg`)
    image.setAttribute('data-animal',animal)
}

function nextAnimal(){
    let animal = catchAnimal()
    let animalValueList = animalList.map((item)=>{
        return item.innerHTML.toLowerCase()
    })
    let actualPosition = animalValueList.indexOf(animal)
    let newPosition = actualPosition == 2 ? 0: actualPosition+1
    changeAnimal(animalValueList[newPosition])
}

function alertAnimal(){
    let animal = catchAnimal()
    window.alert(`The animal in the picture is a ${animal}`)
}

function catchAnimal(){
    let animal = image.getAttribute('data-animal')
    return animal
}
