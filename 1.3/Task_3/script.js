/* Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

//  в переменной td находится DOM-элемент для тега <td>
td.style.backgroundColor = 'red'; */

console.log(document.body.children[0].rows[0].cells);

for (let i = 0; i < document.body.children[0].rows.length; i++) {
    document.body.children[0].rows[i].cells[i].style.backgroundColor = 'red';
}