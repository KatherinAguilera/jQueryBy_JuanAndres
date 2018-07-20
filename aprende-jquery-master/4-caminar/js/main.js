// Esperar que el DOM esté listo
$(document).ready(function(){
//$('section.contenido p:first-of-type');
//encontrar por: eq por orden, o first primero
$('.contenido').find('p').eq(2).css('background-color', 'red');

$('.contenido').find('li').first().css('background-color', 'yellow');
});