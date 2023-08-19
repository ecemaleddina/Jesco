function listSelector() {
    const options = document.querySelectorAll('.option');
    const current = document.querySelector('.current');

    options.forEach(option => {
        option.addEventListener('click', () => {
            options.forEach(option => {
                option.classList.remove('selected');
            })
            option.classList.add('selected');
            current.textContent = option.textContent;
        })
    })
}

function prodType() {
    const buttons = document.querySelectorAll('.prod-type');
    const types = document.querySelectorAll('.shop-prods')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            buttons.forEach(button => {
                button.classList.remove('active');
            })
            types.forEach(type => {
                type.classList.remove('active-type');
            })
            buttons[i].classList.add('active');
            types[i].classList.add('active-type');
        })
    }
}

function listOpening() {
    const opener = document.querySelector('.select-area');
    const list = document.querySelector('.list');

    opener.addEventListener('click', () => {
        list.classList.toggle('open');


        if (list.classList.contains('open')) {
            opener.style.setProperty('--icon-content', '"\\f077"');
        } else {
            opener.style.setProperty('--icon-content', '"\\f078"');
        }
    })
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

document.addEventListener('DOMContentLoaded', ()=>{
    listOpening();
    prodType();
    listSelector();
    circles();
})

