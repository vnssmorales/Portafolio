/**************SLIDER************/

$(function(){
    jQuery.fn.slider = function(options){

        //configuracion inicial//
        var settings = jQuery.extend({
            time : 3000
        }, options);

        // declaración de función//
        this.each(function(){
            var $slider = $(this);
            var n       = $(this).children().size();
            var i       = 0;

            //repetir la función cada n tiempo//
            setInterval(function(){
                i = (i + 1) % n;
                $slider.children().hide();
                $slider.children().eq(i).fadeIn();

            }, settings.time);
        });
    }
});