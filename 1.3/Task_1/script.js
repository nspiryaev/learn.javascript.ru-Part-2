/* Для страницы:

<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>
Напишите код, как получить…

элемент <div>?
<ul>?
второй <li> (с именем Пит)? */

console.group();
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.nextElementSibling);
console.log(document.body.firstElementChild.nextElementSibling.lastElementChild);
console.groupEnd();