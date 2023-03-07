/* Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:

<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul> */

let ul = document.querySelector('ul');
let one = document.querySelector('#one');

for (let i = 2; i < 4; i++) {
    let li = document.createElement('li');
    li.innerHTML = i;
    one.append(li);
}
