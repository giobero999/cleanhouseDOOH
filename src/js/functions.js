$(document).ready(function() {
    /*preloader*/
    $(window).load(function() {
        setTimeout(function() {
            $("#status").fadeOut(), $("#preloader").delay(350).fadeOut("slow")
        }, 2e3)
    });

    // sticked menu
    $("#sticker").sticky({
        topSpacing: 0
    });

    $('.more').on('click', function() {
        var $arrow = $(this).find('.arrows');
        $('.arrows').not($arrow).stop().addClass("fa-angle-down");
        $arrow.stop().toggleClass("fa-angle-down");
    });

    $('#accordion').on('shown.bs.collapse', function(e) {
        var offset = $(this).find('.collapse.in');
        if (offset) {
            $('html,body').animate({
                scrollTop: $(offset).offset().top - 290
            }, 500);
        }
    });

    // counter
    $('.counter').counterUp({
        delay: 10,
        time: 4000
    });

    // wow animated css
    wow = new WOW({
        animateClass: 'animated',
        offset: 100,
    });
    wow.init();


    // body scrolling
    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function() {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            scrollTop: $target.offset().top + 2
        }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

}); //end ready

// body scrolling
function onScroll(event) {
    var scrollPosition = $(document).scrollTop();
    $('nav a').each(function() {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('nav ul li a').removeClass("active");
            currentLink.addClass("active");
        } else {
            currentLink.removeClass("active");
        }
    });
}
