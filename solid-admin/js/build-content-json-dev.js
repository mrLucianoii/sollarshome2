jQuery(document).ready(function ($) {
    var contentObj = {};
        
    var siteObject = {},
        title = window.location.href;
    
    console.log(title);
    
    if ( title.split('').indexOf('#') > -1 ){
        console.log('pound it');
        title = title.split('').splice(0, title.indexOf('#')).join('');
        title = title.substr(title.lastIndexOf("/")+1);

        
    }else {
        
        title = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
        
    }
    
    
console.log();

function buildJSON () {
    

    var $par = $('main p'),
        $h = $('main h1, main h2, main h3, main h4, main h5'),
        $li = $('main li'),
        $a = $('main a'),
        contArr = [$par, $h, $li, $a];
         
        console.log(contArr);
    
    var    tagObj = {};

    var targetTag;
    
    for (var i=0; i< 3; i++) {
        var content = contArr[i];
        
        var y = 0;
            
        
        content.each(function () {
            if ( y < content.length){
                
            var tag;
                
            switch(i) {
                case 0:
                   tag = 'par';
                   break;
                case 1:
                    tag = 'header';    
                    break;
                case 2: 
                    tag = 'list';
                    break;
                case 3:
                    tag = 'anchor';
                    break;
                default:
                    break;
            }
                
                 targetTag = tag+y;
            
               // console.log($(this)['context']['innerText']);

                siteObject[title] = contentObj[targetTag];

                
                
                contentObj[targetTag] ={
                        timeSaved : new Date($.now()),
                        stringValue :$(this)['context']['innerText'],
                        webpage : title
                
                };
                
               
                
        }
        y++;
            
        });

    }

    

    
    $.ajax({
        url: 'new-json-build.php',
        data: contentObj,
        type: 'post',
        success: function(data) {
            console.log('Ajax Build'); 
            console.log(contentObj);
        },
        complete: function() {
            alert('Congrats SOLID Dude, we have cateloged this page :)');
        },
        error: function(xhr, textStatus, errorThrown) {
                console.log('ajax loading error...');
                return false;
        }
    });
            
}
    
function loadJSON() {
    
   
    var data2 = {},
        titleLoad = title.split(''),
        fileName;

    
    if ( title.split('').indexOf('#') > -1 || title == 'homes.html'){
        
    /* Hack solution after these comments, but keeping this stuff to automate this step for all instances
    
        var poundIndex = titleLoad.indexOf('#');
        titleLoad.splice(poundIndex);
        */

        fileName = 'json/homes.json';
       // alert(fileName);

        
    }else {
        fileName = 'json/'+title.split('').splice(0, title.length-4).join('')+'json';        
    }
        
        

    console.log(fileName);
    
// Go get it
    
    $.getJSON(fileName, function(result){
        
       var $par = $('main p'),
        $h = $('main h1, main h2, main h3, main h4, main h5'),
        $li = $('main li'),
        $a = $('main a'),
        contArr = [$par, $h, $li, $a];
        
            var    tagObj = {};

            //console.log(contArr[2]);
    
                for (var i=0; i< 3; i++) {
                    var content = contArr[i];
         
                        var y = 0;
            
        
                content.each(function () {
                    if ( y < content.length){
                
                        var tag;
                
                        switch(i) {
                            case 0:
                                tag = 'par';
                                break;
                            case 1:
                                tag = 'header';    
                                break;
                            case 2: 
                                tag = 'list';
                                break;
                            case 3:
                                tag = 'anchor';
                                break;
                            default:
                                break;
                }
                
                var targetTag = tag+y;
            

                 var $e = '[data-edit="'+ targetTag +'"]',
                     strEdit = String(result[targetTag].stringValue);
                        
                        console.log($e);
                        console.log(result[targetTag].stringValue);
                        
                $($e).text(strEdit);
                
            
                }
            y++;
                });
            }                
    });     
}
 /*   
var build;
var r = confirm("Build JSON File?");
if (r == true) {
} else {
    alert('We will not build today.');
}*/

// buildJSON();   
    

function editableNow (login) {
   var $par = $('main p'),
        $h = $('main h1, main h2, main h3, main h4, main h5'),
        $li = $('main li'),
        $a = $('main a'),
        contArr = [$par, $h, $li, $a];


    for (var i=0; i<contArr.length; i++) {
        var content = contArr[i];
        
        
        var counter = 0;
            
        
        content.each(function () {
            if ( counter < content.length){
                 var tag;
            switch(i) {
                case 0:
                   tag = 'par';
                   break;
                case 1:
                    tag = 'header';    
                    break;
                case 2: 
                    tag = 'list';
                    break;
                case 3:
                    tag = 'anchor';
                    break;
                default:
                    break;
            }
                
                $(this).attr('contenteditable', 'true').attr('data-edit', ''+tag+counter+'');
                
                
            }
            counter++;
        });
    }
           
}

    editableNow(true);
    
   
    
    document.addEventListener('keydown', function (event) {
        var esc = event.which == 27,
            nl = event.which == 13,
            shift = event.shiftKey,
            el = event.target,
            input = el.nodeName != 'INPUT' && el.nodeName != 'TEXTAREA',
            data2 = {},
            data1 = {},
            jDataMe = {};
        
      /*  $.ajax({
	       type: 'GET',
	       url: 'json/index.json',
            async: false,      
           success: function(data)
	       {
		      data2 = data;
               return data2;
	       },
	       error: function(e)
	       {
             //  alert('no bueno senor');
	       }
        }); */
        
        if (input) {
            if (esc) {

                document.execCommand('undo');
                el.blur();
        
            } else if (nl && shift) {
            /*    
                console.log(data2);
              
                var jCation;
               
            if (data2.length > 0) {    
                // json and location = jCation hehe
                jCation = data2.length -1;
            }else { jCation = 0 }
                
                console.log(jCation);
                
             //   data2[jCation][el.getAttribute('data-edit')]['timeSaved']= new Date($.now());
            //    data2[jCation][el.getAttribute('data-edit')]['stringValue']= el.innerHTML;
             //   data2[jCation]['loadIt'] = el.getAttribute('data-edit');    */
                
        el.blur();
        data2[el.getAttribute('data-edit')] = el.innerHTML;

                                

    /*            
    $.ajax({
        url: 'new-json-build.php',
        data: data2,
        type: 'post',
        success: function(data) {
            console.log('Ajax Rules AGAIN!'); 
            console.dir(data2);
        },
        complete: function() {
            alert('Congrats SOLID Dude, we have cateloged this ENTRY :)');
        },
        error: function(xhr, textStatus, errorThrown) {
                console.log('ajax loading error...');
                return false;
        }
    }); */
                
        buildJSON();        
        loadJSON();
        event.preventDefault();
    }
        }
}, true);
    
 loadJSON();

});