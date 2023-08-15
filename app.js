let first = document.querySelector(".category");
let second = document.querySelector(".title-1");
let third = document.querySelector(".title-2");
let fourth = document.querySelector(".shop-btn");
let img = document.querySelector(".slider-img");
let smallBox = document.querySelector(".display-wrapper");
let icon = document.querySelectorAll(".arrow-icon");
let fluid = document.querySelector(".bg-change");
const IntervalId = setInterval(timing1, 7000);

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