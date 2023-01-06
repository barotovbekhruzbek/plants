let burger = document.querySelector('.burger')
let mobileMenu = document.querySelector('.mobile')
let btnclose = document.querySelector('.close')

burger.addEventListener('click', ()=> {
    mobileMenu.classList.add('mobileactive')
})

btnclose.addEventListener('click', ()=> {
    mobileMenu.classList.remove('mobileactive')
})




let gardensbtn = document.querySelector('.garde')
let boxbtn = document.querySelector('.planting')
let boxbtnlawn = document.querySelector('.lawn')
let garden = document.querySelector('.garden')

gardensbtn.addEventListener('click', ()=> {


    boxbtnlawn.classList.toggle('gardens')
    boxbtn.classList.toggle('gardens')
})


let lawn = document.querySelector('.lawnbtns')

lawn.addEventListener('click', ()=> {
    garden.classList.add('gardens')
    boxbtn.classList.add('gardens')
})


let plant = document.querySelector('.plantings')
plant.addEventListener('click', () => {
    boxbtnlawn.classList.toggle('gardens')
    garden.classList.toggle('gardens')
})

