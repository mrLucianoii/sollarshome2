jQuery(document).ready(function ($) {
    
function loadJSON() {
    
    var data2 = {},
        fileName = 'json/'+title.split('').splice(0, title.length-4).join('')+'json';


        console.log(fileName);

    $.getJSON(fileName, function(result){
        data2 = result;
        console.log("Loading data successful");
                    

    }); 
    
       var $par = $('p'),
                    $h = $('h1, h2, h3, h4, h5'),
                    $li = $('li'),
                    $a = $('a'),
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
                     strEdit = String(data2[targetTag].stringValue);
                        
                        console.log($e);
                        console.log(data2[targetTag].stringValue);
                        
                $($e).text(strEdit);
                
            
                }
            y++;
                });
            }
                             
    
        console.log("Some loading script yet");
        console.log(data2);
    
}
    
});