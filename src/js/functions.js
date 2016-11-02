$(document).ready(function() {

    /*preloader*/
    $(window).load(function() {
      setTimeout(function() {
        $("html,body").animate({
          scrollTop: 0
        }, 2e3), $("#status").fadeOut(), $("#preloader").delay(350).fadeOut("slow")
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

    $('#accordion').on('shown.bs.collapse', function (e) {
        var offset = $(this).find('.collapse.in');
        if(offset) {
            $('html,body').animate({
                scrollTop: $(offset).offset().top -290
            }, 500);
        }
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
