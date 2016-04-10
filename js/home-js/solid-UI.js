 $(document).ready(function() {

     $('#fullpage').fullpage({
				anchors: ['landing', 'single-family', 'guest-homes', 'rental-units', 'garages', 'office-workshops', 'pool-houses'],
				sectionsColor: ['#EBEBEB', '#EBEBEB', '#EBEBEB', '#EBEBEB', '#EBEBEB', '#EBEBEB', '#EBEBEB'],
				css3: true,
                
                afterLoad: function(anchorLink, index){
            
                var loadedSection = $(this);
            
                var secID = ['#single', '#guest', '#rental', '#garage', '#office', '#pool'];   
                
                  
                for (var i=0; i < secID.length; i++){
                    $(""+secID[i]+"").css('display', 'none');   
                }
                    
            switch (anchorLink) {
                case 'single-family':
                    console.log(anchorLink);
                     $('#single').css('display', 'inline');
                     $('button#famClose').trigger('click');
                    
                    break;
                case 'guest-homes':
                    console.log(anchorLink);
                     $('#guest').css('display', 'inline');
                     $('button#famClose').trigger('click');
            
                    break;
                case 'rental-units':
                    console.log(anchorLink);
                     $('#rental').css('display', 'inline');
                     $('button#famClose').trigger('click');
                    
                    break;
                case 'garages': 
                    console.log(anchorLink);
                     $('#garage').css('display', 'inline');
                     $('button#famClose').trigger('click');
                    
                    break;
                case 'office-workshops':
                    console.log(anchorLink);
                     $('#office').css('display', 'inline');
                     $('button#famClose').trigger('click');
                    
                    break;
                case 'pool-houses':
                    console.log(anchorLink);
                     $('#pool').css('display', 'inline');
                     $('button#famClose').trigger('click');
                    
                    break;
                default:
                    break;
            }}
     });
     
     $('#footer, #finishOpt').click(function(e) {
      console.log( "Am I in ?" );
      e.preventDefault();
      $('#footer').toggleClass("expandMe");
  
      $('.glyphicon-collapse-up').toggleClass('expandMe');
      $('.glyphicon-collapse-down').toggleClass('expandMe');
  });
     
    $('a#single-modal').click (function (e) {
         e.preventDefault();
       console.log('Hi Fam');
        $.fn.fullpage.moveTo('single-family', 0);

    });
    $('a#guest-modal').click (function (e) {
         e.preventDefault();
       console.log('Hi Fam');
        $.fn.fullpage.moveTo('guest-homes', 0);

    });
    $('a#rental-modal').click (function (e) {
         e.preventDefault();
       console.log('Hi Fam');
        $.fn.fullpage.moveTo('rental-units', 0);

    });
    $('a#garages-modal').click (function (e) {
         e.preventDefault();
       console.log('Hi Fam');
        $.fn.fullpage.moveTo('garages', 0);

    });
    $('a#office-modal').click (function (e) {
         e.preventDefault();
       console.log('Hi Fam');
        $.fn.fullpage.moveTo('office-workshops', 0);

    });
    $('a#pool-modal').click (function (e) {
         e.preventDefault();
       console.log('Hi Fam');
        $.fn.fullpage.moveTo('pool-houses', 0);

    });

     document.addEventListener('click', function(){
            
        setTimeout(function(){
            if ( $('#calculator').hasClass('in') ){
                $.fn.fullpage.setAllowScrolling(false);

            }else {
                $.fn.fullpage.setAllowScrolling(true);

                
            }            
        }, 1000);    
        
         
    });

     
});