$('.service-slide').owlCarousel({
     loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
});
$('.service-slide-1').owlCarousel({
     loop: true,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
});
$('.blog-slide').owlCarousel({
     loop: true,
        margin: 40,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
});
$('.bannerslider').owlCarousel({
     loop: true,
        
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
});
    // //-------- Navigation on scroll----// 
    function navScroll(){
        var nav = $(".start-style");
        var pos= nav.position();
        var windowpos = $(window).scrollTop();

        if (windowpos > pos.top){
            nav.addClass('scroll-on');
        }
        else {
            nav.removeClass('scroll-on');
        }
        
    }

        $(window).scroll(function (){
            navScroll();
        });
// ---------------------- 
 //coming soon date count 
    $('.clock').countdown('2020/10/10', function(event) {
        var $this = $(this).html(event.strftime('' +
            '<div class="week-count"><h1>%w <sup>Weeks</sup></h1></div>  ' +
            '<div class="hour-week d-flex  justify-content-center">  ' +
            '<div class="hour-count"><h1>%d <sup>Days</sup></h1></div>  ' +
            '<div class="hour-count"><h1>%H <sup>Hours</sup></h1></div>  ' +
            '<div class="min-count"> <h1>%M <sup>Mins</sup></h1> </div>  ' +
            '<div class="sec-count"> <h1>%S <sup>Sec</sup></h1> </div> ' +
            '</div>  '));
    });






