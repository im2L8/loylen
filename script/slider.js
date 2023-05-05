let offset = 0;
const screenWidth = window.screen.width;
const sliderLine = document.querySelector('.instagram__photos');

document.querySelector('.instagram__next').addEventListener('click', function (){
    offset += 455;
    if (offset > screenWidth) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})

document.querySelector('.instagram__prev').addEventListener('click', function (){
    offset -= 455;
    if (offset < 0) {
        offset = screenWidth;
    }
    sliderLine.style.left = -offset + 'px';
})