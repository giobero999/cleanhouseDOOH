$(document).ready(function() {

    // sticked menu
    $("#sticker").sticky({
        topSpacing: 0
    });

    // dropdown menu
    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
    });
    // owl carousel
    $("#owl-demo").owlCarousel({
        autoPlay: 7000,
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3]
    });

    // owl carousel
    $("#learning-items").owlCarousel({
        autoPlay: 4000,
        items: 1,
        singleItem: true,
        transitionStyle: "fade",
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1]
    });

    // typed.js
    $(function() {
        $("#typed").typed({
            strings: ["pixelart"],
            typeSpeed: 300,
        });
    });

    // active buttons
    $('.feature-btns button').on('click', function() {
        $('.feature-btns button').removeClass('active-btn');
        $(this).addClass('active-btn');
    });


    $('.screens').on('click', function() {
        $('.products').addClass('hide-feature');
        $('#screens').removeClass("hide-feature");
    });

    $('.players').on('click', function() {
        $('.products').addClass('hide-feature');
        $('#players').removeClass("hide-feature");
    });

    $('.enclosures').on('click', function() {
        $('.products').addClass('hide-feature');
        $('#enclosures').removeClass('hide-feature');
    });

    $('.led').on('click', function() {
        $('.products').addClass('hide-feature');
        $('#led').removeClass('hide-feature');
    });
    $('.totem').on('click', function() {
        $('.products').addClass('hide-feature');
        $('#totem').removeClass('hide-feature');
    });


    // scrolling image
    var step = 25;
    var scrolling = false;
    // Wire up events for the 'scrollUp' link:
    $("#scrollUp").bind("click", function(event) {
        event.preventDefault();
        // Animates the scrollTop property by the specified
        // step.
        $(".scrolling-img").animate({
            scrollTop: "-=" + step + "px"
        });
    }).bind("mouseover", function(event) {
        scrolling = true;
        scrollContent("up");
    }).bind("mouseout", function(event) {
        scrolling = false;
    });

    $("#scrollDown").bind("click", function(event) {
        event.preventDefault();
        $(".scrolling-img").animate({
            scrollTop: "+=" + step + "px"
        });
    }).bind("mouseover", function(event) {
        scrolling = true;
        scrollContent("down");
    }).bind("mouseout", function(event) {
        scrolling = false;
    });

    function scrollContent(direction) {
        var amount = (direction === "up" ? "-=1px" : "+=1px");
        $(".scrolling-img").animate({
            scrollTop: amount
        }, 1, function() {
            if (scrolling) {
                scrollContent(direction);
            }
        });
    }



}); //end ready
