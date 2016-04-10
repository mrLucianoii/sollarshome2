    
    var solidValue = {};
    
    $('form').submit(function(){
        
       // var postData = $(this).serialize();
        
      //  console.log( postData );
        
        var $form = $(this)[0];
        
       // console.log( $($form[1]).parents('ul')[0].id );
         var mainCat = {};
        
        
        for (var i=0; i < $form.length; i++ ) {
            
            var keySD = $( $form[i] ).parents()[1].id;
                        
            solidValue[ keySD ] = {};
            
        } 
      //  console.log( solidValue );

        
        for (var i=0; i < $form.length; i++ ) {
            
          /*  for(var y=0; y < $form.length; y++){
                
            } */
            
            var keySD1 = $( $form[i] ).parents()[1].id;
            

            solidValue[keySD1][$form[i].name] = $form[i].value;
            
            //solidValue.push(mainCat);
            
        }
        
        
       // console.log( solidValue );
        
        var valueSerl = JSON.stringify( solidValue );
      //  console.log( valueSerl );

       var postData = '&valuesSD=' + valueSerl;
        
        $.ajax({
                 type: 'post',
                 data: postData,
                 url: 'js/admin-functions/config-values.php',
                 success: function(data){
                     console.log(data);
                     alert("We are in the Ajax!!");
                     
                 },
                 error: function(){
                        console.log(data);

                     alert('error in first aJax');
                     
                 }
             });
        return false;

        
    });

console.log("Im Working!");