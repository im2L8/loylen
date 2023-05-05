let cards = document.querySelectorAll('.catalog__block');

document.querySelector('.catalog__filter').addEventListener('click', event => {
    if (event.target.tagName != 'A') return false;

    let filterClass = event.target.dataset['f'];
    
    cards.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
            document.querySelector('.catalog__grid-row').style.justifyContent = 'flex-start';
        }
        else {
            document.querySelector('.catalog__grid-row').style.justifyContent = 'space-between';
        }
    });
});