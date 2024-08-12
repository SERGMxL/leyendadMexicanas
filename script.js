$(document).ready(function(){
    $(".card").hover(function(){
      $(this).find(".hidden").slideDown(300); // Mostramos el contenido al pasar el ratón
    }, function(){
      $(this).find(".hidden").slideUp(300); // Ocultamos el contenido al salir del ratón
    });
  });
  