/* Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

<!DOCTYPE html>
<html>
<body>

  <div data-widget-name="menu">Choose the genre</div>
  
  </body>
  </html> */


console.log(document.querySelector('[data-widget-name]').dataset.widgetName);