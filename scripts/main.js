import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

Splitting();


// Fade in button to scroll to top - not working but not sure why

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#scroll').fadeIn();
    } else {
        $('#scroll').fadeOut();
    }
});
$(document).ready(function() {
    $("#scroll").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});