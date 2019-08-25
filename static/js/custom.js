jQuery(document).ready(function() {
	
	"use strict";
	
	
	/* =======================================================
	Pre Loading
	========================================================== */
	$(window).load(function(){
		$('.preloader-container').fadeOut(300);
	});
	
	
	/* =======================================================
	Custom Data Attribute
	========================================================== */
	var bgImage = ".bgimage-cover"
	
	$("*").css('height', function () {
		var heightAttr = $(this).attr('data-height')+'px';
		return heightAttr;
	});
	
	$("*").css('color', function () {
		var colorAttr = $(this).data('color');
		return colorAttr;
	});
	
	$("*").css('opacity', function () {
		var opacityAttr = $(this).data('opacity');
		return opacityAttr;
	});
	
	$("*").css('background-color', function () {
		var bgcolorAttr = $(this).data('bg-color');
		return bgcolorAttr;
	});
	
	$(bgImage).css('background-image', function () {
		var bg = ('url(' + $(this).data("image-src") + ')');
		return bg;
	});
	
	
	/* =======================================================
	Add class to Text Number
	========================================================== */
	$('.number').html(function(i, v){
		return v.replace(/(\d)/g, '<span class="font-number">$1</span>');
	});
	
	
	/* =======================================================
	Fit Image to DIV
	========================================================== */
	$('.fit-img').each(function() {
		var $div = $(this),
			$img = $('img', $div),
			src = $img.attr('src');
			$div.css('backgroundImage', 'url(' + src + ')');
			$img.remove();
	});
	
	
	/* =======================================================
	Navigation Menu Settings
	========================================================== */
	/* ===== SlideToggle On Mobile Devices ===== */
	$('.burger-menu').on("click", function(){
		$('.nav-menu > ul').slideToggle(500);
	});
	
	/* ===== Fix Submenu Overflow Viewport ===== */
	$(window).on("load resize", function() {
		$('.nav-menu > ul > li > ul').each(function() {
			var $submenu = $(this),
				submenuLeft = $submenu.offset().left,
				submenuWidth = $submenu.width();
				
			if (submenuLeft + submenuWidth > $(window).width()) {
				$(this).addClass("submenuRight");
			} else {
				$(this).removeClass("submenuRight");
			}
		});
	});
	
	$(window).on("load resize", function() {
		$('.nav-menu > ul > li > ul ul').each(function() {
			var $nextmenu = $(this),
				nextmenuLeft = $nextmenu.offset().left,
				nextmenuWidth = $nextmenu.width();
				
			if (nextmenuLeft + nextmenuWidth > $(window).width()) {
				$(this).addClass("nextmenuRight");
			} else {
				$(this).removeClass("nextmenuRight");
			}
		});
	});
	
	/* ===== Submenu Visible Setting ===== */
	$(window).on("load resize", function() {
		if ($(window).width() >= 992) {
			$(".nav-menu ul li > ul").each(function(){
				$(this).addClass("dropdown-menu");
				$(this).hide();
			});
		} else {
			$(".nav-menu ul li > ul").each(function(){
				$(this).removeClass("dropdown-menu");
				$(this).show();
			});
		}
		
		$(".nav-menu ul li").each(function(){
			$(this).on({
				mouseenter: function () {
					$(this).children('.dropdown-menu').fadeIn(100);
				},
				mouseleave: function () {
					$(this).children('.dropdown-menu').fadeOut(100);
				}
			});
		});
	});
	
	
	/* =======================================================
	Content Wrapper Settings for Sticky Footer
	========================================================== */
	$(window).on("load resize", function() {
		var footerHeight = $('.footer-section').height();
		$('.content-wrapper').css( { "padding-bottom" : footerHeight } );
	});
	
	
	/* =======================================================
	Post List Category Hover Effect
	========================================================== */
	$('.post-list-category').each(function(){
		var catHeight = $(this).height() + 38;
		$(this).css("bottom","-" + catHeight + "px");
	});
	
	
	/* =======================================================
	Post List Share Settings
	========================================================== */
	$('.share-standard').hide();
	$('.share-btn').each(function(){
		$(this).on("click", function(){
			$(this).next('.share-standard').fadeToggle();
		});
	});
	
	// Share Tooltip
	$('.share-tooltip-animate').each(function(){
		$(this).on("click", function(){
			$(this).toggleClass("shareAnimate");
			if ( $(this).hasClass("shareAnimate") ) {
				$(this).next('.share-tooltip').fadeIn({queue: false, duration: 'fast'});
				$(this).next('.share-tooltip').animate({marginTop:"-6px"}, 'fast');
			} else {
				$(this).next('.share-tooltip').fadeOut({queue: false, duration: 'fast'});
				$(this).next('.share-tooltip').animate({marginTop:"0px"}, 'fast');
			}
			return false;
		});
	});
	
	
	/* =======================================================
	Particle Background Settings
	========================================================== */
	$('#particles').particleground({
		dotColor: '#5d656b',
		lineColor: '#5d656b',
		parallax: false
	});
	
	$('.preloader-particles-wrapper').particleground({
		dotColor: '#5e676d',
		lineColor: '#5e676d',
		density: 1500,
		proximity: 100,
		parallax: false
	});
	
	
	/* =======================================================
	jQuery FlexSlider Settings
	========================================================== */
	$(window).on("load", function() {
		
		// Homepage Slider
		$('.home-slider .flexslider').flexslider({
			controlNav: false,
			directionNav: false,
			slideshow: true,
			animationSpeed: 800,
			multipleKeyboard: true,
			pauseOnHover: true
		});
		
		// Post List Slide
		$('.post-list-slide .flexslider').flexslider({
			controlNav: true,
			directionNav: false,
			slideshow: true,
			slideshowSpeed: 5000,
			pauseOnHover: true,
			manualControls: ".flexControl-custom-nav li"
		});
		
		// Post Gallery Slide
		$('.post-gallery-slide .flexslider').flexslider({
			controlNav: false,
			directionNav: false,
			slideshow: true,
			animationSpeed: 800,
			multipleKeyboard: true,
			pauseOnHover: true
		});
		
		// Slider custom navigation
		$('.home-slide-nav .slide-prev, .home-slide-nav .slide-next').on('click', function(){
			var href = $(this).attr('href');
			$('.flexslider').flexslider(href)
			return false;
		});
		
	});
	
	
	/* =======================================================
	jQuery OWL Carousel Settings
	========================================================== */
	// Homepage carousel slide
	var homeCarousel = $(".owl-carousel.home-carousel");
	homeCarousel.owlCarousel({
		dots: false,
		margin: 30,
		responsiveClass: true,
		responsive:{
			0:{
				items:1
			},
			640:{
				items:2
			},
			768:{
				items:2
			},
			960:{
				items:3
			},
			1024:{
				items:3
			}
		}
	});
	
	// Homepage carousel custom navigation
	$(".carouselArrow.next").on("click", function(){
		homeCarousel.trigger('next.owl.carousel', [500]);
	})
	$(".carouselArrow.prev").on("click", function(){
		homeCarousel.trigger('prev.owl.carousel', [500]);
	})
	
	// Footer instagram carousel slide
	var footerCarousel = $(".owl-carousel.footer-carousel");
	footerCarousel.owlCarousel({
		dots: false,
		margin: 0,
		responsiveClass: true,
		responsive:{
			0:{
				items:2
			},
			480:{
				items:3
			},
			768:{
				items:4
			},
			960:{
				items:4
			},
			1024:{
				items:6
			}
		}
	});
	
	// Footer carousel custom navigation
	$(".footer-carouselArrow.next").on("click", function(){
		footerCarousel.trigger('next.owl.carousel', [500]);
	})
	$(".footer-carouselArrow.prev").on("click", function(){
		footerCarousel.trigger('prev.owl.carousel', [500]);
	})
	
	
	/* =======================================================
	jQuery Megafolio Settings
	========================================================== */
	var api=jQuery('.megafolio-container').megafoliopro({
		filterChangeAnimation: "fade",
		paddingHorizontal: 0,
		paddingVertical: 0,
		layoutarray: [19, 22]
	});
	
	
	/* =======================================================
	jQuery FancyBox Settings
	========================================================== */
	$(".fancybox").fancybox();
	
	
	/* =======================================================
	jQuery Isotope Settings
	========================================================== */
	$(window).on("load resize", function() {
		setTimeout(function(){
			var $isotopeItem = $('.masonry-wrapper');
			
			$isotopeItem.imagesLoaded( function(){
				$isotopeItem.isotope({
					itemSelector : '.masonry-item'
				});
			});
		}, 500);
	});
	
	
	/* =======================================================
	jQuery FitVids Settings
	========================================================== */
	$(".post-video").fitVids();
	
	
	/* =======================================================
	Placeholder
	========================================================== */
	$.fn.placeholder();
	
	
	/* =======================================================
	Back to top
	========================================================== */
	var offset = 220;
	var duration = 500;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$('.back-to-top').fadeIn(duration);
		} else {
			$('.back-to-top').fadeOut(duration);
		}
	});
		
	$('.back-to-top').on("click", function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration);
		return false;
	});
	
	
	/* =======================================================
	Sidebar Sticky
	========================================================== */
	$(window).on("load resize", function() {
		if ($(window).width() >= 992) {
			$('.sidebar-sticky').hcSticky({
				top: 30,
				bottomEnd: 0,
				wrapperClassName: 'sidebar-sticky-wrapper'
			});
			$('.sidebar-sticky-wrapper').removeClass("disableSticky");
		} else {
			$('sidebar-sticky').hcSticky('off');
			$('.sidebar-sticky-wrapper').addClass("disableSticky");
		}
	});
	
	
	/* =======================================================
	Contact Form Submit Settings
	========================================================== */
	$("#submit_message").on("click", function() {
		$('#reply_message').removeClass();
		$('#reply_message').html('')
		var regEx = "";
		
		// validate Name
		var name = $("input#name").val();
		regEx=/^[A-Za-z .'-]+$/;
		if (name == "" || name == "Name"  || !regEx.test(name)) {
			$("input#name").val('');
			$("input#name").focus();
			return false;
		}
		
		// validate Email
		var email = $("input#email").val();
		regEx=/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
		if (email == "" || email == "Email" || !regEx.test(email)) {
			$("input#email").val('');
			$("input#email").focus();
			return false;
		}
		
		// validate Subject
		var mysubject = $("input#mysubject").val();
		regEx=/^[A-Za-z0-9 .'-]+$/;
		if (mysubject == "" || mysubject == "Mysubject"  || !regEx.test(mysubject)) {
			$("input#mysubject").val('');
			$("input#mysubject").focus();
			return false;
		}
		
		// validate Message
		var mymessage = $("textarea#mymessage").val();
		if (mymessage == "" || mymessage == "Mymessage" || mymessage.length < 2) {
			$("textarea#mymessage").val('');
			$("textarea#mymessage").focus();
			return false;
		}
		
		var dataString = 'name='+ $("input#name").val() + '&email=' + $("input#email").val() + '&mysubject='+ $("input#mysubject").val() + '&mymessage=' + $("textarea#mymessage").val();
		
		$('.loading').fadeIn(500);
		
		// Send form data to mailer.php
		$.ajax({
			type: "POST",
			url: "mailer.php",
			data: dataString,
			success: function() {
				$('.loading').hide();
				$('#reply_message').addClass('list3');
				$('#reply_message').html("<span>Mail sent successfully</span>")
				.fadeIn(1500);
				$('#form_contact')[0].reset();
				}
			});
		return false;
	});
	
});


/* =======================================================
	Social Media Share Pop-up
========================================================== */
function facebookShare(url, winWidth, winHeight) {
	var winTop = (screen.height / 2) - (winHeight / 2);
	var winLeft = (screen.width / 2) - (winWidth / 2);
	window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}

function twitterShare(url, winWidth, winHeight) {
	var winTop = (screen.height / 2) - (winHeight / 2);
	var winLeft = (screen.width / 2) - (winWidth / 2);
	window.open('https://twitter.com/home?status=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}

function googleShare(url, winWidth, winHeight) {
	var winTop = (screen.height / 2) - (winHeight / 2);
	var winLeft = (screen.width / 2) - (winWidth / 2);
	window.open('https://plus.google.com/share?url=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}

function pinterestShare(url, winWidth, winHeight) {
	var winTop = (screen.height / 2) - (winHeight / 2);
	var winLeft = (screen.width / 2) - (winWidth / 2);
	window.open('https://pinterest.com/pin/create/button/?url=&media=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}

function linkedinShare(url, winWidth, winHeight) {
	var winTop = (screen.height / 2) - (winHeight / 2);
	var winLeft = (screen.width / 2) - (winWidth / 2);
	window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}