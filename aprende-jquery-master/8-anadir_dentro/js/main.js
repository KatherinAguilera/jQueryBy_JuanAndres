// Esperar que el DOM esté listo
$(document).ready(function () {
    var $enlace = $('<a href="#">Conocer más gatos negros!</a>');
   // prepend intertar dentro del parrafo
   //append intertar dentro del parrafo al final
   // $('.contenido').find('p').prepend($enlace);

   //eliminar un elemento
    $('.contenido').find('p').last().remove();
});