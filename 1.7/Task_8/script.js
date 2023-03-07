/* Создайте цветные часы как в примере ниже:

Для стилизации используйте HTML/CSS, JavaScript должен только обновлять время в элементах. */

let timerId;

function update() {
    let clock = document.getElementById('clock');
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
}

function clockStart() {
    // устанавить новый интервал только в том случае, если часы остановлены
    // в противном случае мы бы переписали ссылку timerID на интервал выполнения и никогда больше не смогли бы остановить часы
    if (!timerId) {
        timerId = setInterval(update, 1000);
    }
    update(); // <--  начать тут же, не ждать 1 секунду пока первый setInterval сработает
}

function clockStop() {
    clearInterval(timerId);
    timerId = null; // <-- очистить timerID, чтобы указать, что часы были остановлены, чтобы можно было запустить их снова в clockStart()
}