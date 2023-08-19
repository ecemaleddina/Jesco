function accordion() {
    const accordionBody = document.querySelectorAll('.accordion-content');
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionContent = header.parentElement.lastElementChild;
            accordionBody.forEach(body => {
                if (body != accordionContent) {
                    body.classList.remove('active-accordion');
                }
            })
            accordionHeaders.forEach(head => {
                head.classList.remove('active');
            })
            accordionContent.classList.toggle('active-accordion');
            header.classList.toggle('active');
        });
    });
}

accordion();