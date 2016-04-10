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

// Shells have been set
var shell500 = new Shell(),
    shell1280 = new Shell(),
    shell4000 = new Shell(),
    garages = new Shell(),
    emptyShell = new Shell(),
    shellFam = [ shell500, shell1280, shell4000, garages ];


/******* Update shell names ***/    

    shell500.name = 'shell600';
    shell1280.name = 'shell1280';
    shell4000.name = 'shell2200';
    garages.name = 'garages';

function Building() { 
    // a building 
    // Object constructor for a single Building
    this.name = "";
    this.model= "";
    this.priceShell= 0;
    this.priceOpt1= 0;
    this.priceOpt2= 0;
    this.squareFoot= "";
    this.shellType= "";
    this.ceiling= 0;
    this.qtyRooms= 0;
    this.qtyBath= 0;
    this.kitchen= "false"; //No Kitchen Default
    this.shellPath= "";
    this.outDoorPool= "false";
    this.patio= "false";
    this.patioDeck= "false";
    this.poolBase= "false";
    this.garage1= "false";
    this.garage2= "false";
    this.garage3= "false";
    this.descriptionSD= "Needs Description";

    
    //Image Paths sizes must be 1584x 835px
        this.path1= "";
        this.path2= "";

}

function Shell() { 
    // a shell
    this.name= "";
    // all available buildings
    this.modelAmount = 0;
    
}
function AddOnsText() {
    this.outDoorPool= "Outdoor Swimming Pool";
    this.patio= "Patio Package";
    this.patioDeck= "Patio Deck Only";
    this.poolbase= "Pool Basement Package";
}
function pathSave ( shell ){
        
        var imgShell = '#' + shell + '-shell',
            imgfin1 = '#' + shell + '-finish1',
            imgfin2 = '#' + shell + '-finish2',
            pathArr = [ imgShell, imgfin1, imgfin2 ],
            localShell = {},
            targBuilding = $('#imgInput')[0][0].value;
    
        console.log($('#imgInput')[0][0]);
    
        //Only one image folks
        
        localShell['shellType'] = $('#imgInput')[0][0].name;
        localShell['model'] = targBuilding;
        localShell['finishPath'] = {};
        
        for (var i=0; i < pathArr.length; i++){
            
             if ( $( pathArr[i] )[0].dropzone.files.length > 1){
                console.log ($(pathArr[i])[0].dropzone);
                $(pathArr[i])[0].dropzone.files.splice(0, $(pathArr[i])[0].dropzone.files.length);
                
                 var shellTxt;
                 
                 switch (i){
                     case 0:
                         shellTxt = "Shell Image";
                         break;
                         
                     case 1:
                         shellTxt = "Finish 1";
                         break;
                         
                     case 2:
                         shellTxt = "Finish 2";
                         break;
                         
                     default:
                         alert('Oh know somethings wrong here...');
                 }
                
                alert('Load Only One Image.  Please Load again a one image for: ' + shellTxt + '.');
 
                $(pathArr[i])[0].innerHTML = shellTxt + ':' + '<div style="display: block" class="dz-default dz-message"><span>Drop files here to upload</span></div>';

            }else if ( pathArr[i] == imgShell ){
                
                console.log(  $(pathArr[i])[0].dropzone.files[0].name );
                
                localShell[ 'shellPath' ] = 'uploads/' + $(pathArr[i])[0].dropzone.files[0].name;
                
                
            }else {
                
                var propPath = $(pathArr[i]).data().name;
                
               console.log( $(pathArr[i])[0].dropzone );
                if ( $(pathArr[i])[0].dropzone.files.length > 0 ){
                    localShell[propPath] = 'uploads/' + $(pathArr[i])[0].dropzone.files[0].name;
                    
                }
            }
            
            
        }
        
        console.log ( localShell );
        updateBuilding(localShell);
    }

// This will get all buildings listed under the 'form <selector>' adds them to the correct shell-- shellObj
function loadShell( shellObj ) {
    // Get all avaiable buildings for a shell and load it
    var selArr = $('.build');
    
    
    for (var y=0; y < shellObj.length; y++) {
        for (var i=0; i < selArr.length; i++){

            if ( shellObj[y]['name'] == selArr[i].name ) {
                shellObj[y]['modelAmount'] = selArr[i].length;

            }

        }
    }
    for (var y=0; y < shellObj.length; y++) {
       for (var i=0; i< shellObj[y].modelAmount; i++){
            var building = new Building();

            shellObj[y][i] = building;
            shellObj[y][i]['model'] = 'build' + i;

       }
    }
    return shellObj;
}

