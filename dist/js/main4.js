jQuery(function($){
	var $frame = $('#centered');
	var $wrap  = $frame.parent();

	// Call Sly on frame
	$frame.sly({
		horizontal: 1,
		itemNav: 'centered',
		smart: 1,
		activateMiddle: 1,
		activateOn: 'click',
		mouseDragging: 1,
		touchDragging: 1,
		releaseSwing: 1,
		startAt: 1,
		scrollBy: 1,
		speed: 300,
		elasticBounds: 1,
		dragHandle: 1,
		dynamicHandle: 1,
		clickBar: 1,
		activatePageOn: 'click',

		// Buttons
		prev: $wrap.find('.prev'),
		next: $wrap.find('.next')
	});

	window.onresize = function(event) {
		$frame.sly('reload');
	};
});

$carouselBuildings = null;

var startPosition = localStorage.buildingPosition ? parseInt(localStorage.buildingPosition) : 0;

if (startPosition > 4) {
	startPosition = 0;
}

localStorage.buildingPosition = startPosition+2;

$(document).ready(function() {
	//toggle menu
	$(".hamburger-container").click(function() {
		$("#menu").slideToggle();
	});

	//to fix issue that toggle adds style(hides) to nav
	$(window).resize(function() {
		if (window.innerWidth > 1024) {
			$("#menu").removeAttr("style");
		}
	});

	//icon animation
	var topBar = $(".hamburger li:nth-child(1)"),
		middleBar = $(".hamburger li:nth-child(3)"),
		bottomBar = $(".hamburger li:nth-child(2)");
		hamburger = $(".hamburger-container");
		hamburgerClose = $(".nav-list__close-btn, .nav-list--mobile .nav-list__link");

	hamburger.on("click", function() {
		if (middleBar.hasClass("rot-45deg")) {
			topBar.removeClass("rot45deg");
			middleBar.removeClass("rot-45deg");
			bottomBar.removeClass("hidden");
		} else {
			hamburger.addClass("hidden")
		}
	});

	hamburgerClose.on("click", function() {
		$("#menu").slideToggle();

		if (hamburger.hasClass("hidden")) {
			hamburger.removeClass("hidden")
		} else {
			hamburger.addClass("active");
		}
	});

	let $swipebox = $('.swipebox');

	if($swipebox.length > 0 ) {
		$swipebox.swipebox( {
			useCSS : true, // false will force the use of jQuery for animations
			useSVG : true, // false to force the use of png for buttons
			initialIndexOnArray : 0, // which image index to init when a array is passed
			hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
			removeBarsOnMobile : true, // false will show top bar on mobile devices
			hideBarsDelay : 3000, // delay before hiding bars on desktop
			videoMaxWidth : 1140, // videos max width
			beforeOpen: function() {}, // called before opening
			afterOpen: null, // called after opening
			afterClose: function() {}, // called after closing
			loopAtEnd: false // true will return to the first image after the last image is reached
		} );
	}

	

	let $carouselBuildings = $('.carouselBuildings');

	if ($carouselBuildings.length > 0) {

		$carouselBuildings.owlCarousel({
			autoHeight: false,
			smartSpeed: 1000,
			lazyLoad: false,
			items: 5,
			loop: false,
			nav:false,
			dots:false,
			singleItem: true,
			// autoWidth:true,
			responsiveClass:true,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3],
			startPosition: startPosition,
			scrollbarType: "progress",
			responsive:{
				0:{
					items:1,
					stagePadding: 40
				},
				500:{
					items:2,
					stagePadding: 40
				},
				600:{
					items:3,
				},
				992:{
					items:4
				},
				1400:{
					items:5
				}
			}
		});
	}


	// SCROLL TO FUNCTION
	if (window.location.hash)
		scroll(0,0);

	setTimeout(function(){scroll(0,0);},1);


	$('.scroll').on('click',function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop:$($(this).attr('href')).offset().top + 'px'
		},1000,'swing');
	});

	if(window.location.hash){
		$('html,body').animate({
			scrollTop:$(window.location.hash).offset().top + 'px'
		},1000,'swing');
	}

});

