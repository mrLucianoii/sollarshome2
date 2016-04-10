jQuery(document).ready(function ($) {
    
    var $aEdits = $('ul#live-edit-now li a');
    
    console.log($aEdits);
    
    document.addEventListener('click', function(event) {
        var  el = event.target;
            
        alert( el.innerHTML );
        
        var activeObj = {},
            pageHistory = {};
        
            activeObj['page'] = el.innerHTML;
            activeObj['status'] = 'editatble';
            
            pageHistory = {
                page : el.innerHTML,
                activity : {
                    status : activeObj['status'],
                    date : new Date($.now())
                }
            };
        
        console.log(pageHistory);
            
        
        $.ajax({
            url: 'activate.php',
            data: pageHistory,
            type: 'post',
            success: function(data) {
                alert( "activation was successful.");
            }
        });
        
    }, true);
    
});