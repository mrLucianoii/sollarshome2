jQuery(document).ready(function () {

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
        

function loadJSON() {
    
   
    var data2 = {},
        titleLoad = title.split(''),
        fileName;

    
    if ( title.split('').indexOf('#') > -1 || title == 'homes.html'){
        
  

        fileName = 'solid-admin/json/main/homes.json';
  
        
    }else {
        fileName = 'solid-admin/json/main/'+title.split('').splice(0, title.length-4).join('')+'json';        
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
                $(this).attr('data-edit', ''+targetTag+'');

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

    loadJSON();
    
});