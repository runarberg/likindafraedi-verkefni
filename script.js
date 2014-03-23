$("body > header").addClass("column");
$("section > section").addClass("column");
$("body > section").each(function () {
    $(this).find("> h1, > p").wrapAll("<div class='column' />");
});

var $cols = $(".column");
var numCols = $cols.length;
var winWidth = $(window).width();
var winHeight = $(window).height();

$("body").css({
    display: "-webkit-flex",
    display: "flex",
    width: (numCols) * winWidth
});
$("body > section").css({
    display: "-webkit-flex",
    display: "flex",
    width: function () {
        return $(this).find(".column").length * winWidth;
    }
});
$cols.css({
    width: winWidth*.85,
    padding: winWidth*.075,
    'min-height': winHeight,
    'vertical-align': "top"
});

$(document).ready(function() {
    var slide = 0;
    $("html").keydown(function(e) {
        switch(e.which) {
            case 39:
            if (slide < numCols) {
                $("html, body").animate({
                    scrollLeft: $($cols[slide+1]).offset().left,
                    scrollTop: 0
                }, 800);
                slide++;
                return false;
            }
            break;
            
            case 37:
            if (slide > 0) {
                $("html, body").animate({
                    scrollLeft: $($cols[slide-1]).offset().left,
                    scrollTop: 0
                }, 800);
                slide--;
                return false;
            }
            break;
        }
    });
});
