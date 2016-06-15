jQuery(document).ready(function ($) {
    

    var nameData;
        $.ajax({
            url: 'json/builderStart.json',
            type: 'get',
            dataType: 'json',
            error: function(data){
            },
            success: function(data){
                nameData = data; 
                
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
            
//                console.log(tag+y);
  //              console.log(targetTag);

                 var $e = '[data-edit="'+ targetTag +'"]';
                $($e).html( nameData[0][targetTag].stringValue );
                
            
                }
            y++;
        });
                }

        }  

        });
    
});