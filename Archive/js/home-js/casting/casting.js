jQuery(document).ready(function($){
    
   
    $('a#choose').on('click', function(e){
        
        e.preventDefault();
        
        var $img = $(this).children(),
            path = $img.data('src'),
            cost = $img.data('cost');
        
        
        console.log( $img.data('src') );
        console.log( document.getElementById('priceSH').innerHTML );   
        
        $('img#selected').attr('src', path);
        document.getElementById('priceSH').innerHTML = '$ '+cost.toLocaleString();
        
    })
    
    console.log('casting js');
});