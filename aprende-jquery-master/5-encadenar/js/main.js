// Esperar que el DOM esté listo
//last ultimo <- prev anterior del ultimo -> next siguiente de donde esta situado
$(document).ready(function () {
    $('.contenido').find('p').last().prev().next().css('background-color', 'red');

});