var currentShopId = null;

var shopsCopy = null;

/**
 *
 * @param string name
 * @param string url
 * @param bool recommended
 * @returns {string}
 */
var generateLinkContent = function(name, url, recommended) {
	return '<a class="link-nw ' + (recommended ? 'link-nw--recommended' : '') + ' link-obchod-1" href="' + url + '">Vstoupit do ' + name + '</a>';
}


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if(xhr.readyState == 4) {
		shopsCopy = JSON.parse(xhr.responseText);
	}
}
xhr.open('GET', 'https://parizska.forbes.cz/wp-content/themes/forbes-parizska/json/shopsCopy.json');
xhr.send();

var createLinksFromShopsCopy = function(shopsCopy) {
	var returnString = '';

	for (var i=0; i<shopsCopy.length; i++) {
		shopsItem = shopsCopy[i];

		returnString += generateLinkContent(shopsItem.obchod_nazev, shopsItem.obchod_url, shopsItem.recommended);
	}

	return returnString;
}

var setDataInModal = function(position) {
	$heading = $('.text-heading');
	$address = $('.text-address');
	$architecture = $('.text-architecture');
	$business = $('.text-business');
	$retail = $('.text-retail');
	$shopLinks = $('.shop-links-wrapper');

	var data = shopsCopy[position];

	$heading.html(shopsCopy[position].nazev);
	$address.html(shopsCopy[position].adresa);
	$architecture.html(shopsCopy[position].architektura);
	$business.html(shopsCopy[position].business);
	$retail.html(shopsCopy[position].retail);
	$shopLinks.html(createLinksFromShopsCopy(shopsCopy[position].shops));

	$btnPrev = $('.btn-prev');
	$btnNext = $('.btn-next');

	if (currentShopId <= 0) {
		$btnPrev.addClass('disable');
	}

	else {
		$btnPrev.removeClass('disable');
	}

	if (currentShopId >= shopsCopy.length-1) {
		$btnNext.addClass('disable');
	}

	else {
		$btnNext.removeClass('disable');
	}
}

var closeAllAccordions = function() {
	var $accordions = $('.js-accordion');

	for (var i=0; i<$accordions.length; i++) {
		var accordion = $accordions[i];
		accordion.classList.remove('c-collapsible--is-open');
	}

	 $('.js-accordion-first')[0].classList.add('c-collapsible--is-open');
}

$('.btn-prev').on('click', function() {
	if (currentShopId <= 0) {
		return;
	}

	closeAllAccordions();

	currentShopId--;
	setDataInModal(currentShopId);
});

$('.btn-next').on('click', function() {
	var shopsCount = shopsCopy.length;

	if (currentShopId >= (shopsCount-1)) {
		return;
	}

	closeAllAccordions();

	currentShopId++;
	setDataInModal(currentShopId);
});

var getWithDataset = function(target) {
	var currentTarget = target;

	while(true) {
		if (currentTarget.dataset.shopPosition) {
			return currentTarget;
		}

		if (!currentTarget) {
			return;
		}

		currentTarget = target.parentElement;
	}
};

$('[data-shop-position]').on('click', function(event) {
	var target = getWithDataset(event.target);
	var shopPosition = target.dataset.shopPosition;
	currentShopId = shopPosition;
	setDataInModal(shopPosition);
});

var accordions = document.getElementsByClassName("js-accordion");

for (var i = 0; i < accordions.length; i++) {
	accordions[i].onclick = function() {
		var setClasses = !this.classList.contains('c-collapsible--is-open');
		setClass(accordions, 'c-collapsible--is-open', 'remove');

		if (setClasses) {
			this.classList.toggle("c-collapsible--is-open");
		}
	}
}

function setClass(els, className, fnName) {
	for (var i = 0; i < els.length; i++) {
		els[i].classList[fnName](className);
	}
}