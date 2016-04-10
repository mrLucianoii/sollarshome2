// #SOLID DESIGNS
// Author: Luciano S. Aldana II
// Url: http://brandedsolid.com


 
 
  // Support hover state for mobile.
  if (false) {
    window.ontouchstart = function(){};
  } 
  
  //Navigation 

//  window.onresize = function(){ location.reload(); }
 
jQuery(document).ready(function ($) {
	
	
	var $window = $(window);
	
   
	/* DID You know Carousel */
/**
	 * Check if first li element is hidden
	 * then show
	 */
	if( jQuery('#carouselNav li:first-child').is(':hidden') ) {
		// Toggle visibility
		jQuery('#carouselNav li:first-child').toggle();
	}
	// Interval time
	var carouselInterval = 10000;
	// Slider
	function carouselSlide(){
		// Check if last element was reached
		if( jQuery('#carouselNav li:visible').next().length == 0 ) {
			// Hide last li element
			jQuery('#carouselNav li:last-child').slideUp('fast');
			// Show the first one
			jQuery('#carouselNav li:first-child').slideDown('fast');
		} else {
			// Rotate elements
			jQuery('#carouselNav li:visible').slideUp('fast').next('li:hidden').slideDown('fast');
		}
	}

	// Set Interval
	var carouselScroll = setInterval(carouselSlide,carouselInterval);
	// Pause on hover
	jQuery('#carousel').hover(function() {
		clearInterval(carouselScroll);
	}, function() {
		carouselScroll = setInterval(carouselSlide,carouselInterval);
		carouselSlide();
	});
	
//smoothscroll
    $('.navbar a[href^="#"]').on('click', function (e) {
	    e.preventDefault();
        $(document).off("scroll");
      
        var target = this.hash,
            menu = target;
        $target = $(target);
		
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-10
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
  
    $('.sidebar-nav a[href^="#"]').on('click', function (e) {
	    e.preventDefault();
        $(document).off("scroll");
      
        var target = this.hash,
            menu = target;
        $target = $(target);
		
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+25
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
 
    $('#ques a[href^="#"]').on('click', function (e) {
	    e.preventDefault();
        $(document).off("scroll");
      
        var target = this.hash,
            menu = target,
		$target = $(target),
		targetPos = $target.offset().top-110;
		
        $('html, body').stop().animate({
            'scrollTop': targetPos
        }, 500, 'swing', function () {
        });
    });
	
    $('#ans a[href^="#"]').on('click', function (e) {
	    e.preventDefault();
        $(document).off("scroll");
      
        var target = this.hash,
            menu = target,
		$target = $(target),
		targetPos = $target.offset().top-700;
		
        $('html, body').stop().animate({
            'scrollTop': targetPos
        }, 500, 'swing', function () {
        });
    });
	
	var $expander = $("#menu-toggle"),
		$navWrap = $("#sidebar-wrapper"),
		$contWrap = $("#content-wrapper"),
		$navCl = $("#close"),
		$mNav = $(".navbar"),
		$mLC = $("#logo-center"),
		$mLL = $("#logo-left"),
		$contWrap = $("#content-wrapper"),
	$mainSec = $("main section");
		
   
    $navCl.click(function(e) {
        $mNav.removeClass('srnkNav');
        $mNav.removeClass('entNav');
		$expander.fadeIn("4500").css("display", "block");
        e.preventDefault();
        $contWrap.toggleClass("toggled");
		
		if ( $window.width() < 650) {
           $navWrap.css("margin-right", "-250px");
		}
		
		var secPos = ($mainSec.offset().top - 10);
		
		if ( $window.scrollTop() > secPos ){
	        $mNav.addClass('entNav');
		}
    });
		
    $expander.click(function(e) {
		
		var secPos = ($('main section').offset().top - 10);
		
		
	    if ($(this).scrollTop() > secPos && !$mNav.hasClass('srnkNav')) {
	        if (!$mNav.hasClass('entNav')) {
	            $mNav.addClass('entNav');
	        }
	    } else if ($(this).scrollTop() < 0) {

	        $mNav.addClass('srnkNav');

	    } else {
	        if ( $mNav.hasClass('entNav')) {
	            $mNav.removeClass('srnkNav');
	            $mNav.removeClass('entNav');
	        }
	    }
				
		$expander.fadeOut("4500");
 		e.preventDefault();
        $navWrap.css("margin-right", "250px");
		
     });
	 
    $expander.click(function(e) {
        e.preventDefault();
        $contWrap.toggleClass("toggled");
    });
    function patentClick (clName) {
        clName.on('mouseover', function(e) {
            e.preventDefault();
            clName.attr('id', 'dGreen');
        });
        clName.mouseleave( function (e){
            e.preventDefault();
            clName.removeAttr('id','dGreen');
        });

    } 
    
	
    var $saving = $('.saving'),
        $time = $('.time'),
        $energy = $('.energy'),
        $design = $('.design');
    
    var $savingA = $('#dGreen.saving a'),
        $timeA = $('#dGreen.time a'),
        $energyA = $('#dGreen.energy a'),
        $designA = $('#dGreen.design a');
    
    var $savingM = $('#dGreen.saving p#more'),
        $timeM = $('#dGreen.time p#more'),
        $energyM = $('#dGreen.energy p#more'),
        $designM = $('#dGreen.design p#more');
    
    patentClick($saving);
    patentClick($time);
    patentClick($energy);
    patentClick($design);

    
	       
    $('.saving a').on('click', function(e) {
        e.preventDefault();
        $("#dGreen.saving #more1").show();
    });
    
   $('.time a').on('click', function(e) {
        e.preventDefault();
        $("#dGreen.time #more1").show();
    });
   $('.energy a').on('click', function(e) {
        e.preventDefault();
        $("#dGreen.energy #more1").show();
    });
    $('.design a').on('click', function(e) {
        e.preventDefault();
        $("#dGreen.design #more1").show();
    });
    
    var $archs = $('#techs'),
        $build = $('#build'),
        $home = $('#homeOwn');
    
    $archs.hide();
    $build.hide();
    
    var $archBTN = $('button.arc'),
        $hmoBTN = $('button.hmo'),
        $bldBTN = $('button.bld');
    
    $archBTN.on('click', function(e) {
        e.preventDefault();
        $home.hide();
        $build.hide();
        $archs.fadeIn(1000);
    });

    $hmoBTN.on('click', function(e) {
        e.preventDefault();
        $archs.hide();
        $build.hide();
        $home.fadeIn(1000);
    });
    $bldBTN.on('click', function(e) {
        e.preventDefault();
        $archs.hide();
        $home.hide();
        $build.fadeIn(1000);
    });

   var options = $.extend({
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
}, options);

  function solid_maps () {
      console.log("hEllo this is a message");
      var myLatlng = new google.maps.LatLng(37.3720105,-121.9071232);
       var mapOptions = {
         zoom: 15,
         center: {lat: 37.3717612, lng: -121.9227022},
         scrollwheel: false,
         navigationControl: false,
         mapTypeControl: false,
         scaleControl: false,
         draggable: false,
         mapTypeId: google.maps.MapTypeId.ROADMAP   
       }
       var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

       var marker = new google.maps.Marker({
           position: myLatlng,
           map: map,
           title: 'The Sollars Home'
       });  
    
  }
  google.maps.event.addDomListener(window, 'load', solid_maps);

	
    
});

