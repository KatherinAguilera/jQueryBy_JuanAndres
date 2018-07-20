//JavaScript
/*var elemento = document.querySelector('h1');
var timeout = setTimeout (function () {
   elemento.innerHTML = 'Hola Katherine';
}, 1000);*/

//jquery

var elemento = $('h1');
var timeout = setTimeout (function () {
   elemento.text ('Hola DESDE aqui!!');
}, 1000);
