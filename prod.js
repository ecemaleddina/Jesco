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

function prodImg() {
    const smallImgs = document.querySelectorAll('#small-img');
    const bigImg = document.querySelector('#big-img');

    smallImgs.forEach(x => {
        x.addEventListener('click', (e) => {
            bigImg.src = e.target.src;
        })
    })
}

function descRev() {
    const tabs = document.querySelectorAll(".desc-rev-top a");
    const sections = document.querySelectorAll(".desc-rev-bottom div");

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', () => {
            tabs.forEach(tab => {
                tab.classList.remove('active');
            })
            sections.forEach(section => {
                section.classList.remove('block');
            })
            tabs[i].classList.add('active');
            sections[i].classList.add('block');
        })
    }
}


function circles() {
    const sidebarWidgets = document.querySelectorAll('.sidebar-widget');

    sidebarWidgets.forEach(widget => {
        const circles = widget.querySelectorAll('.circles');

        circles.forEach(circle => {
            circle.addEventListener('click', () => {
                circles.forEach(c => {
                    c.classList.remove('current');
                });
                circle.classList.add('current');
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    circles();
    descRev();
    prodImg();
    addToCart();
});