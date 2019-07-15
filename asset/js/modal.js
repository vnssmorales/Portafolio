$(function(){
    var control  = 0;
    var index    = 0;
    var $galeria;

    $("#proyectos-container a").on("click", function(){
        index = $(this).index();
        $("#modal").fadeIn();
        $("#modal .coleccion-modal").hide();
        $("#modal .coleccion-modal").eq(index).fadeIn();

        $("#modal .coleccion-modal").eq(index).children().eq(0).children().hide();
        $("#modal .coleccion-modal").eq(index).children().eq(0).children().eq(0).fadeIn();
        return false;
    });
})