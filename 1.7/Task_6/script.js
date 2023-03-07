/* Есть дерево, организованное в виде вложенных списков ul/li.

Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте. */


let items = document.querySelectorAll('li');
for (let item of items) {
    let count = item.querySelectorAll('li').length;

    item.firstChild.data += `[${count}]`;
}
