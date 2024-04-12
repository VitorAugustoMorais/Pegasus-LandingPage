const menuHidden = document.getElementById('menuHidden')
const btnMenu = document.getElementById('btnMenu')

function menuHamburger() {
    btnMenu.style.display = 'none'
    menuHidden.style.display = "inline"
}

function fecharMenu() {
    btnMenu.style.display = "inline"
    menuHidden.style.display = 'none'
}