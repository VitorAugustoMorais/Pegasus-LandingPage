const menuHidden = document.getElementById('menuHidden')
const btnMenuOpen = document.getElementById('btnMenuOpen')

function openMenu() {
    btnMenuOpen.className = 'hide'
    menuHidden.className = "show"
}

function closeMenu() {
    btnMenuOpen.className = "show"
    menuHidden.className = 'hide'
}
