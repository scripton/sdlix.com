//#region Nav

/* Resize the nav based on the scroll position */
var initNav = () => {
    let nav = $("#top-nav");

    if (nav.offset().top > 100) {
        nav.addClass("nav-shrink");
    } else {
        nav.removeClass("nav-shrink");
    }
};

//#endregion

//#region Scroll

/* Initialize smooth scrolling */
var initSmoothScroll = () => {
    // Select all links with hashes, exclude links that don't actually link to anything
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {

        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname) {

            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            // Does a scroll target exist?
            if (target.length) {

                // Only prevent default if animation is actually gonna happen
                event.preventDefault();

                // Hide the dropdown navbar for mobile
                $(".navbar-collapse").collapse("hide");

                $('html, body').animate({
                    scrollTop: target.offset().top //TODO: check optional - size of navbar
                }, 1000, () => {

                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();

                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.focus(); // Set focus again
                    };
                });
            }
            
            return false;
        }
    });
};

/* Reset scroll */
var resetScroll = () => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
};

//#endregion

(function ($) {
    "use strict";

    // Initialize smooth scrolling to sections
    initSmoothScroll();

    // Resize the nav based on the scroll position
    initNav();

    // Add reset scroll behavior to registered DOM elements
    $(".reset-scroll").click(() => {
        resetScroll();
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#top-nav",
        offset: 75,
    });

    // Reinitialize the navbar when page is scrolled
    $(window).scroll(initNav);

})(jQuery);