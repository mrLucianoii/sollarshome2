// #SOLID DESIGNS
// Author: Luciano S. Aldana II
// Url: http://brandedsolid.com


 
 console.log(document.body.clientHeight);
    
var tubeHeight = document.body.clientHeight,
    tubeWidth = document.body.clientWidth,
    $iframe = document.getElementsByTagName('iframe');

//    console.log($iframe[0]);

//    $iframe.height = tubeHeight;
//    $iframe.width = tubeWidth;

    function imResized() {
        
        console.log("Im resizing Width and Height:" + tubeHeight + " & " + tubeWidth);
        tubeHeight = document.body.clientHeight;
        tubeWidth = document.body.clientWidth;
        
        var $iframe = document.querySelectorAll('iframe');
        
        console.log(document.querySelectorAll('iframe')[0].width);
        console.log(document.querySelectorAll('iframe').length);
        
        for (var i=0; i < $iframe.length; i++){
            
            $iframe[i].width = tubeWidth;
            $iframe[i].height = tubeHeight;
            
        }
        
        onYouTubeIframeAPIReady();
        
    }

    window.onresize = imResized;

    
 console.log("Client Height: " + tubeHeight);
 console.log("Client Width: " + tubeWidth);

 // Support hover state for mobile.
  if (false) {
    window.ontouchstart = function(){};
  } 

    var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player,
          player2;
    
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          videoId: 'pRwLE6J-0lg',
          height: tubeHeight,
          width: tubeWidth,
          playerVars: {
            'showinfo': 0
          },    
          events: {
            'onReady': '',
            'onStateChange': onPlayerStateChange,

          }
        });
        player2 = new YT.Player('player2', {
          videoId: 'ab8K1w2R7zg',
          height: tubeHeight,
          width: tubeWidth,
          events: {
            'onReady': '',
            'onStateChange': ''
          }
        });
     }
    
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      var done = false;

      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 1000);
          done = true;
        }
      }
      
    function stopVideo(video) {
        console.log(video);
        video.stopVideo();
      }

    

jQuery(document).ready(function ($) {
	

    console.log(window);
    
	var $window = $(window);
    

   /* $window.on('scroll', function(e){

        var $windowTop = $window.scrollTop();
        var $divTop = $('.carousel').offset().top;
        var $divTop = $('.carousel').offset().top;
        
        /*if($windowTop <= $divTop){
            $('#menu-toggle').addClass('on');
            $('.navbar').removeClass('off');

        }
        else{
           $('.navbar').addClass('off');
           $('#menu-toggle').removeClass('on');
           
        }   
        
    }); */
    
   /* $("input#introVid").on('click', function(e){
       e.preventDefault();
       $('body,section#welcomeVid, #menu-toggle').addClass('on');
        
    });*/
    
    $('a#action').on('mouseover', function(e){
        $('a#action h1').addClass('grow');
        
    });
    
     $('a#action').on('mouseout', function(e){
        $('a#action h1').removeClass('grow');
        
    });
    
    $("a#closeWelc, a.glyphicon-chevron-down").on('click', function(e){
        stopVideo(player);

        e.stopPropagation();
       $('#menu-toggle').removeClass('on');
        var $divTop = $('.carousel').offset().top;
       var pos = $divTop;

       $('html, body').stop().animate({
            'scrollTop': pos
        }, 777, 'swing', function () {
        });
        

    });
    
    function stopModalmovie(){
        var $iframe = $('body').find('iframe');
        
        console.log($($iframe));
        
        for (var i=0; i < $($iframe).length; i++){
            
            
            
        }
        
       // stopVideo(window[$iframe]);
           
    }
        $('.videoPops').on('show.bs.modal', function (e) {
            

            
        });

    $('body').on('hide.bs.modal', function (e) {
        console.log( 'testing model close function' );
        
        
        stopModalmovie();
        
    });    
    
   /* if ( window.location.hash === ""  ) {
        $("#welcomeVid1").modal('show');
        window.location.hash = "intro";
   
    }else{
       // $('.navbar').addClass('off');
        $('.navbar').removeClass('on')
        $('body,section#welcomeVid, #menu-toggle').addClass('on');
              
    } */
    
   if( jQuery('#carouselNav li:first-child').is(':hidden') ) {
		// Toggle visibility
		jQuery('#carouselNav li:first-child').toggle();
	}
	var carouselInterval = 10000;
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

	var carouselScroll = setInterval(carouselSlide,carouselInterval);
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
        
        
        
        if ( this.hash == "#welcome"){
            
            
            $('html, body').stop().animate({
            'scrollTop': 0
        }, 500, 'swing', function () {
            window.location.hash = target;
            });   
            
        }else{
            
            $('html, body').stop().animate({
            'scrollTop': $target.offset().top-10
            }, 500, 'swing', function () {
                window.location.hash = target;
            });
        
        }
    
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

