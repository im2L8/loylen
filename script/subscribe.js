let sub = 0;

function subscribe() {
    let email = document.getElementById('E-mail').value;
    let format = false;
    for (let i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            format = true;
        }
    }
    if (sub != 0) {
        alert('Подписка уже была оформлена!');
    }
    else {
        if (email == '') {
            alert('Введите почту');
        }
        else if (format == false) {
            alert('Неверный формат почты!');
        }
        else {
            alert('Подписка оформлена!');
            sub++;
        }
    }
}