$(function() {
    "use strict";

    $(window).on("scroll", function() {
        var scrollPos = $(document).scrollTop();
        var headerHeight = $(".main-header").outerHeight();
        var scrollBuffer = 500; 

        if (scrollPos > 50) {
            $(".main-header").addClass("fixed-header");
        } else {
            $(".main-header").removeClass("fixed-header");
        }

        var currentActive = null;
        $($('.section').get().reverse()).each(function() {
            var currLink = $(this);
            var sectionTop = currLink.offset().top - headerHeight - scrollBuffer; 
            
            if (scrollPos >= sectionTop) {
                currentActive = currLink.attr("id");
                return false;
            }
        });

        $('.navbar-nav li a').removeClass("active");

        if (currentActive) {
            $('a[href="#' + currentActive + '"]').addClass("active");
        } else {
            $('a[href="#home"]').addClass("active");
        }
    });

    $(document).on("click", ".navbar-nav a", function(event) {
        event.preventDefault();
        var targetId = $(this).attr("href");
        var targetOffset = $(targetId).offset().top;
        var headerHeight = $(".main-header").outerHeight();
        var smoothScrollOffset = -50; 

        $("html, body").animate({
            scrollTop: targetOffset - headerHeight - smoothScrollOffset
        }, 1000);
        
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-toggler').click();
        }
    });

    $(window).trigger('scroll');

    var typed = new Typed('.typed-text', {
        strings: ["Desarrollador backend"],
        typeSpeed: 65,
        backSpeed: 0,
        backDelay: 0,
        loop: false,
        showCursor: true,
        cursorChar: '|',
    });

    document.getElementById("currentYear").innerHTML = new Date().getFullYear();
});