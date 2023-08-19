function slider() {
    const sliderItems = document.querySelectorAll('.slider-item');
    const icon = document.querySelectorAll(".arrow-icon");
    const img = document.querySelector(".slider-img");
    const fluid = document.querySelector(".bg-changing");
    const IntervalId = setInterval(timing1, 5000);

    icon.forEach(a => {
        a.addEventListener("click", timing1);
    })

    function timing1() {
        sliderItems.forEach(element => {
            element.classList.add("move");
        });

        setTimeout(() => {
            sliderItems.forEach(element => {
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
}



document.addEventListener('DOMContentLoaded', () => {
    slider();
});