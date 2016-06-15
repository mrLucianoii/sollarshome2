jQuery(document).ready(function ($) {
    var contentObj = {};
        
    var siteObject = {}

console.log('The Start');
function buildJSON () {
    var $par = $('p'),
        $h = $('h1, h2, h3, h4, h5'),
        $li = $('li'),
        $a = $('a'),
        contArr = [$par, $h, $li, $a];

    var    tagObj = {};

    
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
            
               
            
                //$e.attr('contenteditable', 'true').attr('data-edit', targetTag);
                
             var title = document.getElementsByTagName("title")[0].innerHTML;

                console.log(title);
                
                contentObj[targetTag] = {
                    timeSaved : new Date($.now()),
                    stringValue : contArr[i][y]['innerText'],
                    dataTarget : targetTag
                };
                
                
                
        }
        y++;
        });
             console.log("RIght HEre -->"+ siteObject);

    }
           
    
    $.ajax({
        url: 'new-json-build.php',
        data: contentObj,
        type: 'post',
        success: function(data) {
            console.log('Ajax Rules AGAIN!'); 
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
        console.log("hi sir  &&&");

    $.each(contentObj, function(index, value) {
            console.log("hi sir");
;
    }); 
    
}
loadJSON();
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
    var $par = $('p'),
        $h = $('h1, h2, h3, h4, h5'),
        $li = $('li'),
        $a = $('a'),
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
      data1 = {},
      jDataMe = {};

  if (input) {
    if (esc) {
      // restore state
      document.execCommand('undo');
      el.blur();
    } else if (nl && shift) {
      // save

        data1['timeSaved'] = new Date($.now());
        data1['stringValue'] =  el.innerHTML;
        
        jDataMe[el.getAttribute('data-edit')] = data1;        
                 
        buildJSON();        
        
        el.blur();
        event.preventDefault();
    }
  }
}, true);
    
    });