//This is a function needed to run only once per family shell.  It will initiate the data-structure create and update database.  Everything is automated.
// famShell should be set to --> famShell = shellFam 
// dbName is a string and will name the new Database
function firstLoad ( famShell, dbName ) {
    // A one time load upon launch
    var objLoaded;
    
    objLoaded = loadShell( famShell );
    
    //create mew DB
    // createDB(dbName);  May not be necessary
    
    //Structure DB Tables to famShell data and model
    createTBL(emptyShell, shellFam[0][0], 'sollarProductDB');
    return true;
}

// Create a new Database 
function createDB( nameDB ){
    
    
    
    var postData = '&name=' + JSON.stringify(nameDB);
    
    $.ajax({
        type: "POST",
        url: 'dbCreate.php',
        data: postData,
        success: function ( data ){
            console.log('Succesful POST. Database '+ nameDB +' created.');
            console.log('Data posted: '+ data);
            
        },
        error: function ( data ){
            console.log('Error, POST Failed.  Database '+ nameDB +' NOT created.');
            console.log('Data: '+ data);
            
        }
        
    });
    
}

// Create and save Table to Sollars MySQL Database {DO NOT MESS WITH}
function createTBL( shell, building ){
    
    var postData = '&shell=' + JSON.stringify(shell) + '&building=' + JSON.stringify(building);
        
        $.ajax({
        type: "POST",
        url: 'createTBL.php',
        data: postData,
        success: function ( data ){
            console.log('Succesful POST. Table created.');
            console.log(data);
            
        },
        error: function ( data ){
            console.log('Error, POST Failed.  Table not created.');
            console.log('Data: '+ data);
            
        }
        
    });

    
}

// Update a current shell in Sollars MySQL Database {DO NOT MESS WITH}
function saveShell( shellObj ){
    
   
}

// INSERT all shells  Parent Table (Shell) Needs only to be ran once.  Run this in a JS Console to execute.
function insertShells(){
    
    var targObj = loadShell(shellFam);
    
    for (var i=0; i < targObj.length; i++){
       
        var postData = '&shell=' + JSON.stringify( targObj[i] );

        console.log( targObj[i] );

           $.ajax({
            type: "POST",
            url: 'insert.php',
            data: postData,
            success: function ( data ){
                console.log('Succesful POST. INSERT Success.');
                console.log(data);

            },
            error: function ( data ){
                console.log('Error, POST Failed.  INSERT Failded.');
                console.log('Data: '+ data);

            }

        });          
        
    }

    
}

// INSERT all shells  Parent Table (Shell) Needs only to be ran once.  Run this in a JS Console to execute.
function insertBuildings(){
    
    var targObj = loadShell(shellFam);
    
       
    
   for (var i=0; i < targObj.length; i++){
       
       for (var x=0; x < targObj[i]['modelAmount']; x++){
        
    
        targObj[i][x]['shellType'] = targObj[i]['name'];
    
            var postData = '&shellType=' + JSON.stringify( targObj[i]['name'] ) + '&buildings=' + JSON.stringify( targObj[i][x] );
            
    
            $.ajax({
                type: "POST",
                url: 'insertBuildings.php',
                data: postData,
                success: function ( data ){
                    console.log('Succesful POST. INSERT Success.');
                    //console.log(postData);
                    console.log(data);

                },
                error: function ( data ){
                    console.log('Error, POST Failed.  INSERT Failded.');
                    console.log(data);

                }

            });        
        

          
            
        }
        
    }
    
    
}

// Update a current building in Sollars MySQL Database
function updateBuilding( buildObj ){
    
    var postData = '&building=' + JSON.stringify(buildObj);
    
    
    console.log( buildObj );
    
    $.ajax({
        type: "POST",
        url: 'updateBuilding.php',
        data: postData,
        success: function ( data ){
          console.log('Succesful POST. Database Table '+ buildObj.shellType +' updated.');
            console.log('Data posted: '+ data);
            
        },
        error: function ( data ){
            console.log('Error, POST Failed.  Database Table '+ buildObj.shellType +' NOT updated.');
            console.log('Data: '+ data);
            
        }
        
    });
        
}

function solid_Val(inputSD){
    
    
    
}

function runTest() { location.href = 'createTBL.php'; alert('it was written!');}

