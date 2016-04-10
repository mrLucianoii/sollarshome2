


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
    
    sqFt: 0,
    vrBase: 7000 + (6 * this.sqFt), // Don't forget 
    vrCustom: 10000 + (9 * this.sqFt),
    surveyor: 3500,
    geoTech: 5500,
    civilEng: 6000,
    print3D: 0,
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
    upgrdBaseUnfinished: 0,
    upgrdBaseFinished: 0,
    
    //appliances upgrades
    upgrdAppStandard: 0,
    upgrdAppUpgrade: 0,
    upgrdAppPro: 0,
    
    //bath upgrades
    upgrdBath: 0,
    upgrdBathPrem: 0,
    
    //windows and doors
    windowStandard: 0,
    windowUpgrade: 0,
    windowPrem: 0,

    
    //paint upgrades
    upgrd2Paint: 4 * this.sqFt,
    
    //floor upgrades
    upgrdFloorPolish: 0,
    upgrdFloorColor: 0,
    upgrdFloorCarpet: 0,
    upgrdFloorTile: 0,
    upgrdFloorLam: 0,
    upgrdFloorWood: 0,
    
    //roof upgrades
    upgrdRoofConcrt: 0,
    upgrdRoofSpansh: 0,
    upgrdRoofShake: 0,
    upgrdRoofMetal: 0,
    
    //wainscoating, trim, solar, and electric charging station upgrades
    upgrdWains: 0,
    upgrdTrim: 0,
    upgrdSolar: 0,
    upgrdChargeStn: 0,
    
    //site amenities
    addDrivePatio: 0,
    addOverhang: 0,
    addPool: 0,
    addBbqArea: 0,
    addLandscape: 0,
    
    base: function(sBase){ 
        
        var $total = 0;
        
        // Expression parameter will be a string
        switch (sBase) { 
            case 'single':
                
                selectedBase = this.buildg0;
                this.runTotal = this.buildg0;
                $total = this.buildg0;
                this.baseTotal = this.buildg0;
                
                break;
                
            case 'guest':
                // Cost here;
                selectedBase = this.buildg1;
                this.runTotal = this.buildg1;
                $total = this.buildg1;
                this.baseTotal = this.buildg1;

                
                break;
                
            case 'rental':
                // Cost here;
                selectedBase = this.buildg2;
                this.runTotal = this.buildg2;
                $total = this.buildg2;
                this.baseTotal = this.buildg2;

                
                break;
            
            case 'garage':
                // Cost here;
                selectedBase = this.buildg3;
                this.runTotal = this.buildg3;
                $total = this.buildg3;
                this.baseTotal = this.buildg3;
            
                
                break;

            case 'office':
                // Cost here;
                selectedBase = this.buildg4;
                this.runTotal = this.buildg4;
                $total = this.buildg4;
                this.baseTotal = this.buildg4;
                
                
                break;

            case 'pool':
                // Cost here;
                selectedBase = this.buildg5;
                this.runTotal = this.buildg5;
                $total = this.buildg5;
                this.baseTotal = this.buildg5;                
                
                break;

            default: 
                return alert('Invalid Base Home Price or Not Defined');
        }
        
        return $total;
        
    },
    design: function (sPlans, surv, geo, civil, printModel ) {
        
        var $total = 0;
        
        if ( sPlans == 'base' ){
            
            $total += this.vrBase;
            this.runTotal += this.vrBase;
            this.designTotal += this.vrBase;
            
        }
 
        else {
            
            $total += this.vrCustom;
            this.runTotal += this.vrCustom;  
            this.designTotal += this.vrCustom;

        }
            
        
        if (surv){
    
            $total += this.surveyor;
            this.runTotal += this.surveyor;
            this.designTotal += this.surveyor;
            
    
        }
            
        if (geo) {
         
            $total += this.geoTech;
            this.runTotal += this.geoTech;
            this.designTotal += this.geoTech;
            
       
        }
        
        if (civil){
            
            $total += this.civilEng;
            this.runTotal += this.civilEng;
            this.designTotal += this.civilEng;

            
        } 
        
        if (printModel){
            
            $total += this.print3D;
            this.runTotal += this.print3D;
            this.designTotal += this.print3D;
            
        }
            
        
        return $total;
        
    },
    conditions: function (sContn, demo) {
        
        var $total = 0;
        // Lot Type
        switch (sCondtn) {
            case 'flat': //input must be a string
                $total += .06 * this.selectedBase;                
                this.runTotal += .06 * this.selectedBase;
                this.siteConditionTotal += .06 * this.selectedBase;
                break;
                
            case 'slop':
                
                $total += .09 * this.selectedBase;
                this.runTotal += .09 * this.selectedBase;
                this.siteConditionTotal += .06 * this.selectedBase;

                
                break;
                
            case 'hill':
                
                $total += .18 * this.selectedBase;                
                this.runTotal += .18 * this.selectedBase;
                this.siteConditionTotal += .18 * this.selectedBase;
                
                break;
                
            default:
                alert('Houston we have a problem: Invalid input or not defined [site conditions]');
                break;
                
         }

        //Site clearing and demolition of existing structures
        switch (demo) {
            case 'none': //input must be a string
                break;
                
            case 'minor':
                
                $total += this.demoMinor;
                this.runTotal += this.demoMinor;
                this.siteConditionTotal += this.demoMinor;
                
                break;
                
            case 'moderate':
                
                $total += this.demoModerate;                
                this.runTotal += this.demoModerate;
                this.siteConditionTotal += this.demoModerate;
                break;

            case 'significant':
                
                $total += this.demoSignificant;
                this.runTotal += this.demoSignificant;
                this.siteConditionTotal += this.demoSignificant;
                break;
                
            default:
                return alert('Houston we have a problem: Invalid input or not defined [Demolition]');
         }
        
        
        return $total;
        
    },
    utilities: function (single, addUnits) {
        
        var $total = 0;
        
        switch (single) {
            case 'single25': //input must be a string
                
                $total += this.singleHome25;
                this.runTotal += this.singleHome25;
                this.utilityTotal += this.singleHome25;
                
                break;
                
            case 'single50':
                
                $total += this.singleHome50;                
                this.runTotal += this.singleHome50;
                this.utilityTotal += this.singleHome50;
                break;
                
            case 'single100':
            
                $total += this.singleHome100;                
                this.runTotal += this.singleHome100;
                this.utilityTotal += this.singleHome100;                
                break;
                
            default:
                alert('Houston we have a problem: Invalid input or not defined [single family homes]');
                break;
                
                
         }
        
        switch (addUnits) {
            case 'unit25': //input must be a string
                
                $total += this.secondUnit25;
                this.runTotal += this.secondUnit25;
                this.utilityTotal += this.secondUnit25;                
                break;
                
            case 'unit50':
                
                $total += this.secondUnit50;                
                this.runTotal += this.secondUnit50;
                this.utilityTotal += this.secondUnit50;                                
                break;
                
            case 'unit100':
                
                $total += this.secondUnit100;
                this.runTotal += this.secondUnit100;
                this.utilityTotal += this.secondUnit100;                                
                break;
                
            default:
                alert('Houston we have a problem: Invalid input or not defined [additional units]');
                break;
         }
        
        return $total;
        
    },
    upgrades: function (basement, app, bath, window, painting, floor, roof, wains, trim, solar, chargeStn) {
        
        var $total = 0;
        
        //string inputs
        
        if ( basement != 'finished' ){
            $total += this.upgrdBaseUnfinished;
            this.runTotal += this.upgrdBaseUnfinished;
            this.buildingUpgradeTotald += this.upgrdBaseUnfinished;
            
        }else if ( basement == 'unfinished' ){
            $total += this.upgrdBaseFinished;
            this.runTotal += this.upgrdBaseFinished;
            this.buildingUpgradeTotald += this.upgrdBaseFinished;
            
            
        }else
            alert('Houston we have a problem: Invalid input or not defined [basement]');
            
        
        switch (app){
            case 'standard':
            
                $total += this.upgrdAppStandard;
                this.runTotal += this.upgrdAppStandard;
                this.buildingUpgradeTotald += this.upgrdAppStandard;
                break;
            
            case 'upgrade':
                
                $total += this.upgrdAppUpgrade;
                this.runTotal += this.upgrdAppUpgrade;
                this.buildingUpgradeTotald += this.upgrdAppStandard;                
                break;
                
            case 'pro':
                
                $total += this.upgrdAppPro;
                this.runTotal += this.upgrdAppPro;
                this.buildingUpgradeTotald += this.upgrdAppPro;
                break;
            
            default: 
                alert('Houston we have a problem: Invalid input or not defined [appliance]');
                break;

        }
        
        if ( bath != 'bath-reg' ) {
            $total += this.upgrdBath;
            this.runTotal += this.upgrdBath;
            this.buildingUpgradeTotald += this.upgrdBath;                
            
            
        }else if ( bath == 'premium' ){
            $total += this.upgrdBathPrem;
            this.runTotal += this.upgrdBathPrem;
            this.buildingUpgradeTotald += this.upgrdBathPrem;                

            
        }else 
            alert('Houston we have a problem: Invalid input or not defined [bathroom]');

         
        switch ( window ){
                
            case 'windStandard':
            
                $total += this.windowStandard;
                this.runTotal += this.windowStandard;
                this.buildingUpgradeTotald += this.windowStandard;
                
                break;
            
            case 'windUpgrade':
                
                $total += this.windowUpgrade;
                this.runTotal += this.windowUpgrade;                
                this.buildingUpgradeTotald += this.windowUpgrade;
                break;
                
            case 'windPro':
                
                $total += this.windowPrem;
                this.runTotal += this.windowPrem;
                this.buildingUpgradeTotald += this.windowPrem;
                break;
            
            default: 
                alert('Houston we have a problem: Invalid input or not defined [appliance]');
                break;

        }
  
        if (painting){
             
            $total += this.upgrd2Paint;
            this.runTotal += this.upgrd2Paint;
            this.buildingUpgradeTotald += this.upgrd2Paint;
   
        }
        
         switch (floor) {
            case 'polish': //input must be a string
                 
                $total += this.upgrdFloorPolish;
                this.runTotal += this.upgrdFloorPolish;
                this.buildingUpgradeTotald += this.upgrdFloorPolish;                 
                break;
                
            case 'color':
                
                $total += this.upgrdFloorColor;                
                this.runTotal += this.upgrdFloorColor;
                this.buildingUpgradeTotald += this.upgrdFloorColor;                 
                break;
                
            case 'carpet':
            
                $total += this.upgrdFloorCarpet;                
                this.runTotal += this.upgrdFloorCarpet;
                this.buildingUpgradeTotald += this.upgrdFloorCarpet;                 
                break;
                 
            case 'tile': //input must be a string
                 
                $total += this.upgrdFloorTile;
                this.runTotal += this.upgrdFloorTile;
                this.buildingUpgradeTotald += this.upgrdFloorTile;                 
                break;
                
            case 'lam':
                
                $total += this.upgrdFloorLam;                
                this.runTotal += this.upgrdFloorLam;
                this.buildingUpgradeTotald += this.upgrdFloorLam;                                  
                break;
                
            case 'wood':
            
                $total += this.upgrdFloorWood;                
                this.runTotal += this.upgrdFloorWood;
                this.buildingUpgradeTotald += this.upgrdFloorWood;                                  
                break;    
                 
            default:
                alert('Houston we have a problem: Invalid input or not defined [floors]');
                break;
                
         }
        
        switch ( roof ) {
            case 'concrete': //input must be a string
                 
                $total += this.upgrdRoofConcrt;
                this.runTotal += this.upgrdRoofConcrt;
                this.buildingUpgradeTotald += this.upgrdFloorConcrt;                                 
                break;
                
            case 'spanish':
                
                $total += this.upgrdRoofSpansh;                
                this.runTotal += this.upgrdRoofSpansh;
                this.buildingUpgradeTotald += this.upgrdRoofSpansh;                 
                
                break;
                
            case 'shake':
            
                $total += this.upgrdRoofShake;                
                this.runTotal += this.upgrdRoofShake;
                this.buildingUpgradeTotald += this.upgrdRoofShake;                 

                break;
                 
            case 'metal': //input must be a string
                 
                $total += this.upgrdRoofMetal;
                this.runTotal += this.upgrdRoofMetal;
                this.buildingUpgradeTotald += this.upgrdRoofMetal;
                break;
                
            
            default:
                alert('Houston we have a problem: Invalid input or not defined [roof]');
                break;
                
         }
    
        //wainscoat
        if (wains){
            
            $total += this.upgrdWains;
            this.runTotal += this.upgrdWains;
            this.buildingUpgradeTotald += this.upgrdWains;
            
        }
        
        //trim upgrade
        if (trim) {
            
            $total += this.upgrdTrim;
            this.runTotal += this.upgrdTrim;
            this.buildingUpgradeTotald += this.upgrdTrim;
            
            
        }
        
        if (solar) {
            
            $total += this.upgrdSolar;
            this.runTotal += this.upgrdSolar;            
            this.buildingUpgradeTotald += this.upgrdSolar;
            
        }
        
        if (chargeStn){
            
            $total += this.upgrdChargeStn;
            this.runTotal += this.upgrdChargeStn;
            this.buildingUpgradeTotald += this.upgrdChargeStn;

            
        }
   
        return $total;
        
    },
    amenities: function (dPatio, overH, pool, bbq, land) {
        
        var $total = 0;
        
         //wainscoat
        if (dPatio){
            
            $total += this.addDrivePatio;
            this.runTotal += this.addDrivePatio;
            this.amenitiesTotal += this.addDrivePatio;
            
        }
        
        //trim upgrade
        if (overH) {
            
            $total += this.addOverhang;
            this.runTotal += this.addOverhang;
            this.amenitiesTotal += this.addOverhang;
            
        }
        
        if (pool) {
            
            $total += this.addPool;
            this.runTotal += this.addPool;      
            this.amenitiesTotal += this.addPool;
            
        }
        
        if (bbq){
            
            $total += this.addBbqArea;
            this.runTotal += this.addBbqArea;
            this.amenitiesTotal += this.addBbqArea;
            
        }

        if (land){
            
            $total += this.addLandscape;
            this.runTotal += this.addLandscape;
            this.amenitiesTotal += this.addLandscape;
            
        }

        return $total;
        
    },
    sumBuildCost: function () {

          return  this.baseTotal + this.siteConditionTotal + this.buildingUpgradeTotal;

        
    },
    sumTotalProject: function () {
        
        var projectTotal = this.sumBuildCost() + this.designTotal + this.amenitiesTotal;
        document.getElementById('project-total').innerHTML = '$ '+projectTotal.toLocaleString();
        
        return projectTotal;
            
    },
    inputReceiver: function ( targQues, userInput ){
        
        switch (targQues){
            case 'big-branch0' || 'branch0':
                this.base(userInput);
                break;
                
            case 'big-branch1' || 'branch1': // input will be an object with corresponding values
                this.design(userInput.sPlans, userInput)
        }
        
    }
}

var clonedSOLID = (function(){ 
  return function (obj) { Clone.prototype=obj; return new Clone() };
  function Clone(){}
}());


