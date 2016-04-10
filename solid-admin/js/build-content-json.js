jQuery(document).ready(function ($) {
    var contentObj = {};
        
    var siteObject = {}

    var title = window.location.href.substr(window.location.href.lastIndexOf("/")+1);

console.log('The Start');

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
            console.log('Complete');
        },
        error: function(xhr, textStatus, errorThrown) {
                console.log('ajax loading error...');
                return false;
        }
    });
            
}
    
function loadJSON() {
    
   
    var data2 = {},
        fileName = 'json/'+title.split('').splice(0, title.length-4).join('')+'json';


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
    
                for (var i=0; i< contArr.length; i++) {
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
    buildJSON();
} else {
    alert('We will not build today.');
}
*/

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

        
        if (input) {
            if (esc) {

                document.execCommand('undo');
                el.blur();
        
            } else if (nl && shift) {
      
                
        el.blur();
        data2[el.getAttribute('data-edit')] = el.innerHTML;

                            
        buildJSON();        
         document.location.reload();

        event.preventDefault();
    }
        }
}, true);
    
 loadJSON();

});