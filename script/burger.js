let burgerClicks = 0;

function burgerList() {
    if (burgerClicks % 2 == 0) {
        document.querySelector('.header__burger-list').style.display = 'flex';
    }
    else {
        document.querySelector('.header__burger-list').style.display = 'none';
    }
    burgerClicks += 1;
}