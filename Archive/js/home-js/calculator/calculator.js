


var SolidCalculate =  {
    
    runTotal: 0,
    
    baseTotal: 0,
    siteConditionTotal: 0,
    buildingUpgradeTotal: 0,
    
    totalCostBuilding: 0,
    
    designTotal: 0, //design/engineering/etc.
    utilityTotal: 0,
    amenitiesTotal: 0,
    
    totalProjectCost: 0,
    
    //input variables
    
    selectedBase: 0,
    single: 1000, //single
    guest: 2000, //guest
    rental: 3000, //rental
    garage: 4000, //garage 
    office: 5000, //office
    poolHouse: 6000, //pool
     
    sqFt: 1,
    surveyor: 3500,
    geoTech: 5500,
    civilEng: 6000,
    
    custom: {
        vrBase: function ( sQft ){

            return 7000 + ( 6 * sQft );
            
            
        },
        vrCustom: function( sQft ){
            
           return 10000 + ( 9 * sQft );
            
            
        },
        getValue: function ( inputString, currentObj, $this ){
            
            
            var formatSD = inputString.split('');
            
            formatSD[0] = formatSD[0].toUpperCase();
            
            formatSD = 'vr' + formatSD.join('');
            
            console.log( formatSD );
            
            if ( formatSD == 'vrBase' ){
                
                return this.vrBase($this.sqFt);
            }else {
                
                return this.vrCustom($this.sqFt)
            }
            
        }
    },
    
    printModel: {
        yes: 300,
        no: 0,
        getValue: function( inputString, currentObj ){

            console.log( inputString );
            console.log( this[inputString] );
            console.log( this.printModel );
            
            return this[inputString];

        }
    },

    sCondtn: {
        none: 0,
        flat: .06,
        gently: .09,
        hillside: .18,
        getValue: function(inputString, currentObj ){
            
            return this[inputString] * SolidCalculate[ currentObj.currentModel ];
            
        }
    },
    
    
    //+++Constant Variables+++
    
    //Demolition
    demo: {
        none: 0,
        minor: 2500,
        moderate: 5500,
        significant: 12000,
        getValue: function(inputString, currentObj ){
            
            return this[inputString];
            
        }
    },
    
    //utilities
    //single family home
    singleHome:{
        single25: 12000,
        single50: 16000,
        single100: 29000,
        branchHtml: 
            '<ul id="input5" class="check-SD" data-inputs="singleHome">'
            +'<h3>Single Family Homes</span></a></h3>'
            +'<h4>Add a header from the admin portal </h4>'
            +'<li>'
            +'<input type="checkbox" id="inBranch11" class="regular-checkbox big-checkbox" /><label for="inBranch11"></label> <p>25 feet</p>'
            +'</li>'
            +'<li>'
            +'<input type="checkbox" id="inBranch12" class="regular-checkbox big-checkbox" /><label for="inBranch12"></label> <p>50 feet</p>'
            +'</li>'
            +'<li>'
            +'<input type="checkbox" id="inBranch13" class="regular-checkbox big-checkbox" /><label for="inBranch13"></label> <p>100 feet</p>'                          
            +'</li>'
            +'</ul>',
        bigBranchHtml: 
            '<ul id="input5" class="check-SD" data-inputs="singleHome">'
            +'<h3>Single Family Homes</h3>'
            +'<h4>Add a header from the admin portal </h4>'
            +'<li>'
            +'<input type="checkbox" id="crBranch11" class="regular-checkbox big-checkbox" /><label for="crBranch11"></label> <p>25 feet<a href="#" class="title-popover" data-title="25 Feet Cost: " data-body="And here\'s some amazing content. It\'s very engaging. Right?"><span class="glyphicon glyphicon-info-sign"></span></a></p>'
            +'</li>'
            +'<li>'
            +'<input type="checkbox" id="crBranch12" class="regular-checkbox big-checkbox" /><label for="crBranch12"></label> <p>50 feet<a href="#" class="title-popover" data-title="50 Feet Cost: " data-body="And here\'s some amazing content. It\'s very engaging. Right?"><span class="glyphicon glyphicon-info-sign"></span></a></p>'
            +'</li>'
            +'<li>'
            +'<input type="checkbox" id="crBranch13" class="regular-checkbox big-checkbox" /><label for="crBranch13"></label> <p>100 feet<a href="#" class="title-popover" data-title="100 Feet Cost: " data-body="And here\'s some amazing content. It\'s very engaging. Right?"><span class="glyphicon glyphicon-info-sign"></span></a></p>'                            
            +'</li>'
            +'</ul>',
        getValue: function(inputString, currentObj ){
            
            var homeKey = 'single'+inputString;

            console.log( this[homeKey] );
            
            return this[homeKey];
            
        }

    },
    
    //second units
    addUnits: {
        secondUnit25: 6000,
        secondUnit50: 9500,
        secondUnit100: 17000,
        branchHtml: 
            '<ul id="input5" class="check-SD" data-inputs="addUnits">'
            +' <h3>Second Units</h3>'
            +'<h5>'
            +'EDIT THE BODY TO CHANGE THIS CONTENT'
            +'<i>NOTE: There can be significant variability in this cost due to city requirements.</i>'
            +'</h5>'
            +'<li>'
            +'<input type="checkbox" id="inBranch11" class="regular-checkbox big-checkbox" /><label for="inBranch11"></label> <p>25 feet: $6000</p>'
            +'</li>'
            +'<li>'
            +'<input type="checkbox" id="inBranch12" class="regular-checkbox big-checkbox" /><label for="inBranch12"></label> <p>50 feet: $9500</p>'
            +'</li>'
            +'<li>'
            +'<input type="checkbox" id="inBranch13" class="regular-checkbox big-checkbox" /><label for="inBranch13"></label> <p>100 feet: $17000</p>'                      
            +'</li>'
            +'</ul>',
        bigBranchHtml:
            '<ul id="input5" class="check-SD" data-inputs="addUnits">'
            +'<h4>Second Units</h4>'
            +'<h5>'
            +'EDIT THE BODY TO CHANGE THIS CONTENT'
            +'<i>NOTE: There can be significant variability in this cost due to city requirements.</i>'
            +'</h5>'
            +'<li>'
            +'<input type="checkbox" id="crBranch11" class="regular-checkbox big-checkbox" /><label for="crBranch11"></label> <p>25 feet: $6000<a href="#" class="title-popover" data-title="25 Feet Cost: " data-body="And here\'s some amazing content. It\'s very engaging. Right?"><span class="glyphicon glyphicon-info-sign"></span></a></p>'
            +'</li>'
            +'<li>'
            +'<input type="checkbox" id="crBranch12" class="regular-checkbox big-checkbox" /><label for="crBranch12"></label> <p>50 feet: $9500<a href="#" class="title-popover" data-title="50 Feet Cost: " data-body="And here\'s some amazing content. It\'s very engaging. Right?"><span class="glyphicon glyphicon-info-sign"></span></a></p>'
            +'</li>'
            +'<li>'
            +'<input type="checkbox" id="crBranch13" class="regular-checkbox big-checkbox" /><label for="crBranch13"></label> <p>100 feet: $17000<a href="#" class="title-popover" data-title="100 Feet Cost: " data-body="And here\'s some amazing content. It\'s very engaging. Right?"><span class="glyphicon glyphicon-info-sign"></span></a></p>'                      
            +'</li>'
            +'</ul>'
        ,
        getValue: function(inputString, currentObj ){
            
            var homeKey = 'secondUnit'+inputString;
            
            console.log( inputString );

            console.log( this[homeKey] );

            
            return this[homeKey];
            
        }
        
    },
    
    //basement upgrades
    basement:{
        unfinished: 50,
        finished: 50,
        getValue: function( inputString, currentObj ){
            
            return this[inputString];

            
        }
    },
    
    //appliances upgrades
    app: {
        standard: 50,
        upgraded: 100,
        professional: 150,
        getValue: function( inputString, currentObj ){
            
            return this[inputString];

            
        }
        
    },
    
    //bath upgrades
    bath: {
        standard: 50,
        premium: 100,
        getValue: function( inputString, currentObj ){
            
            return this[inputString];
    
        }
    },
    
    //windows and doors
    window: {
        standard: 50,
        upgraded: 100,
        professional: 150,
        getValue: function( inputString, currentObj ){
            
            return this[inputString];
    
        }

    },
    
    
    //paint upgrades
    painting:{
        none: 0,
        paintadd: function () { return 4 * SolidCalculate.sqFt },
        getValue: function( inputString, currentObj ){
            
            var homeKey = 'paint'+inputString;
            
            return this[homeKey];
    
        }

    },
    //floor upgrades
    
    floor: {
        polished: 50,
        colored: 50,
        carpet: 50,
        tile: 50,
        hardwood: 50,
        laminated: 50,
        hardwood: 50,
        selected: {
            polished: 'No',
            colored: 'No',
            carpet: 'No',
            tile: 'No',
            hardwood: 'No',
            laminated: 'No',
            hardwood: 'No'
        },
        getValue: function( inputString, currentObj ){
            
                
                if ( inputString in this.selected ){
                    
                    console.log(inputString);
                    
                    this.selected[inputString] = 'No';
                    
                }
                
            
            
            return this[inputString];  
        }
  
    },
    
    //roof upgrades
    roof: {
        stamped: 50,
        spanish: 100,
        wood: 150,
        standing: 200,
        getValue: function( inputString, currentObj ) {
            
            return this[ inputString ];
        }
    },
    
    //wainscoating, trim, solar, and electric charging station upgrades
    wains:{
        no: 0,
        yes: 1000,
        getValue: function( inputString, currentObj ) {
            
            return this[inputString];
            
        }
    },
    trims: {
        yes: 1000,
        getValue: function(inputString, currentObj) {
            
            return this[inputString];
            
        }
        
    },
    solar: {
        no: 0,
        yes: 1000,
        getValue: function(inputString, currentObj) {
            
            return this[inputString];
            
        }
    },
    chargeStn: {
        no: 0,
        yes: 500,
        getValue: function(inputString, currentObj){
            
            return this[inputString];
            
        }
    },    
    
    
    //site amenities
    dPatio: {
        no: 0,
        yes: 1000,
        getValue: function(inputString, currentObj){
            
            return this[inputString];
            
        }
    },
    
    overH: {
        no: 0,
        yes: 500,
        getValue: function(inputString, currentObj){
            
            return this[inputString];
            
        }
    },
  
    pool: {
        no: 0,
        yes: 600,
        getValue: function(inputString, currentObj){
            
            return this[inputString];
            
        }
    },
  
    bbq: {
        no: 0,
        yes: 300,
        getValue: function(inputString, currentObj){
            
            return this[inputString];
            
        }
    },
  
    land: {
        no: 0,
        yes: 200,
        getValue: function(inputString, currentObj){
            
            return this[inputString];
            
        }
    },
  
    inputSDinject: function (parent, sideBranch, mainBranch, dTarg){
        
        
        
        var branchSD = document.getElementsByClassName(parent),
            bigBranch = 'big-' + parent + ' ' + 'inner-branch',
            branchSD2 = document.getElementsByClassName(bigBranch),//Branding at the code level SOLID(SD)
            $h3;
        
//           console.log( $('ul.edit-list li a')[4].innerHTML );
         //   console.log( $('ul.edit-list') );

        
        if ( dTarg == 'addUnits' ){
            $h3 = 'Second Units'
        }else {
            $h3 = 'Single Family Homes'
        }
        
        $('.branch2 #input5, .big-branch2 #input5').remove();
        
                
        $('.'+parent+'').append( sideBranch );
        $('.big-'+parent+' .inner-branch').append( mainBranch ); 

        if( $('ul.edit-list li a').length >= 4 ){
            console.log( $('ul.edit-list li a')[4].dataset.edit );
            
           $('ul.edit-list li a')[4].dataset.edit = dTarg;
            $('ul.edit-list li a')[4].innerHTML = $h3;
            
            console.log( $('ul.edit-list li a')[4].dataset.edit );

            
        }else {
            
        }
       // document.getElementsByClassName('.main-body').getElementById('input5').style.display = 'none';
        
    },
    base: function(answer){ 
        
        console.log('current model selected: ' +answer.dataString );
        
        console.log('AND: '+ this.custom);
        
        var $total = 0;
        //proptery name to check for: sBase, printModel
        // Expression parameter will be a string
        if (answer.dataString == 'sBase'){
            switch (answer.currentModel) { 
                case 'single':
                
                    this.selectedBase = this.single;
                    this.runTotal = this.single;
                    $total = this.single;
                    this.baseTotal = this.single;
                    this.single.selected = true; 
                    console.log(this.s)
                    this.inputSDinject('branch2', this.singleHome.branchHtml, this.singleHome.bigBranchHtml, 'singleHome' );
                    
                    break;
                
            case 'guest':
                // Cost here;
                    this.selectedBase = this.guest;
                    this.runTotal = this.guest;
                    $total = this.guest;
                    this.baseTotal = this.guest;
                    this.guest.selected = true;
                    this.inputSDinject('branch2', this.addUnits.branchHtml, this.addUnits.bigBranchHtml, 'addUnits' );
                    
                    break;
                
            case 'rental':
                // Cost here;
                    this.selectedBase = this.rental;
                    this.runTotal = this.rental;
                    $total = this.rental;
                    this.baseTotal = this.rental;
                    this.rental.selected = true;
                    this.inputSDinject('branch2', this.addUnits.branchHtml, this.addUnits.bigBranchHtml, 'addUnits');

                    break;
            
            case 'garage':
                // Cost here;
                    this.selectedBase = this.garage;
                    this.runTotal = this.garage;
                    $total = this.garage;
                    this.baseTotal = this.garage;
                    this.garage.seleced = true;
                    this.inputSDinject('branch2', this.addUnits.branchHtml, this.addUnits.bigBranchHtml, 'addUnits');
                    
                    break;

            case 'office':
                // Cost here;
                    this.selectedBase = this.office;
                    this.runTotal = this.office;
                    $total = this.office;
                    this.baseTotal = this.office;
                    this.office.selected = true;
                    this.inputSDinject('branch2', this.addUnits.branchHtml, this.addUnits.bigBranchHtml, 'addUnits');
                    
                    
                    break;

            case 'poolHouse':
                    // Cost here;
                    this.selectedBase = this.poolHouse;
                    this.runTotal = this.poolHouse;
                    $total = this.poolHouse;
                    this.baseTotal = this.poolHouse;                
                    this.poolHouse.selected = true;
                    this.inputSDinject('branch2', this.addUnits.branchHtml, this.addUnits.bigBranchHtml, 'addUnits');
                    
                    
                    break;

            default: 
                return alert('Invalid Base Home Price or Not Defined');
            }
            
        }else if (answer.dataString == 'custom') {
            
            console.log( answer[answer.dataString][0] );
            console.log( this.custom.vrCustom );
    
            
            if ( answer[answer.dataString][0] == 'base'){
            
                console.log(this.sqFt);
                console.log( this.custom.vrBase(this.sqFt) );
                
                $total += this.custom.vrBase(this.sqFt);
                this.runTotal += this.custom.vrBase(this.sqFt);
                this.baseTotal += this.custom.vrBase(this.sqFt);
                this.custom.vrBase.selected = true; 
        
            } else if ( answer[answer.dataString][0] == 'custom' ){
                console.log( this.custom.vrBase(this.sqFt) );

                $total += this.custom.vrCustom(this.sqFt);
                this.runTotal += this.custom.vrCustom(this.sqFt);
                this.baseTotal += this.custom.vrCustom(this.sqFt);
                this.custom.vrBase.selected = true;
                
                
            }else {
                alert("Houston we have a problem: Invalid input or not defined [ 'custom' dataString: invalid]");
            }
        }else if (answer.dataString == 'printModel') {
            if ( answer[answer.dataString][0] == 'yes'){
            
                $total += this.printModel.yes;
                this.runTotal += this.printModel.yes;
                this.designTotal += this.printModel.yes;
                this.printModel.selected = true;
            
            } 
        }else {
            alert('Houston we have a problem: Invalid input or not defined [dataString: invalid]');
            
        }
        
        console.log('Calculator input: '+answer.dataString);
        
        return $total;
        
    },
    design: function ( printModel ) {
        
        var $total = 0;
        
        return $total;
        
    }, //Old and needs to be deleted upon completion
    conditions: function (answer) {
        
        var $total = 0;
        // Lot Type
        
        //proptery name to check for: sContn, demo
        
        console.log(answer.dataString);

        if (answer.dataString == 'sCondtn' ) { // checks property name
                        
            switch ( answer[answer.dataString][0] ) {
                case 'flat': //input must be a string
                
                    $total += .06 * this.selectedBase;                
                    this.runTotal += .06 * this.selectedBase;
                    this.siteConditionTotal += .06 * this.selectedBase;
                    this.sCondtn.flat.selected = true;
                    
                    break;
                
                case 'gently':
                    
                    $total += .09 * this.selectedBase;
                    this.runTotal += .09 * this.selectedBase;
                    this.siteConditionTotal += .06 * this.selectedBase;
                    this.sCondtn.selected = true;
                    
                    break;
                
                case 'hillside':
                
                    $total += .18 * this.selectedBase;                
                    this.runTotal += .18 * this.selectedBase;
                    this.siteConditionTotal += .18 * this.selectedBase;
                    this.sCondtn.selected = true;
                    
                    break;
                
                default:
                    alert('Houston we have a problem: Invalid input or not defined [site conditions]');
                    break;
                
            }
        }else {
            //Site clearing and demolition of existing structures
            switch (answer[answer.dataString][0]) {
                case 'none': //input must be a string
                    break;
                
                case 'minor':
                
                    $total += this.demo.minor;
                    this.runTotal += this.demo.minor;
                    this.siteConditionTotal += this.demo.minor;
                    this.demo.minor.selected = true;
                    
                    break;
                
                case 'moderate':
                
                    $total += this.demo.moderate;                
                    this.runTotal += this.demo.moderate;
                    this.siteConditionTotal += this.demo.moderate;
                    this.demo.minor.selected = true;
                    
                    break;

                case 'significant':
                
                    $total += this.demo.significant;
                    this.runTotal += this.demo.significant;
                    this.siteConditionTotal += this.demo.significant;
                    this.demo.minor.selected = true;
                    
                    break;
                
                default:
                    return alert('Houston we have a problem: Invalid input or not defined [Demolition]');
            }            
        }
       
        console.log($total);
        
        return $total;
        
    },
    utilities: function (answer) {
        
        var $total = 0;
        
        // Property names to check for: single, addUnits
        
        console.log( answer[answer.dataString][0] );
        
        if (answer.dataString == 'singleHome'){
            switch ( answer[answer.dataString][0] ) {
                case '25': //input must be a string
                
                    $total += this.singleHome.single25;
                    this.runTotal += this.singleHome.single25;
                    this.utilityTotal += this.singleHome.single25;
                    this.singleHome.single25.selected = true;
                    
                    break;
                
                case '50':
                    
                    $total += this.singleHome.single50;                
                    this.runTotal += this.singleHome.single50;
                    this.utilityTotal += this.singleHome.single50;
                    this.singleHome.single50.selected = true;
                    
                    break;
                
                case '100':

                    
                    $total += this.singleHome.single100;                
                    this.runTotal += this.singleHome.single100;
                    this.utilityTotal += this.singleHome.single100;  
                    this.singleHome.single100.selected = true;
                    
                    break;
                
                default:
                    alert('Houston we have a problem: Invalid input or not defined [single family homes]');
                    break;
                
            }
        }else {
            switch ( answer[answer.dataString][0] ) {
                case '25': //input must be a string
                
                    $total += this.addUnits.secondUnit25;
                    this.runTotal += this.addUnits.secondUnit25;
                    this.utilityTotal += this.addUnits.secondUnit25;  
                    this.addUnits.secondUnit25.selected = true;
                    
                    break;
                
                case '50':
                
                    $total += this.addUnits.secondUnit50;                
                    this.runTotal += this.addUnits.secondUnit50;
                    this.utilityTotal += this.addUnits.secondUnit50; 
                    this.addUnits.secondUnit50.selected = true;
                    
                    break;
                    
                case '100':
                    
                    console.log('100 club'+ this.singleHome.single100);

                    $total += this.addUnits.secondUnit100;
                    this.runTotal += this.addUnits.secondUnit100;
                    this.utilityTotal += this.addUnits.secondUnit100; 
                    this.addUnits.secondUnit100.selected = true;
                    
                    break;
                
                default:
                    alert('Houston we have a problem: Invalid input or not defined [additional units]');
                    break;
            }            
        }
        
        
        return $total;
        
    },
    upgrades: function (answer) {
        
        // case options: basement, app, bath, window, painting, floor, roof, wains, trim, solar, chargeStn
        var $total = 0;
        
        console.log('Inside Upgrades with branch at: ' + answer.dataString);
        console.log('Inside Upgrades with branch answer at: ' + answer[answer.dataString][0]);
        
        //string inputs
        switch (answer.dataString) { // checks property name
            case 'basement':
                 if ( answer[answer.dataString][0] == 'finished' ){
                     $total += this.basement.finished;
                     this.runTotal += this.basement.finished;
                     this.buildingUpgradeTotal += this.basement.finished;
                     this.basement.finished.selected = true;
             
                }else if ( answer[answer.dataString][0]  == 'unfinished' ){
                    $total += this.basement.unfinished;
                     this.runTotal += this.basement.unfinished;
                     this.buildingUpgradeTotal += this.basement.unfinished;
                    this.basement.unfinished.selected = true;
            
                }else
                    alert('Houston we have a problem: Invalid input or not defined [basement]');
        
                break;
            
            case 'app':
                 switch ( answer[answer.dataString][0] ){
                     case 'standard':
            
                         $total += this.app.standard;
                         this.runTotal += this.app.standard;
                         this.buildingUpgradeTotal += this.app.standard;
                         this.app.standard.selected = true;
                         
                         break;
            
                     case 'upgraded':
                
                         $total += this.app.upgraded;
                         this.runTotal += this.app.upgraded;
                         this.buildingUpgradeTotal += this.app.upgraded;
                         this.app.upgraded.selected = true;
                         
                         break;
                
                     case 'professional':
                
                         $total += this.app.professional;
                         this.runTotal += this.app.professional;
                         this.buildingUpgradeTotal += this.app.professional;
                         this.app.professional.selected = true;
                         
                         break;
            
                     default: 
                         alert('Houston we have a problem: Invalid input or not defined [appliance]');
                         break;
                         
                 }
                break;
                
            case 'bath':
                     if ( answer[answer.dataString][0]  == 'standard' ) {
                         
                         console.log('standard: '+answer[answer.dataString][0] );
                         
                         $total += this.bath.standard;
                         this.runTotal += this.bath.standard;
                         this.buildingUpgradeTotal += this.bath.standard;
                         this.bath.standard.selected = true;
              
                     }else if ( answer[answer.dataString][0]  == 'premium' ){

                         console.log('premium: '+answer[answer.dataString][0] );
                         
                         $total += this.bath.premium;
                         this.runTotal += this.bath.premium;
                         this.buildingUpgradeTotal += this.bath.premium;     
                         this.bath.premium.selected = true;
            
                    }else{
                        alert('Houston we have a problem: Invalid input or not defined [bathroom]');         
                        
                    } 
                    break;
                
            case 'window':
                    switch ( answer[answer.dataString][0]  ){
                
                        case 'standard':
            
                            $total += this.window.standard;
                            this.runTotal += this.window.standard;
                            this.buildingUpgradeTotal += this.window.standard;
                            this.window.standard.selected = true;
                
                        break;
            
                        case 'upgraded':
                
                            $total += this.window.upgraded;
                            this.runTotal += this.window.upgraded;                
                            this.buildingUpgradeTotal += this.window.upgraded;
                            this.window.upgraded.selected = true;
                            
                            break;
                
                        case 'professional':
                
                            $total += this.window.professional;
                            this.runTotal += this.window.professional;
                            this.buildingUpgradeTotal += this.window.professional;
                            this.window.professional.selected = true;
                            
                            break;
            
                        default: 
                            alert('Houston we have a problem: Invalid input or not defined [appliance]');
                            break;

                    }
                    break;
                
            case 'painting':
                
                    if (answer[answer.dataString][0] == 'add'){
                        
                        $total += this.painting.paintadd();
                        this.runTotal += this.painting.paintadd();
                        this.buildingUpgradeTotal += this.painting.paintadd();
                        this.painting.selected = true;
                        
                    } 
                    break;
                
            case 'floor':
                switch (answer[answer.dataString][0] ) {
                      case 'polished': //input must be a string
                 
                          $total += this.floor.polished;
                          this.runTotal += this.floor.polished;
                          this.buildingUpgradeTotal += this.floor.polished; 
                          this.floor.selected['polished'] = 'Yes' ;
                            
                            
                          break;
                
                      case 'colored':
                
                          $total += this.floor.colored;                
                          this.runTotal += this.floor.colored;
                          this.buildingUpgradeTotal += this.floor.colored;
                          this.floor.selected['colored'] = 'Yes';
                        
                          break;
                
                      case 'carpet':
            
                          $total += this.floor.carpet;                
                          this.runTotal += this.floor.carpet;
                          this.buildingUpgradeTotal += this.floor.carpet;
                        
                          this.floor.selected['carpet'] = 'Yes';
                        
                          break;
                 
                      case 'tile': //input must be a string
                 
                          $total += this.floor.tile;
                          this.runTotal += this.floor.tile;
                          this.buildingUpgradeTotal += this.floor.tile; 
                        
                          this.floor.selected['tile'] = 'Yes';
                        
                          break;
                
                    case 'laminated': //input must be a string

                          $total += this.floor.laminated;                
                          this.runTotal += this.floor.laminated;
                          this.buildingUpgradeTotal += this.floor.laminated; 
                          this.floor.selected['laminated'] = 'Yes';
                          break;
                
                      case 'hardwood':
            
                          $total += this.floor.hardwood;                
                          this.runTotal += this.floor.hardwood;
                          this.buildingUpgradeTotal += this.floor.hardwood; 
                          this.floor.selected['hardwood'] = 'Yes';
                        
                          break;    
                 
                      default:
                          alert('Houston we have a problem: Invalid input or not defined [floors]');
                          break;
                
                  }
                //
                break;
                
            case 'roof':
                switch ( answer[answer.dataString][0]  ) {
                    case 'stamped': //input must be a string
                   
                        $total += this.roof.stamped;
                        this.runTotal += this.roof.stamped;
                        this.buildingUpgradeTotal += this.roof.stamped;                                 
                        break;
                
                    case 'spanish':
                
                        $total += this.roof.spanish;                
                        this.runTotal += this.roof.spanish;
                        this.buildingUpgradeTotal += this.roof.spanish;                 
                
                        break;
                
                    case 'wood':
            
                        $total += this.roof.wood;                
                        this.runTotal += this.roof.wood;
                        this.buildingUpgradeTotal += this.roof.wood;                 

                        break;
                 
                    case 'standing': //input must be a string
                 
                        $total += this.roof.standing;
                        this.runTotal += this.roof.standing;
                        this.buildingUpgradeTotal += this.roof.standing;
                        break;
                
            
                    default:
                        alert('Houston we have a problem: Invalid input or not defined [roof]');
                        break;
                
                }
                //
                break;
                
            case 'wains':
                //wainscoat
                if ( answer[answer.dataString][0] == 'yes' ){
            
                    $total += this.wains.yes;
                    this.runTotal += this.wains.yes;
                    this.buildingUpgradeTotal += this.wains.yes;
            
                }
                break;
                
            case 'trim':
                 //trim upgrade
                if ( answer[answer.dataString][0] == 'yes' ) {
            
                    $total += this.trim.yes;
                    this.runTotal += this.trim.yes;
                    this.buildingUpgradeTotal += this.trim.yes;
            
            
                }
                break;
                
            case 'solar':
                if ( answer[answer.dataString][0] == 'yes' ) {
            
                    $total += this.solar.yes;
                    this.runTotal += this.solar.yes;            
                    this.buildingUpgradeTotal += this.solar.yes;
            
                }
                break;
            
            case 'chargeStn':
                if ( answer[answer.dataString][0] == 'yes' ){
            
                    $total += this.chargeStn.yes;
                    this.runTotal += this.chargeStn.yes;
                    this.buildingUpgradeTotal += this.chargeStn.yes;

                }
                break;
            
            default:
                alert('Houston we have a problem: Invalid input or not defined [answer]');
                break;
        }
        
        return $total;
        
    },
    amenities: function (answer) {
        
         
        var $total = 0;
        // case options: dPatio, overH, pool, bbq, land

        switch ( answer.dataString ){ 
            case 'dPatio':
                if ( answer[answer.dataString][0] == 'yes' ){
            
                    $total += this.dPatio.yes;
                    this.runTotal += this.dPatio.yes;
                    this.amenitiesTotal += this.dPatio.yes;
            
                }                
                break;
            
            case 'overH':
                //trim upgrade
                if (answer[answer.dataString][0] == 'yes' ) {
            
                    $total += this.overH.yes;
                    this.runTotal += this.overH.yes;
                    this.amenitiesTotal += this.overH.yes;
            
                }
                break;
            
            case 'pool':
                
                if (answer[answer.dataString][0] == 'yes' ) {
            
                    $total += this.pool.yes;
                    this.runTotal += this.pool.yes;      
                    this.amenitiesTotal += this.pool.yes;
            
                }
                break;
                
            case 'bbq':
                if (answer[answer.dataString][0] == 'yes' ){
            
                    $total += this.bbq.yes;
                    this.runTotal += this.bbq.yes;
                    this.amenitiesTotal += this.bbq.yes;
                }
                break;
                
            case 'land':
                if (answer[answer.dataString][0] == 'yes' ){
            
                    $total += this.bbq.yes;
                    this.runTotal += this.bbq.yes;
                    this.amenitiesTotal += this.bbq.yes;
            
                }
                break;
                
            default: 
                alert('Houston we have a problem: Invalid input or not defined [property name is undefined]')
                break;
            
        } 

        return $total;
        
    },
    sumBuildCost: function () {

          var    sumTotalBuildCost = this.baseTotal + this.siteConditionTotal + this.buildingUpgradeTotal;

          document.getElementById('base-cost').innerHTML = '$ '+ this.baseTotal.toLocaleString();                
          document.getElementById('conditions-cost').innerHTML = '$ '+ this.siteConditionTotal.toLocaleString();        
          document.getElementById('upgrades-cost').innerHTML = '$ '+ this.buildingUpgradeTotal.toLocaleString();
          document.getElementById('total-building').innerHTML = '$ '+ sumTotalBuildCost.toLocaleString(); //sub-total

          document.getElementById('base-cost1').innerHTML = '$ '+ this.baseTotal.toLocaleString();                
          document.getElementById('conditions-cost1').innerHTML = '$ '+ this.siteConditionTotal.toLocaleString();      
          document.getElementById('upgrades-cost1').innerHTML = '$ '+ this.buildingUpgradeTotal.toLocaleString();
          document.getElementById('total-building1').innerHTML = '$ '+ sumTotalBuildCost.toLocaleString(); //sub-total

        
          return  sumTotalBuildCost;

        
    },
    sumTotalProject: function () {
        
        var projectTotal = this.sumBuildCost() + this.designTotal + this.utilityTotal + this.amenitiesTotal;    
        
        document.getElementById('plans-cost').innerHTML = '$ '+ this.designTotal.toLocaleString();                
        document.getElementById('utility-cost').innerHTML = '$ '+ this.utilityTotal.toLocaleString();        
        document.getElementById('amenities-cost').innerHTML = '$ '+ this.amenitiesTotal.toLocaleString();
        document.getElementById('total-project').innerHTML = '$ '+projectTotal.toLocaleString();
        document.getElementById('project-total').innerHTML = '$ '+projectTotal.toLocaleString();

        document.getElementById('plans-cost1').innerHTML = '$ '+ this.designTotal.toLocaleString();                
        document.getElementById('utility-cost1').innerHTML = '$ '+ this.utilityTotal.toLocaleString();        
        document.getElementById('amenities-cost1').innerHTML = '$ '+ this.amenitiesTotal.toLocaleString();

        return projectTotal;
            
    },
    inputReceiver: function ( quesObjt ){
        
        console.log(quesObjt);
        
        switch ( quesObjt.branch ){
                
            case 'big-branch0':
                this.base(quesObjt);
                this.sumTotalProject();
                break;
         
            case 'baseTotal' ://engineering/design    
                
                this.base(quesObjt);
                this.sumTotalProject();
                break;
                
            case 'siteConditionTotal'://conditions
                
                this.conditions(quesObjt);
                this.sumTotalProject();                
                break;
            
            case 'utilityTotal'://utilities
                
                this.utilities(quesObjt);                
                this.sumTotalProject(); 
                break;
                                
            case 'buildingUpgradeTotal': //upgrades
                
                this.upgrades(quesObjt);
                this.sumTotalProject();
                break;
            
            case 'amenitiesTotal': //amenities
                
                this.amenities(quesObjt);
                this.sumTotalProject();
                break;
                
            case 'getValue': // User edits
                
                console.log(  quesObjt[quesObjt.branch]  );
                
                console.log(  quesObjt[quesObjt[quesObjt.branch]]  );
                console.log(this[quesObjt.sumTotal]);
             
                this[quesObjt.sumTotal] -= this[ quesObjt[quesObjt.branch] ].getValue( quesObjt[quesObjt[quesObjt.branch]], quesObjt, this );    
                
                this.sumTotalProject();
                
                break;
                
            default:
                alert('Houston we have a problem: Invalid input or not defined [inputReceiver: userInput]');
                break;
        }
        
    },
    dataSender: function ( quesObjt ) {
        
         $('form').submit(function(){

            console.log("successfully in submit area 51. Proceed with caution.");

            var postData = $(this).serialize();
    
             console.log(postData);
             
             $.ajax({
                 type: 'POST',
                 data: postData,
                 url: 'http://brandedsolid.com/sollars-app/sender.php',
                 success: function(data){
                     console.log(postData);
                     
                 },
                 error: function(){
                     console.log(postData);
                 }
             });
             
             $('button#invisible').trigger('click');
             $('form').each(function() {
                this.reset(); 
             });
             
             return false;
             
         });
        
        
    }
}

var clonedSOLID = (function(){ 
  return function (obj) { Clone.prototype=obj; return new Clone() };
  function Clone(){}
}());


