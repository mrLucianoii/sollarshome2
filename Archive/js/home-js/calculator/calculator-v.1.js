


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
    buildg0: 1000, //single
    buildg1: 2000, //guest
    buildg2: 3000, //rental
    buildg3: 4000, //garage 
    buildg4: 5000, //office
    buildg5: 6000, //pool
    
    sqFt: 1,
    vrBase: 7000 + (6 * this.sqFt), // Don't forget 
    vrCustom: 10000 + (9 * this.sqFt),
    surveyor: 3500,
    geoTech: 5500,
    civilEng: 6000,
    print3D: 300,
    flatPerc: .06,
    slopPerc: .09,
    hillPerc: .18,
    
    //+++Constant Variables+++
    
    //Demolition
    demoMinor: 2500,
    demoModerate: 5500,
    demoSignificant: 12000,
    
    //utilities
    //single family home
    singleHome25: 12000,
    singleHome50: 16000,
    singleHome100: 29000,
    
    //second units
    secondUnit25: 6000,
    secondUnit50: 9500,
    secondUnit100: 17000,
    
    //basement upgrades
    upgrdBaseUnfinished: 50,
    upgrdBaseFinished: 50,
    
    //appliances upgrades
    upgrdAppStandard: 50,
    upgrdAppUpgrade: 100,
    upgrdAppPro: 150,
    
    //bath upgrades
    upgrdBath: 50,
    upgrdBathPrem: 100,
    
    //windows and doors
    windowStandard: 50,
    windowUpgrade: 100,
    windowPrem: 150,

    
    //paint upgrades
    upgrd2Paint: function () { return 4 * this.sqFt },
    
    //floor upgrades
    upgrdFloorPolish: 50,
    upgrdFloorColor: 50,
    upgrdFloorCarpet: 50,
    upgrdFloorTile: 50,
    upgrdFloorLam: 50,
    upgrdFloorWood: 50,
    
    //roof upgrades
    upgrdRoofConcrt: 50,
    upgrdRoofSpansh: 100,
    upgrdRoofShake: 150,
    upgrdRoofMetal: 200,
    
    //wainscoating, trim, solar, and electric charging station upgrades
    upgrdWains: 1000,
    upgrdTrim: 1000,
    upgrdSolar: 1000,
    upgrdChargeStn: 500,
    
    //site amenities
    addDrivePatio: 1000,
    addOverhang: 500,
    addPool: 600,
    addBbqArea: 300,
    addLandscape: 200,
    
    base: function(answer){ 
        
        
        var $total = 0;
        //proptery name to check for: sBase, printModel
        // Expression parameter will be a string
        if (answer.dataString == 'sBase'){
            switch (answer.currentModel) { 
                case 'single':
                
                    this.selectedBase = this.buildg0;
                    this.runTotal = this.buildg0;
                    $total = this.buildg0;
                    this.baseTotal = this.buildg0;
                
                    break;
                
            case 'guest':
                // Cost here;
                    this.selectedBase = this.buildg1;
                    this.runTotal = this.buildg1;
                    $total = this.buildg1;
                    this.baseTotal = this.buildg1;

                
                    break;
                
            case 'rental':
                // Cost here;
                    this.selectedBase = this.buildg2;
                    this.runTotal = this.buildg2;
                    $total = this.buildg2;
                    this.baseTotal = this.buildg2;
                    
                
                    break;
            
            case 'garage':
                // Cost here;
                    this.selectedBase = this.buildg3;
                    this.runTotal = this.buildg3;
                    $total = this.buildg3;
                    this.baseTotal = this.buildg3;
               
                    break;

            case 'office':
                // Cost here;
                    this.selectedBase = this.buildg4;
                    this.runTotal = this.buildg4;
                    $total = this.buildg4;
                    this.baseTotal = this.buildg4;
                
                    break;

            case 'pool':
                    // Cost here;
                    this.selectedBase = this.buildg5;
                    this.runTotal = this.buildg5;
                    $total = this.buildg5;
                    this.baseTotal = this.buildg5;                
                
                    break;

            default: 
                    
                return alert('Invalid Base Home Price or Not Defined');
                    
            }
            
        }else if (answer.dataString == 'printModel') {
            if ( answer[answer.dataString][0] == 'yes'){
            
                $total += this.print3D;
                this.runTotal += this.print3D;
                this.designTotal += this.print3D;
            
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
                case 'flat:': //input must be a string
                
                    $total += .06 * this.selectedBase;                
                    this.runTotal += .06 * this.selectedBase;
                    this.siteConditionTotal += .06 * this.selectedBase;
                    break;
                
                case 'gently':
                    
                    $total += .09 * this.selectedBase;
                    this.runTotal += .09 * this.selectedBase;
                    this.siteConditionTotal += .06 * this.selectedBase;
                    break;
                
                case 'hillside:':
                
                    $total += .18 * this.selectedBase;                
                    this.runTotal += .18 * this.selectedBase;
                    this.siteConditionTotal += .18 * this.selectedBase;
                
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
                
                case 'minor:':
                
                    $total += this.demo.minor;
                    this.runTotal += this.demo.minor;
                    this.siteConditionTotal += this.minor;
                
                    break;
                
                case 'moderate:':
                
                    $total += this.demo.moderate;                
                    this.runTotal += this.demo.moderate;
                    this.siteConditionTotal += this.demo.moderate;
                    break;

                case 'significant:':
                
                    $total += this.demo.significant;
                    this.runTotal += this.demo.significant;
                    this.siteConditionTotal += this.demo.significant;
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
                    
                    break;
                
                case '50':
                    
                    $total += this.singleHome.single50;                
                    this.runTotal += this.singleHome.single50;
                    this.utilityTotal += this.singleHome.single50;
                    break;
                
                case '100':
                    
                    conosle.log('100 club'+ this.singleHome.single100)
                    
                    $total += this.singleHome.single100;                
                    this.runTotal += this.singleHome.single100;
                    this.utilityTotal += this.singleHome.single100;  
                    
                    break;
                
                default:
                    alert('Houston we have a problem: Invalid input or not defined [single family homes]');
                    break;
                
            }
        }else {
            switch ( answer[answer.dataString][0] ) {
                case '25': //input must be a string
                
                    $total += this.secondUnit25;
                    this.runTotal += this.secondUnit25;
                    this.utilityTotal += this.secondUnit25;                
                    break;
                
                case '50':
                
                    $total += this.secondUnit50;                
                    this.runTotal += this.secondUnit50;
                    this.utilityTotal += this.secondUnit50;                                
                    break;
                    
                case '100':
                    
                    $total += this.secondUnit100;
                    this.runTotal += this.secondUnit100;
                    this.utilityTotal += this.secondUnit100;                                
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
        console.log('Inside Upgrades with branch answer at: ' + answer[answer.dataString]);
        
        //string inputs
        switch (answer.dataString) { // checks property name
            case 'basement':
                 if ( answer[answer.dataString][0] == 'finished' ){
                     $total += this.basement.finished;
                    this.runTotal += this.basement.finished;
                    this.buildingUpgradeTotal += this.basement.finished;
             
                }else if ( answer[answer.dataString][0]  == 'unfinished' ){
                    $total += this.basement.unfinished;
                     this.runTotal += this.basement.unfinished;
                     this.buildingUpgradeTotal += this.basement.unfinished;
            
                }else
                    alert('Houston we have a problem: Invalid input or not defined [basement]');
        
                break;
            
            case 'app':
                 switch ( answer[answer.dataString][0] ){
                     case 'standard':
            
                         $total += this.app.standard;
                         this.runTotal += this.app.standard;
                         this.buildingUpgradeTotal += this.app.standard;
                         break;
            
                     case 'upgraded':
                
                         $total += this.app.upgrade;
                         this.runTotal += this.app.upgrade;
                         this.buildingUpgradeTotal += this.app.upgrade;                
                         break;
                
                     case 'professional':
                
                         $total += this.app.professional;
                         this.runTotal += this.app.professional;
                         this.buildingUpgradeTotal += this.app.professional;
                         break;
            
                     default: 
                         alert('Houston we have a problem: Invalid input or not defined [appliance]');
                         break;
                         
                 }
                break;
                
            case 'bath':
                     if ( answer[answer.dataString][0]  == 'standard' ) {
                         $total += this.bath.standard;
                         this.runTotal += this.bath.standard;
                         this.buildingUpgradeTotal += this.bath.standard;                
              
                     }else if ( answer[answer.dataString][0]  == 'premium' ){
                         $total += this.bath.premium;
                         this.runTotal += this.bath.premium;
                         this.buildingUpgradeTotal += this.bath.premium;                
            
                    }else 
                        alert('Houston we have a problem: Invalid input or not defined [bathroom]');         
                    break;
                
            case 'window':
                    switch ( answer[answer.dataString][0]  ){
                
                        case 'standard':
            
                            $total += this.window.standard;
                            this.runTotal += this.window.standard;
                            this.buildingUpgradeTotal += this.window.standard;
                
                        break;
            
                        case 'upgraded':
                
                            $total += this.window.upgraded;
                            this.runTotal += this.window.upgraded;                
                            this.buildingUpgradeTotal += this.window.upgraded;
                            break;
                
                        case 'professional':
                
                            $total += this.window.professional;
                            this.runTotal += this.window.professional;
                            this.buildingUpgradeTotal += this.window.professional;
                            break;
            
                        default: 
                            alert('Houston we have a problem: Invalid input or not defined [appliance]');
                            break;

                    }
                    break;
                
            case 'painting':
                
                    if (answer[answer.dataString][0] == 'add'){
                        
                        $total += this.painting.paintadd();
                        this.runTotal += this.upgrd2Paint();
                        this.buildingUpgradeTotal += this.upgrd2Paint();
                        
                    } 
                    break;
                
            case 'floor':
                switch (answer[answer.dataString][0] ) {
                      case 'polished': //input must be a string
                 
                          $total += this.floor.polished;
                          this.runTotal += this.floor.polished;
                          this.buildingUpgradeTotal += this.floor.polished;                 
                          break;
                
                      case 'colored':
                
                          $total += this.floor.colored;                
                          this.runTotal += this.floor.colored;
                          this.buildingUpgradeTotal += this.floor.colored;                 
                          break;
                
                      case 'carpet':
            
                          $total += this.floor.carpet;                
                          this.runTotal += this.floor.carpet;
                          this.buildingUpgradeTotal += this.floor.carpet;                 
                          break;
                 
                      case 'tile': //input must be a string
                 
                          $total += this.floor.tile;
                          this.runTotal += this.floor.tile;
                          this.buildingUpgradeTotal += this.floor.tile;                 
                          break;
                
                    case 'laminated': //input must be a string

                          $total += this.floor.laminated;                
                          this.runTotal += this.floor.laminated;
                          this.buildingUpgradeTotal += this.floor.laminated;                                  
                          break;
                
                      case 'hardwood':
            
                          $total += this.floor.hardwood;                
                          this.runTotal += this.floor.hardwood;
                          this.buildingUpgradeTotal += this.floor.hardwood;                                  
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
                        this.buildingUpgradeTotald += this.roof.spanish;                 
                
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
            
                    $total += this.chargStn.yes;
                    this.runTotal += this.chargStn.yes;
                    this.buildingUpgradeTotal += this.chargStn.yes;

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
        
            console.log(quesObjt.branch);
        
        switch ( quesObjt.branch ){
            case 'big-branch0'://engineering/design
            case 'branch0':
                
                this.base(quesObjt);
                this.sumTotalProject();
                break;
                
            case 'big-branch1'://conditions
            case 'branch1': 
                
                this.conditions(quesObjt);
                this.sumTotalProject();                
                break;
            
            case 'big-branch2'://utilities
            case 'branch2':
                
                this.utilities(quesObjt);                
                this.sumTotalProject(); 
                break;
                                
            case 'big-branch3': //upgrades
            case 'branch3':
                
                this.upgrades(quesObjt);
                this.sumTotalProject();
                break;
            
            case 'big-branch4': //amenities
            case 'branch4':
                
                this.amenities(quesObjt);
                this.sumTotalProject();
                break;
                
            case 'subtract': // User edits
                
                
                break;
                
            default:
                alert('Houston we have a problem: Invalid input or not defined [inputReceiver: userInput]');
                break;
        }
        
    }
}

var clonedSOLID = (function(){ 
  return function (obj) { Clone.prototype=obj; return new Clone() };
  function Clone(){}
}());


