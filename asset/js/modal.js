

$(function(){
    var control  = 0;
    var index    = 0;
    var $galeria;
    var total    = 0;

    $("#proyectos-container a").on("click", function(){
        index = $(this).index();
        $("#modal").fadeIn();
        $("#modal .modal-proyectos").hide();
        $("#modal .modal-proyectos").eq(index).fadeIn();

        $("#modal .modal-proyectos").eq(index).children().eq(0).children().hide();
        $("#modal .modal-proyectos").eq(index).children().eq(0).children().eq(0).fadeIn(); 
        
        control = 0;
        $galeria = $("#" + $(this).attr("href"));
        total = $galeria.children().size();
        return false;
    });
})