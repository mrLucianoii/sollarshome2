
$(document).ready(function() {
    
    if ( document.URL.indexOf("homes.html#mynewhome") >= 0 ) { 
        $('.dash').trigger('click');
    }

    var userEstimate = clonedSOLID(SolidCalculate);

    userEstimate.sumTotalProject();
    
    var $inputs =  $(".main-body .core ul"),
        $sections = 5;
    
    console.log($inputs.length+1);
    console.log( $('.tree .tree-content ul').length );
    
    //$('.tree input').prop('') = true;
    
    function findVisible( ) {
        
        for (var i=0; i < $inputs.length+1; i++){
            
            if ( $('.tree-body #input'+i+'').css('display') == 'block' ){
                var seen = 'input'+i;
                return seen;
            }else {
                console.log('failed');
               
            }
                
            
        }
         return false;       
    }
    
    function success( quesObject ) {
        
        $('#failure').animate( {top: -38}, 300); // Handles failed inputs that are no longer true

        userEstimate.inputReceiver(quesObject);
        
        
        console.log( quesObject.branch );
        console.log( quesObject.currentModel );
        console.log(userEstimate);
        
        $('#success').animate({
                top: 0
            }, 50);
            
            setTimeout(function(){
            $('#success').animate({
               top: -38    
            }, 50);
    
        }, 777);
        
    }
    
    var targBranch,
        targInput = new Object();
    
    var lastBranchBool = false,
        lastBranch,
        lastInput,
        targEdBranch;
    
    function rulerSD ( el ) {
        
        if ( $(el).attr('data-edit') ){
            console.log( $(el).attr('data-edit') );            
        }
           
        if ( $('#success').hasClass('animate') ) {
            
            $('#success').addClass('animate');
            
        }
      
        var $thisID =  el.id.split('').splice(0, 2).join(''),
            digi = /\d+/,
            $thisNum = el.id.match(digi),
            $sdTarget = $(el)[0].parentNode.parentElement.id, // sd for SOLID :)
            $visTarger = findVisible(),
            $this = el;
            
        
            console.log('All things considered equal: '+ $sdTarget +' and '+$visTarger );
    
        function inputRuler ( $this ) {
            
            console.log( $this );
            
            if ( $thisID == 'in' || 'cr' ) { 
            
                    if ( $thisID == 'in' ){
                        
                    }
                 
            for (var i=0; i < $inputs.length+1; i++){
                   
                    
            if ( $('.tree #input'+i+'').find('#inBranch'+$thisNum[0]+'').length ){
                        
                console.log( $('#crBranch7') );
                
                     $('#crBranch'+$thisNum+'').prop("checked", true);
                     $('#inBranch'+$thisNum+'').prop("checked", true);
                        
                        $($this)[0].checked = true;

                        targInput.branch = $($this).parents('[data-total]')[0].attributes[1].value; // Get main-category (design, conditions, utilities, upgrades, amenities)
                        targInput.dataString = $($this).parents('[data-inputs]')[0].attributes[2].value; // Get sub-categor of main-category

                        
                        targInput[targInput.dataString] =  $( $this ).siblings()[1].childNodes[0].textContent.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").split(' '); //Asign answer within sub-categor of main-category 
                        
                        console.log( targInput[targInput.dataString] );
                        
                        var treeTop = $('.tree #input'+i+'').position().top,
                            branchDist = $('#inBranch'+$thisNum[0]+'').position().top;
                        
                        
                        $('.tree').animate({
                            scrollTop: treeTop + branchDist 
                        }, 777 );
                    
                        $('.tree #input'+i+'').children().click(function() {
                            
                            return false;
                        });    

                    }
            } 
                     
            for (var i=0; i < $inputs.length+1; i++) {
            
                var next = i +1;
                
                if ( $($this).parents('#input'+i+'').length ) {
                                        
                    $('.main-body #input'+i+'').fadeOut(333);
                    
                    if ( i == 20 ){
                        
                        $('#input20 .glyphicon-edit').css('visibility', 'visible');
                        
                        $('.big-branch4').fadeOut(777);
                            
                    }

                    
                    if (  $('.main-body #input'+next+'').parents('.big-branch0').length && i == 0 ){
                        $('.main-body #input'+next+'').delay(777).fadeIn(777);   
                        
                        console.log ('not too far');
                        
                    } else {
                        //Luciano eventually you'll need to create an array out of $sections
                        for (var y=0; y < $sections; y++){
                            
                            console.log(next + "vs" + $inputs.length+1);
                        
                            if ( next == $inputs.length+1 ){ 
                            
                            //Estimate is complete time to save
                                $('.wrap').addClass('active');
        
                                $('.pTotal a').addClass('active');
                                $('.tree-sum').fadeIn(777);
                                $('.glyphicon-info-sign').fadeIn(100);
                                $('#input'+i+' .glyphicon-edit').css('visibility', 'visible');   
                                $('.big-branch4').hide();

//                            break; 

                            }else {
                           
                                if ( $('.main-body #input'+next+'').parents('.big-branch'+y+'').length ){
                                
                                      $('.tree #input'+next+' > input').prop('disabled', true);
                                    
                                        $('.big-branch'+(y-1)+'').fadeOut(777);
                            
                                    if ( lastBranchBool === true ){
                                        
                                        
                                        $('.big-'+targEdBranch+'').css('display', 'none');
                                        
                                        if ( lastBranch != false ){
                                            $(lastBranch).delay(777).fadeIn(777);
                                            $(lastInput).delay(777).fadeIn(777);
                                          
                                        }
                                          
                                        lastBranchBool = false;
                                        break; 
                                        
                                        
                                    }else  {
                                

                                        $('.big-branch'+y+'').delay(777).fadeIn(777);
                                        $('.main-body #input'+next+'').delay(777).fadeIn(777);   
                                        $('#input'+i+' .glyphicon-edit').css('visibility', 'visible');   
                                        lastInput = '.main-body #input'+next; 
                                        
                                        nowEditable( $('#input'+i) );
                                        
                                        console.log( i == $inputs.length+1 );


                                        
                                        break;
                                    } 
                                } 
                            }   
                        }                        
                    }
                    break; 
                    //Reminder: need to clear inputs on back button and reset value to 0  
                    //$('button#back').delay(777).fadeIn(777);
                
                }     
            }
            
                $('#failure').animate( {top: -38}, 300); // Handles failed inputs that are no longer true
               
                success( targInput );
              
                
            }
            
        }   
        
        console.log( findVisible() );

        
       if ( $(el).attr('data-edit') && lastBranchBool != true ) {
           
           
           var $name = $(el).attr('data-edit');
           
           console.log( $('ul[data-inputs="'+$name+'"]').parents()[1].className );
           
            var targEdit = $('ul[data-inputs="'+$name+'"]')[0].id,
                branchCheck;
           

                //$(' ').css('visibility', 'hidden');

           
            if ( findVisible() != undefined && findVisible() != false ){
                branchCheck = $('#'+findVisible()+'').parents()[0].className;   
                lastBranch = '.big-'+$('#'+findVisible()+'').parents()[0].className;
    
            }else{
                lastBranch = false;
                
            }
                
                console.log( branchCheck +' -> '+ $('ul[data-inputs="'+$name+'"]').parents()[1].className  );
           
            targEdBranch = $('ul[data-inputs="'+$name+'"]').parents()[5].className;

            console.log( $('ul[data-inputs="'+$name+'"]').parents()[5].className );
            
            if ( targEdBranch == branchCheck ){
                
                $('.main-body #'+findVisible()+'').hide();
                $('.main-body #'+targEdit+'').fadeIn(777);
                
            }else if ( lastBranch != false ) {
                
                $(lastBranch).hide();
                $('.main-body #'+targEdit+'').fadeIn(777);
                
            }
            
            $('.big-'+targEdBranch+'').fadeIn(777);
            $('.main-body #'+targEdit+'').fadeIn(777);

            
            var thisParents = $('ul[data-inputs="'+$name+'"]').parents()[1].className,
                $check = $('.main-body #'+targEdit+'').find('input'),
                $checkTree = $('.tree #'+targEdit+'').find('input');
            
                lastBranchBool = true;

                console.log( $check );
                console.log( $checkTree );   
                
           
            for ( var i=0; i < $check.length; i++ ){
                
                if( $check[i].checked == true && $(el).parents()[1].id != 'input11' ){
                    
                    
                    $($check[i]).prop("checked", false);
                    $($checkTree[i]).prop("checked", false);

                    //$check[i].checked = false;
                    //$checkTree[i].checked = false;
                    
                    console.log( $check[i]  );
                    console.log(  $($check[i]).parents() );
                   
                    targInput.branch = 'getValue'; //Call Subtraction 
                    
                    targInput[targInput.branch] =  $($check[i]).parents()[1].attributes[2].nodeValue; // Get main-category (design, conditions, utilities, upgrades, amenities)
                    targInput[ targInput[targInput.branch] ] = $($check[i]).siblings()[1].innerText.toLowerCase().replace(/[^0-9a-zA-Z- ]/g, "").split(' ')[0];                     
                    
                    console.log( $($check[i]).siblings() );
                    
                    targInput.sumTotal =  $( $check[i] ).parents()[3].attributes[1].nodeValue;
                    
                    success( targInput );
                    
                    
                    
                } 
            }
            
        }else if (  $('#'+findVisible()+'')[0].attributes[2].nodeValue == 'floor'){
                        
            if ( el.id == 'floor' ){
                
              console.log( $(el)[0].checked );

                
              for (var i=0; i < $inputs.length+1; i++) {
            
                var next = i +1;
                
                if ( $(el).parents('#input'+i+'').length ) {
                                        
                    $('.main-body #input'+i+'').fadeOut(333);
                    
                    if (  $('.main-body #input'+next+'').parents('.big-branch0').length  ){
                        $('.main-body #input'+next+'').delay(777).fadeIn(777);   
                        
                    } else {
                        //Luciano eventually you'll need to create an array out of $sections
                        for (var y=1; y < $sections; y++){
                            
                        console.log('this is next value: '+next+'&'+$inputs.length+1);
                            
                        if ( next == $inputs.length+1 ){ 
                            
                            //Estimate is complete time to save
                            
                            break; 

                        }else {
                           
                          if ( lastBranchBool === true ){
                                        
                                        
                                        $('.big-'+targEdBranch+'').css('display', 'none');
                                        
                                        if ( lastBranch != false ){
                                            $(lastBranch).delay(777).fadeIn(777);
                                            $(lastInput).delay(777).fadeIn(777);
                                          
                                        }
                                          
                                        lastBranchBool = false;
                                        break; 
                                        
                                        
                            }else if ( $('.main-body #input'+next+'').parents('.big-branch'+y+'').length ){
                                
                                $('.tree #input'+next+' > input').prop('disabled', true);
                                
                                $('.big-branch'+(y-1)+'').fadeOut(777);
                                $('.big-branch'+y+'').delay(777).fadeIn(777);
                                $('.main-body #input'+next+'').delay(777).fadeIn(777);   
                                $('#input'+i+' .glyphicon-edit').css('visibility', 'visible');   
                               
                                nowEditable( $('#input'+i));
                                
                                console.log( $('#input'+i) );
                            
                            } 
                        
                        }   
                        }                        
                    }
                    break; 
                    //Reminder: need to clear inputs on back button and reset value to 0  
                    //$('button#back').delay(777).fadeIn(777);
                
                }     
            }   
                
            }else if ( $(el).parents('#input11').length && $(el)[0].checked === true) { //Remember its now hard coded YIKES!!!
                
                if ( $('#crBranch'+$thisNum+'').prop("checked") == true  ) {
                    
                    console.log( $('crBranch'+$thisNum+'') );
                    
                }
                
                $('#crBranch'+$thisNum+'').prop("checked", true);
                $('#inBranch'+$thisNum+'').prop("checked", true);
                        
             //   console.log( $($this).parents('[data-total]')[0].attributes[2].value );
                
                
                targInput.branch = $($this).parents('[data-total]')[0].attributes[1].value; // Get main-category (design, conditions, utilities, upgrades, amenities)
                targInput.dataString = $($this).parents('[data-inputs]')[0].attributes[2].value;
                // Get sub-categor of main-category               
                targInput[targInput.dataString] = $('#inBranch'+$thisNum+'')[0].parentNode.childNodes[4].innerHTML.toLowerCase().split(' '); //Asign answer within sub-categor of main-category 
            
                $('#failure').animate( {top: -38}, 300); // Handles failed inputs that are no longer true
                success( targInput );
                
            }else if ( $(el)[0].checked === false ) {
                    
                    $('#crBranch'+$thisNum+'').prop("checked", false);
                    $('#inBranch'+$thisNum+'').prop("checked", false);


                    targInput.branch = 'getValue'; //Call Subtraction 
                
                    if ( $thisID == 'in' ){
                        
                        console.log($( $(el)[0] ).siblings());
                        
                        targInput[targInput.branch] =  'floor'; // Get main-category (design, conditions, utilities, upgrades, amenities)
                        targInput[ targInput[targInput.branch] ] = $($(el)[0]).siblings()[1].innerText.toLowerCase().replace(/[^0-9a-zA-Z- ]/g, "").split(' ')[0];                                   
                        targInput.sumTotal =  $( $(el)[0] ).parents()[2].attributes[1].nodeValue;
                        
                        
                    }else {
                        console.log('by there');

                        targInput[targInput.branch] =  $($(el)[0]).parents()[2].attributes[2].nodeValue; // Get main-category (design, conditions, utilities, upgrades, amenities)
                        targInput[ targInput[targInput.branch] ] = $($(el)[0]).siblings()[1].innerText.toLowerCase().replace(/[^0-9a-zA-Z- ]/g, "").split(' ')[0];                               
                        targInput.sumTotal =  $( $(el)[0] ).parents()[4].attributes[1].nodeValue;
                        
                    }
                    
                    success( targInput );
                
            
            }else {
                
                var sdTarg = '#'+findVisible();
            
                $('#'+$(this)[0].id+'').prop('checked', false);
            

            
                if ( $('#failure p').text.length > 0 )
                    $('#failure p').empty();
            
                    $('#failure p').html('Enter a choice for: '+$('#'+findVisible()+' h3')[0].innerHTML+'');
                    $('#failure').animate( {top: 0}, 50);
                
            }
        
            
                
           
            
        }else if ( $sdTarget == $visTarger ){
            
           inputRuler(el);
            
        }else {
            
            
            var sdTarg = '#'+findVisible();
            
            console.log(findVisible());
            
            $('#'+$(this)[0].id+'').prop('checked', false);


            
            if ( $('#failure p').text.length > 0 )
                $('#failure p').empty();
            
             $('#failure p').html('Enter a choice for: '+$('#'+findVisible()+' h3')[0].innerHTML+'');
             $('#failure').animate( {top: 0}, 50);
            
        }
    }
    
    function nowEditable ( el ) {
        
        var $li = $('ul.edit-list'),
            $h3 = el.children('h3').text(),
            $edit = el.attr('data-inputs');
            
        
        console.log( el.attr('data-inputs') );
        
        $li.append('<li><a id="testy" data-edit="'+ $edit  +'">'+ $h3 +'</a></li>');
        
    }
    
    $('.tree-body, .tree').on('click', 'input', function(){        
        
        
        console.log($(this) ) ;
        
        rulerSD(this);

    });  
    
    $('.tree-body button#floor').on('click', function(){
               
        rulerSD(this)
        
    });
    
    $('body').on('click', 'a#testy', function(e) {
           
        rulerSD(this);
        
    });
    
    for (var i=0; i < $inputs.length + 1; i++ ){
        
        $('inputs#inBranch'+i+'').prop('disabled', true);
        
    }
    
    for (var i=1; i < $sections; i++) {
        $('.big-branch'+i+'').hide();  
        
    }
    
    for (var i=1; i < $inputs.length+1 + 1 ; i++) {
        $('.main-body #input'+i+'').hide();
        
    }
    
    //Need more control :)
    
    $('a#total, .pTotal a, .tree-sum #back, button.glyphicon-floppy-disk').on('click', function(){
        
        $('.wrap').toggleClass('active');
        
        $('.pTotal a').toggleClass('active');
        $('.tree-sum').fadeToggle(777);
        $('.glyphicon-info-sign').fadeToggle(100);
        
    });

    var launched = 0;
    
    $('.pHeader a, button#launchHomes').on('click', function(){
        
        
        var el = $('.tree-body'),
            w = el.width() /2  ;
        
            launched += 1;
        
            console.log( "This is the elements width: " + el.width() + " & its border calc:  " + w);
        
        console.log( $('.main-body #'+findVisible()+'').parents()[1] );
        
        $('.tree-bottom').hide();
        
        $('.model-selection').css( 'border-width' , w + 'px');

        $('.wrapGreen, .pHeader a, .prod-group, .main-body').toggleClass('active').delay(300);
        $('.model-selection, .model-content').fadeToggle(333).delay(300);
        
    });
    
    
    $('[data-pModel]').slice(1, $('[data-pModel]').length ).hide();
    
    var $models = $('[data-pModel]');
    
    $('[data-pModel="single"]').show();
    
    // grab element by data name: $models[2].attributes[1].nodeValue
    
    
    
    $('button#selected').on('click', function(){
        
        console.log("#Selected clicked");
        
        targInput.branch = 'big-branch0';
        targInput.dataString = 'sBase';
        
        console.log("btn selected: "+ targInput);
        
        success( targInput );
        
        $('.model-content .glyphicon').fadeOut(333);
        $(this).fadeOut(333);   
        $('button#changeM').fadeIn(777).delay(433);
        $('.pHeader a').trigger('click').delay(1333);
        
        console.log(launched);
        
        if (launched == 2){
            $('.main-body #input0').hide();
            $('.main-body #input1').fadeIn(777);            
        }else {
            $('.main-body #input0').hide();
        }
        $('.tree-bottom').show();

        
    });

  
    var modelLength = $models.length-1,
        imgPathStart = 'img/home-assets/pre-designed/sollars-model_';
    
        targInput.currentModel = 'single';  //default value

    $("a.glyphicon-chevron-left, a.glyphicon-chevron-right").on('click', function(){    

        console.log( $(this) );
        console.log( $(this).context.classList[1] );
        
        var $thisClass = $(this).context.classList[1];
        
        
        for(var i=0; i < $models.length; i++) {
            
                
            var x, prevName, y, nextTname; 
                
            if ( i > 0 ){
                x = i - 1;
                prevName = $models[x].attributes[1].nodeValue;
            }else if ( i < modelLength ){
                y = i + 1;
                nextTname = $models[y].attributes[1].nodeValue;

            }else
            
                            
    
             console.log(i);

             if ( $($models[i]).css('display') == 'block' ){
    
                $($models[i]).css('display', 'none');
                
                console.log( $models[i].attributes['src'].nodeValue );
                console.log( $($models[i]) );
                console.log(i);
                
                
                if( $thisClass == 'glyphicon-chevron-right' ){
                        console.log('inside right');
                    if ( i == $models.length ){
                        $($models[0]).fadeIn(777); 
                        
                        $('#hBase').attr('src', ''+imgPathStart+ $models[0].attributes[1].nodeValue+'.svg');
                        $('#hBase2').attr('src', ''+imgPathStart+ $models[y].attributes[1].nodeValue+'.svg');                                

                        $('#selectedH').attr('src', ''+imgPathStart+ $models[0].attributes[1].nodeValue+'.svg');
                        targInput.currentModel = $models[0].attributes[1].nodeValue;
                        $('#sumPic').attr('src', $models[0].attributes['src'].nodeValue );

                        break;
                        
                    }
                    else{
                        if ( i < modelLength )
                            y = i + 1;
                        console.log('inside right right: '+i);
                        
                        $('#hBase').attr('src', ''+imgPathStart+ $models[y].attributes[1].nodeValue+'.svg');                                
                        $('#hBase2').attr('src', ''+imgPathStart+ $models[y].attributes[1].nodeValue+'.svg');                                

                        $('#selectedH').attr('src', ''+imgPathStart+ $models[y].attributes[1].nodeValue+'.svg');
                        targInput.currentModel = $models[y].attributes[1].nodeValue;
                        $($models[y]).fadeIn(777);                        
                        $('#sumPic').attr('src', $models[y].attributes['src'].nodeValue );
                        break;
                    }
                }else { 
                    console.log('inside left');
                    if ( i == 0 ){
                         console.log('inside right right: '+modelLength);
                        
                        $('#hBase').attr('src', ''+imgPathStart+ $models[modelLength].attributes[1].nodeValue+'.svg');
                        $('#hBase2').attr('src', ''+imgPathStart+ $models[modelLength].attributes[1].nodeValue+'.svg');

                        $('#selectedH').attr('src', ''+imgPathStart+ $models[modelLength].attributes[1].nodeValue+'.svg');
                        targInput.currentModel = $models[modelLength].attributes[1].nodeValue;
                        $('#sumPic').attr('src', $models[modelLength].attributes['src'].nodeValue );

                        $($models[modelLength]).fadeIn(777);
                        
                        break;
                        
                    }  
                    else{
                        $($models[i-1]).fadeIn(777);
                        $('#hBase').attr('src', ''+imgPathStart+ $models[i-1].attributes[1].nodeValue+'.svg');  
                        $('#hBase2').attr('src', ''+imgPathStart+ $models[i-1].attributes[1].nodeValue+'.svg');  

                        $('#selectedH').attr('src', ''+imgPathStart+ $models[i-1].attributes[1].nodeValue+'.svg');
                        targInput.currentModel = $models[i-1].attributes[1].nodeValue;
                        $('#sumPic').attr('src', $models[i-1].attributes['src'].nodeValue );

                        break;
                    }
                    
                }
                break;
            }
        }
        console.log ('loop ended');
    });
    
    $("button#changeM").on('click', function(){
        
        $(this).hide();  
        console.log("button pressed");
        $('button#selected').css("display", "block");
        
        var digi = /\d+/,
            neNum= findVisible().match(digi)[0];
        
        console.log( neNum );
        
        if ( neNum > 5 ){
            lastBranchBool = true;
            lastInput = '.main-body #'+findVisible();
            lastBranch = '.'+$('.main-body #'+findVisible()+'').parents()[1].attributes[0].value;
            $('.main-body #'+findVisible()+'').parents()[1].style.display = 'none';        
            $('.main-body .big-branch2').css('display', 'block');

        }
                
        
        $('.model-content .glyphicon').fadeIn(777).delay(433);
        
       

    });
    
    $('form').submit(function(){
            
            console.log("successfully in submit area 51. Proceed with caution.");

            console.log(userEstimate.sumTotalProject());
         
            userEstimate['grandTotal'] = userEstimate.sumTotalProject();
            userEstimate['bcTotal'] = userEstimate.sumBuildCost();
            
            console.log( userEstimate.floor.selected );
         
            targInput['floorOptions'] = userEstimate.floor.selected;
         
            var homString = JSON.stringify(targInput);
            var dataTotal = JSON.stringify(userEstimate);
         
            var postData = $(this).serialize() + '&home=' + homString + '&totals=' + dataTotal,
                solidData = {};
       
               
            solidData = {
                    first: this['first'].value,
                    last: this['last'].value,
                    email: this['email'].value,
                    phone: this['phone'].value,
                    total: userEstimate.runTotal
                  //  totals: dataTotal
                
            }; 
            
         
            console.log( this['first'].value );
            console.log( dataTotal );
             
             $.ajax({
                 type: 'post',
                 data: postData,
                 url: '../../configHome.php',
                 success: function(data){
                     console.log(data);
                     alert("Congradulations, you've just configured your future home! A member of the Sollars team will be in contact with you.  Check your email for your new home.");
                     
                 },
                 error: function(){
                     alert('error in first aJax');
                     
                 }
             });

          
             $.ajax({
                 type: 'POST',
                 data: postData,
                 url: '../../sender.php',
                 success: function(data){
                     console.log(postData);
                     
                 },
                 error: function(){
                     console.log(postData);
                 }
             });
        
        
        
        
         $('form').each(function() {
                this.reset(); 
            });
         
             return false;
         
         });
    
        
    $('button#mEdit').on('click', function(e){
        $('ul.edit-list').fadeToggle(333); 
        
    });
    
    function resetConfig() {
        
       var checkArr = $('input:checkbox:checked');
       
        checkArr.prop('checked', false);
        
        console.log(checkArr);
       
    }
    
    $('button#refresh').on('click', function() {
       parent.location.hash = "mynewhome";

        resetConfig();
        
    });

});
