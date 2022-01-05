(function($){
    $.fn.youtube = function(options){
        var settings = $.extend({
            id : "PsbhzpTDRuM"
        },options);

        return this.append('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+settings.id+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    };
}(jQuery));