function accordion() {
  const accordionBody = document.querySelectorAll(".accordion-content");
  const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const accordionContent = header.parentElement.lastElementChild;
        accordionBody.forEach((body) => {
          if (body != accordionContent) {
            body.classList.remove("active-accordion");
          }
        });
        accordionHeaders.forEach((head) => {
          if (head != header) {
            head.classList.remove("active");
          }
        });
        accordionContent.classList.toggle("active-accordion");
        header.classList.toggle("active");
      });
    });
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
  accordion();
  mobileMenu();
});
