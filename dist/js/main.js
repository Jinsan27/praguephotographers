// Carousel for testimonial section

let $carouselTestimonial = $('.c-testimonial')

if ($carouselTestimonial.length > 0) {
	$carouselTestimonial.owlCarousel({
		smartSpeed: 500,
		items: 1,
		loop: false,
		nav: true,
		singleItem: true,
		navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
		dots: false,
		itemsDesktop: [1199, 3],
		itemsDesktopSmall: [979, 3],
		stagePadding: 20,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
		},
	})

	// Custom Button
	$('.customNextBtn').click(function() {
		$carouselBlogPost.trigger('next.owl.carousel')
	})
	$('.customPreviousBtn').click(function() {
		$carouselBlogPost.trigger('prev.owl.carousel')
	})
}

let $waipointWrapper = $('.waipoint-wrapper-js')

if ($waipointWrapper.length > 0) {
	var counter1 = new CountUp('counter1', 0, 1513, 0, 2, {
		useEasing: true,
		useGrouping: true,
	})

	var counter2 = new CountUp('counter2', 0, 1135493, 0, 2, {
		useEasing: false,
		useGrouping: true,
	})

	var counter3 = new CountUp('counter3', 0, 64534, 0, 2, {
		useEasing: false,
		useGrouping: true,
	})

	var waypoint1 = new Waypoint({
		element: document.getElementById('waypoint1'),
		handler: function(direction) {
			counter1.start()
		},
		offset: '80%',
	})

	var waypoint2 = new Waypoint({
		element: document.getElementById('waypoint2'),
		handler: function(direction) {
			counter2.start()
		},
		offset: '80%',
	})

	var waypoint3 = new Waypoint({
		element: document.getElementById('waypoint3'),
		handler: function(direction) {
			counter3.start()
		},
		offset: '80%',
	})
}

$(function() {
	var pgurl = window.location.href.substr(window.location.href.lastIndexOf('/'))
	$('.site-nav li a').each(function() {
		if ($(this).attr('href') == pgurl || $(this).attr('href') == '') $(this).addClass('active')
	})
})

let $scrollToJs = $('.scroll-to-js')

if ($scrollToJs.length > 0) {
	// SCROLL TO FUNCTION
	var scrollTo = function(scrollFrom, scrollTo) {
		scrollFrom.click(function(e) {
			e.preventDefault()

			$('html, body')
				.stop()
				.animate(
					{
						scrollTop: scrollTo.offset().top,
					},
					1000
				)
		})
	}

	// SCROLL TO FUNCTION INIT
	var $scrollFrom = $('[data-scroll-from]')
	var $scrollTo = $('[data-scroll-to]')
	if ($scrollFrom && $scrollTo) {
		scrollTo($scrollFrom, $scrollTo)
	}
}

var myElement = document.querySelector('header')
var headroom = new Headroom(myElement, {
	offset: 205,
	tolerance: 5,
})

headroom.init()

var menu = document.getElementById('js-menu')
var trigger = document.querySelector('.js-trigger')

menu.addEventListener('click', function() {
	trigger.classList.toggle('is-open')
	menu.classList.toggle('has-cross')
})

$(document).ready(function() {
	let $swipebox = $('.swipebox')

	if ($swipebox.length > 0) {
		$swipebox.swipebox({
			useCSS: true, // false will force the use of jQuery for animations
			useSVG: true, // false to force the use of png for buttons
			initialIndexOnArray: 0, // which image index to init when a array is passed
			hideCloseButtonOnMobile: false, // true will hide the close button on mobile devices
			removeBarsOnMobile: true, // false will show top bar on mobile devices
			hideBarsDelay: 3000, // delay before hiding bars on desktop
			videoMaxWidth: 1140, // videos max width
			beforeOpen: function() {}, // called before opening
			afterOpen: null, // called after opening
			afterClose: function() {}, // called after closing
			loopAtEnd: false, // true will return to the first image after the last image is reached
		})
	}
})

// TOP BAR
var closeButton = document.querySelector('.top-bar__close');
var topBar = document.querySelector('.top-bar')

document.addEventListener("DOMContentLoaded", function() {
	const showMsg = localStorage.getItem('show');

	if(showMsg === 'false') {
		topBar.classList.add('isClosed')
	}
});

closeButton.addEventListener('click', () => {
	localStorage.setItem('show', false)
	topBar.classList.add('isClosed')
});
