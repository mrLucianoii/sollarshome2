 /*************************************************************************
 * 
 * SOLID CONFIDENTIAL
 * __________________
 * 
 *  [2013] - [2016] Property of Luciano Aldana dba SOLID 
 *  All Rights Reserved.
 * 
 * NOTICE:  All information contained herein is, and remains
 * the property of SOLID and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to SOLID
 * and its suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from SOLID.
 */

jQuery(document).ready(function () {

    function refreshSD (solid_id){
        
        var $formSD = $("form#"+solid_id)[0];
        
        console.log($formSD.length);
        
        console.log($($formSD[9]));
        
        for (var i=1; i < $formSD.length; i++ ){
            if ( $formSD[i].type == 'radio' || $formSD[i].type == 'checkbox' ){
                $formSD[i].checked = false;
        
            }else if ($formSD[i].type != 'submit') {
                $formSD[i].value = "";
    
            }
            
        }
        return true;
        

    }
    
    
    $('form').submit(function(){
        
        
        var $form = $(this)[0],
            mainCat = this.id,
            localShell = {},
            changes = {};
    
        
        localShell['shellType'] = mainCat;
        localShell['model'] = $form[0].value;
        
        // The form order Name, Price, SQFT, Heght, qtyRooms, QTY Baths, Kitchen, Add ones     
        
        console.log( $form[8].name );
        
        
        for ( var i=1; i < $form.length; i++ ){
                        
            if ( $form[i].name == 'addOns' ){
                
                if ( $form[i].checked != true ){
                    
                }else {
                    
                    if ( $form[13].checked == false && $form[14].checked == false ){
                        var remove = confirm("Do you want to remove Checked 'Add Ons'? ")
                    
                        if (remove == true){
                           localShell[ $form[i].attributes.select.value ] = 'add';
                            
                        }else {
                            alert("Items will be removed from this building");

                            localShell[ $form[i].attributes.select.value ] = 'remove';

                        }
                    }else {
                        
                        if ( $form[13].checked == true ){
                            localShell[ $form[i].attributes.select.value ] = 'remove';
   
                        }else{
                            localShell[ $form[i].attributes.select.value ] = 'add';
                            
                        }

                        
                    }
                    
                    
                }
                
            }else if( $form[i].name == 'kitchen' || $form[i].name == 'kitchenNO'  ){
        
                if ( $form[i].name == 'kitchenNO' && $form[i].checked == true  ){
                    localShell[ 'kitchen' ] = 'false';

                }else if ($form[i].name == 'kitchen' && $form[i].checked == true ) {
                    localShell[ 'kitchen' ] = 'true';
                }else {
                    
                    delete localShell[ 'kitchen' ];
                    
                }
                console.log(localShell[ 'kitchen' ]);

                
            }else if( $form[i].name != 'remove' &&  $form[i].name != 'submit'  ) {
                
                
                
                if ( $form[i].value == "0" || $form[i].value == "") {
                    delete localShell[ $form[i].name ];
                    
                }else {
                    if ( $form[i].name == "descriptionSD" ){
                        
                        localShell[ $form[i].name ] = $form[i].value.replace(/["']/g, "");

                    }else {
                        localShell[ $form[i].name ] = $form[i].value;
                    }
                }
   
            }
            
        }
        
        console.log(localShell);

        var fire = confirm( "Are you sure you want to change " + localShell['model'] +" of shell " + mainCat + "?"),
            x;
        if ( fire == true ){
            x = localShell;
            refreshSD(mainCat);
            /*
            var refresh = confirm("Would you also like to refresh all fields in " + mainCat + "?");
            if ( refresh == true){
             
                refreshSD(mainCat);
                    
            }*/
            
        }else {
            alert ( "Update canceled!" );
        }
        
        localShell["descriptionSD"] = JSON.stringify(localShell["descriptionSD"])
        updateBuilding( localShell );
        
        document.getElementById("last").innerHTML = x;
        
        
        return false;
        
               
    
    });

    $('a.glyphicon-refresh').on('click', function(e) {
       
        refreshSD(this.id);
        
    });
    
    $("button#shell500, button#shell1280, button#shell4000, button#garages").on('click', function(e){
        
        var shellID = this.id;
                

        pathSave( shellID );

        
        
    });
 
    console.log("Im Working!");
    
});