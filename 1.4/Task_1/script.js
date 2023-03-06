/* Вот документ с таблицей и формой.

Как найти?…

1 Таблицу с id="age-table".
2 Все элементы label внутри этой таблицы (их три).
3 Первый td в этой таблице (со словом «Age»).
4 Форму form с именем name="search".
5 Первый input в этой форме.
6 Последний input в этой форме.
Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика. */

//1
let table = document.querySelector('#age-table');
console.log(table);

//2
console.log(table.querySelectorAll('label'));

//3
console.log(table.querySelector('td'));

//4
let form = document.getElementsByName('search')[0];
console.log(form);

//5 
console.log(form.querySelector('input'));

//6
let inputs = form.querySelectorAll('input');
console.log(inputs[inputs.length - 1]);


