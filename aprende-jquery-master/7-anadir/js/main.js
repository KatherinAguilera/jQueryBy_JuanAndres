// Esperar que el DOM esté listo
$(document).ready(function () {
	//after-> insertar un elemento despues de la seleccion ejemplo despues de p
	//before-> insertar un elemento antes de la seleccion ejemplo despues de p
    var $enlace = $('<a href="#">Conocer más gatos negros!</a>');
    $('.contenido').find('p').after($enlace);
});