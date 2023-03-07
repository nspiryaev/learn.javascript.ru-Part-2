/* Напишите интерфейс для создания списка.

Для каждого пункта:

Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте элемент <li> и добавляйте его к <ul>.
Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
Все элементы должны создаваться динамически.

Если пользователь вводит HTML-теги, они должны обрабатываться как текст. */

let ul = document.createElement('ul');
document.querySelector('body').prepend(ul);

while (true) {
    let userText = prompt('Введите текст для списка', '');
    let li = document.createElement('li');

    if (!userText) break;

    li.innerHTML = userText;
    document.querySelector('ul').append(li);
}

