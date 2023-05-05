let akardeonClicksCat = 0;
let akardeonClicksSell = 0;
let akardeonClicksUs = 0;

function akardeonCat() {
    if (akardeonClicksCat % 2 == 0) {
        document.querySelector('.footer__points-cat').style.opacity = '1';
        document.querySelector('.footer__akardeon-cat').style.rotate = '360deg';
    }
    else {
        document.querySelector('.footer__points-cat').style.opacity = '0';
        document.querySelector('.footer__akardeon-cat').style.rotate = '180deg';
    }
    akardeonClicksCat += 1;
}

function akardeonSell() {
    if (akardeonClicksSell % 2 == 0) {
        document.querySelector('.footer__points-sell').style.opacity = '1';
        document.querySelector('.footer__akardeon-sell').style.rotate = '360deg';
    }
    else {
        document.querySelector('.footer__points-sell').style.opacity = '0';
        document.querySelector('.footer__akardeon-sell').style.rotate = '180deg';
    }
    akardeonClicksSell += 1;
}

function akardeonUs() {
    if (akardeonClicksUs % 2 == 0) {
        document.querySelector('.footer__points-us').style.opacity = '1';
        document.querySelector('.footer__akardeon-us').style.rotate = '360deg';
    }
    else {
        document.querySelector('.footer__points-us').style.opacity = '0';
        document.querySelector('.footer__akardeon-us').style.rotate = '180deg';
    }
    akardeonClicksUs += 1;
}