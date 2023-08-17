let first = document.querySelector(".category");
let second = document.querySelector(".title-1");
let third = document.querySelector(".title-2");
let fourth = document.querySelector(".shop-btn");
let img = document.querySelector(".slider-img");
let smallBox = document.querySelector(".display-wrapper");
let icon = document.querySelectorAll(".arrow-icon");
let fluid = document.querySelector(".bg-changing");
const IntervalId = setInterval(timing1, 5000);

icon.forEach(a => {
    a.addEventListener("click", timing1);
})

function timing1() {
    const elementsToToggle = [first, second, third, fourth, smallBox, img];

    elementsToToggle.forEach(element => {
        element.classList.add("move");
    });

    setTimeout(() => {
        elementsToToggle.forEach(element => {
            element.classList.remove("move");
        });

    }, 2000);

    setTimeout(() => {
        img.src = img.src == 'https://htmldemo.net/jesco/jesco/assets/images/slider-image/slider-1.png'
            ? 'https://htmldemo.net/jesco/jesco/assets/images/slider-image/slider-2.png'
            : 'https://htmldemo.net/jesco/jesco/assets/images/slider-image/slider-1.png';
    }, 1000)
    fluid.classList.toggle("bg-change");
    clearInterval(IntervalId);
}


function addToCart() {
    const dec = document.querySelector('.dec');
    const inc = document.querySelector('.inc');
    const inp = document.querySelector('.num-box');

    dec.addEventListener('click', () => {
        const currentValue = parseInt(inp.value);
        if (currentValue > 1) {
            inp.value = currentValue - 1;
        }
    })

    inc.addEventListener('click', () => {
        const currentValue = parseInt(inp.value);
        inp.value = currentValue + 1;
    })
}

function descArea(){
    const desc = document.querySelectorAll('.idr');

    desc.forEach(elem =>{
        elem.addEventListener('click', ()=>{
            elem.classList.add('active');
        })
    })
}

descArea();
addToCart();