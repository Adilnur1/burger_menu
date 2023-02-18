const menu = document.querySelector('.menu-body')
const menuBtn = document.querySelector('.menu-icon')
const Btn = document.querySelector('.aa')
const Btn1 = document.querySelector('.aa1')
const Btn2 = document.querySelector('.aa2')
const body = document.body;

if(menu && menuBtn) {
    menuBtn.addEventListener('click', () =>{
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
        Btn.classList.toggle('active')
        Btn1.classList.toggle('active')
        Btn2.classList.toggle('active')

    })

    menu.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click',() => {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
            Btn.classList.remove('active')
            Btn1.classList.remove('active')
            Btn2.classList.remove('active')
        })
    })
}