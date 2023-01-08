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

//dropdown

const allDropdowns = document.querySelectorAll('.dropdown__')
if (allDropdowns) {
    allDropdowns.forEach(dropdown => {
        let dropdownList = dropdown.querySelector('.dropdown__list__')
        let dropdownListHeight = dropdownList.getBoundingClientRect().height
        let compStl = window.getComputedStyle(dropdownList)
        let currentpadding = compStl.getPropertyValue('padding')
        let dropdownListPadding = currentpadding
        dropdownList.style.height = '0px';
        dropdownList.style.overflow = 'hidden';
        dropdownList.style.padding = '0px'
        dropdownList.style.display = 'none';

        dropdown.addEventListener('click', () => {
            allDropdowns.forEach(dropdown2 => {
                if (dropdown2.classList.contains('active') && dropdown !== dropdown2) {
                    dropdown2.classList.remove('active')
                    let dropdownList2 = dropdown2.querySelector('.dropdown__list__')
                    dropdownList2.style.height = `0px`;
                    dropdownList2.style.padding = '0px'
                    let compStyle = window.getComputedStyle(dropdownList2)
                    let currentTransition = compStyle.getPropertyValue(
                        'transition-duration')
                    setTimeout(() => {
                        dropdownList2.style.display = 'none'
                    }, currentTransition.slice(0, -1) * 1000)
                }
            })
            if (dropdown.classList.contains('active')) {
                dropdown.classList.remove('active')
                dropdownList.style.height = `0px`;
                dropdownList.style.padding = '0px'

                let compStyle = window.getComputedStyle(dropdownList)
                let currentTransition = compStyle.getPropertyValue('transition-duration')
                setTimeout(() => {
                    dropdownList.style.display = 'none'
                }, currentTransition.slice(0, -1) * 1000)
            } else if (!dropdown.classList.contains('active')) {
                dropdown.classList.add('active')
                dropdownList.style.display = 'flex';

                setTimeout(() => {
                    dropdownList.style.height = `${dropdownListHeight}px`;
                    dropdownList.style.padding = `${dropdownListPadding}`;

                }, 50)
            }
        })
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown__')) {
                allDropdowns.forEach(dropdown2 => {
                    dropdown2.classList.remove('active')
                    let dropdownList2 = dropdown2.querySelector('.dropdown__list__')
                    dropdownList2.style.height = `0px`;
                    dropdownList2.style.padding = '0px'
                    let compStyle = window.getComputedStyle(dropdownList2)
                    let currentTransition = compStyle.getPropertyValue(
                        'transition-duration')
                    setTimeout(() => {
                        dropdownList2.style.display = 'none'
                    }, currentTransition.slice(0, -1) * 1000)
                })
            }
        })

    })
}

let basic = document.querySelector('.active-basic')
basic.addEventListener('click', ()=> {
    dropdownList.add('gardens')
})


//select

const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
    optionMenu.classList.toggle("active")
);

options.forEach((option) => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});
