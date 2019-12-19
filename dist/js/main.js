// Carousel for testimonial section

let $carouselTestimonial = $('.c-testimonial');

if ($carouselTestimonial.length > 0) {

    $carouselTestimonial.owlCarousel({
        smartSpeed: 500,
        items: 1,
        loop: false,
        nav:true,
        singleItem: true,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        dots:false,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        stagePadding: 20,
        margin: 20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            500:{
                items:1,

            },
            600:{
                items:2,

            },
            1000:{
                items:3,
                stagePadding: 40
            }
        }
    });

    // Custom Button
    $('.customNextBtn').click(function() {
        $carouselBlogPost.trigger('next.owl.carousel');
    });
    $('.customPreviousBtn').click(function() {
        $carouselBlogPost.trigger('prev.owl.carousel');
    });
}

let $waipointWrapper = $('.waipoint-wrapper-js');

if ($waipointWrapper.length > 0) {

    var counter1 = new CountUp("counter1", 0, 726, 0, 2, {
        useEasing: true,
        useGrouping: true,
    });

    var counter2 = new CountUp("counter2", 0, 135493, 0, 2, {
        useEasing: false,
        useGrouping: true,
    });

    var counter3 = new CountUp("counter3", 0, 3155, 0, 2, {
        useEasing: false,
        useGrouping: true,
    });

    var waypoint1 = new Waypoint({
        element: document.getElementById('waypoint1'),
        handler: function(direction) {
            counter1.start();
        },
        offset: '80%'
    });

    var waypoint2 = new Waypoint({
        element: document.getElementById('waypoint2'),
        handler: function(direction) {
            counter2.start();
        },
        offset: '80%'
    });

    var waypoint3 = new Waypoint({
        element: document.getElementById('waypoint3'),
        handler: function(direction) {
            counter3.start();
        },
        offset: '80%'
    });
}

$(function() {
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);

    $(".site-nav li a").each(function() {
        if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
            $(this).addClass("active");
    })
});