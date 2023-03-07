/* Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

Например:

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};
Синтаксис:

let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере
Результат (дерево):


Выберите один из двух способов решения этой задачи:

Создать строку, а затем присвоить через container.innerHTML.
Создавать узлы через методы DOM.
Если получится – сделайте оба.

P.S. Желательно, чтобы в дереве не было лишних элементов, в частности -– пустых <ul></ul> на нижнем уровне. */

function createTree(container, data) {
    container.append(createTreeDom(data));
}

function createTreeDom(data) {
    if (!Object.keys(data).length) return;

    let ul = document.createElement('ul');
    document.querySelector('#container').append(ul);

    for (let key in data) {
        let li = document.createElement('li');
        li.innerHTML = key;

        let childrenUl = createTreeDom(data[key]);
        if (childrenUl) {
            li.append(childrenUl);
        }

        ul.append(li);
    }

    return ul;
}

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};


let container = document.getElementById('container');
createTree(container, data);