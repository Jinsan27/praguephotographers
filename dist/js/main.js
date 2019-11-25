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
