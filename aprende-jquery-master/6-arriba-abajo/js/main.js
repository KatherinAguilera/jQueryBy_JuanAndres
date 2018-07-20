// Esperar que el DOM esté listo
$(document).ready(function () {
    // Parent un nivel hacia arriba ejemplo span a/ parents hacia todos
    /*var $parent = $('.lateral').find('span').last().parents();
    $parent.css('border', '1px solid red');*/

    // Children -> los hijos de main en este caso los aside como ejem/ find
  /*  var $children = $('.contenido').find('p').last().prev();
    $children.css({
        'transition': 'all 2s',
        'transform': 'rotate(180deg)'
    });*/

    var $children = $('main').find('*');
    $children.css({
        'transition': 'all 2s',
        'transform': 'rotate(180deg)'
    });
});