 $(document).ready(function() {
    
     $('button#finalSave').click(function(){
        var save= 'true'
         $.ajax({
            type: 'POST',
            url: 'save-to-main.php',
            data: save,
            success: function(){
                
                console.log('fire at will!');
                console.log(save);
                
            },
            dataType: 'text'
         });
     });
     
 });