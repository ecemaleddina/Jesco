function slider() {
  const sliderItems = document.querySelectorAll(".slider-item");
  const icon = document.querySelectorAll(".arrow-icon");
  const img = document.querySelector(".slider-img");
  const fluid = document.querySelector(".bg-changing");
  const IntervalId = setInterval(timing1, 5000);

  icon.forEach((a) => {
    a.addEventListener("click", timing1);
  });

  function timing1() {
    sliderItems.forEach((element) => {
      element.classList.add("move");
    });

    setTimeout(() => {
      sliderItems.forEach((element) => {
        element.classList.remove("move");
      });
    }, 2000);

    setTimeout(() => {
      img.src =
        img.src ==
        "https://htmldemo.net/jesco/jesco/assets/images/slider-image/slider-1.png"
          ? "https://htmldemo.net/jesco/jesco/assets/images/slider-image/slider-2.png"
          : "https://htmldemo.net/jesco/jesco/assets/images/slider-image/slider-1.png";
    }, 1000);
    fluid.classList.toggle("bg-change");
    clearInterval(IntervalId);
  }
}

function mobileMenu() {
  const mobMenu = document.querySelector(".mobile-menu");
  const mobItems = document.querySelectorAll(".mobile-menu-item");
  const subOpener = document.querySelector(".sub-menu-opener");
  const mobBtn = document.querySelector(".mobile-menu-btn");
  const body = document.body;

  subOpener.addEventListener("click", () => {
    mobMenu.classList.toggle("mobile-menu-anim");
    body.classList.toggle("overflow-hidden");
  });

  mobBtn.addEventListener("click", () => {
    mobMenu.classList.remove("mobile-menu-anim");
    body.classList.remove("overflow-hidden");
  });

  mobItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
      item.nextElementSibling.classList.toggle("open-sub");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  slider();
  mobileMenu();
});


$(document).ready(function() {
  var targetDateString = "2023-12-31T04:33:30"; 
  var targetDate = new Date(targetDateString);

  $(".count-down").countdown(targetDate, function(event) {
      $(this).find(".count-day .number").text(event.strftime('%D'));
      $(this).find(".count-hour .number").text(event.strftime('%H'));
      $(this).find(".count-min .number").text(event.strftime('%M'));
      $(this).find(".count-sec .number").text(event.strftime('%S'));
  });
});