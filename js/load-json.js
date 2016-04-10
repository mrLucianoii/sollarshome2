jQuery(document).ready(function ($) {
    
var loadData;
        $.ajax({
            url: 'json/builderStart.json',
            type: 'get',
            dataType: 'json',
            error: function(data){
            },
            success: function(data){
                loadData = data;
    
            }
        });  
            console.log("testing");
    
        for (var i=0; i < loadData.length; i++) {
            console.log(loadData[i].id);
            
            var $e = '[data-edit="'+loadData[i]+'"]';
            
            $($e).html( loadData[i].stringValue );
                
            console.log('success get: '+ $e);

        }
});