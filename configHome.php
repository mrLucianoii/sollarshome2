<?php
/* Set e-mail recipient */
$myemail1 = "info@sollarsconstruction.com";
//$myemail2 = " don@sollarsconstruction.com";
$myemail4 = "luciano@brandedsolid.com";

//$myemail = "luciano@brandedsolid.com";

/* Check all form inputs using check_input function */



$jData = $_POST;

$inputs = json_decode($jData['home'], true);
$totals = json_decode($jData['totals'], true);

echo("<script>console.log('Estimates: ".print_r($inputs['floorOptions']['polished'], true)."');</script>");

echo("<script>console.log('Inputs: ".print_r(json_decode($jData['home'], true))."');
    console.log('extra units: ".print_r($inputs['addUnits'])."')
</script>");

$name = $jData['first'];
$nameLast = $jData['last'];
$phone =  $jData['phone'];
$email = $jData['email'];
$message = $jData['message'];
$subject = "Your new Sollars Home Configurations";
$subject2 = "A New Sales Lead";

        $model =  print_r($inputs['currentModel'], true);
        $custOrBase =print_r($inputs['custom'][0], true);
        $print3d = print_r($inputs['printModel'][0], true);
        $lot   = print_r($inputs['sCondtn'][0], true)." ".print_r($inputs['sCondtn'][1], true);
        $demo    = print_r($inputs['demo'][0], true);

        $singleSize=print_r($inputs['singleHome'][0], true)." ".print_r($inputs['singleHome'][1], true);
        $unitSize    = print_r($inputs['addUnits'][0], true);
        $base = print_r($inputs['basement'][0], true);
        $app = print_r($inputs['app'][0], true);
        $bath = print_r($inputs['bath'][0], true);
        $wind = print_r($inputs['window'][0], true);
        $paint = print_r($inputs['painting'][0], true);

    //Flooring Info
        $polished = print_r($inputs['floorOptions']['polished'], true);
        $colored = print_r($inputs['floorOptions']['colored'], true);
        $carpet = print_r($inputs['floorOptions']['carpet'], true);
        $tile = print_r($inputs['floorOptions']['tile'], true);
        $hard = print_r($inputs['floorOptions']['hardwood'], true);
        $lamWoodn = print_r($inputs['floorOptions']['laminated'], true);

        $roof   = print_r($inputs['roof'][0], true);
        $wains  = print_r($inputs['wains'][0], true);
       
        $bbCost = print_r($inputs['selectedBase'], true);
        $condCost = print_r($totals['siteConditionTotal'], true);
        $upgrades = print_r($totals['buildingUpgradeTotal'], true);

        $plansEng = print_r($totals['designTotal'], true);
        $utilitTot = print_r($totals['utilityTotal'], true);
        $amentTotal = print_r($totals['amenitiesTotal'], true);

        $totalbuild = print_r($totals['bcTotal'], true);
        $totalProject = print_r($totals['grandTotal'], true);


    /* Let's prepare the message for the e-mail */

        $message1 = "
            
            A New Lead!
            
            First Name: $name
            Last Name: $nameLast
            Phone: $phone
            E-mail: $email

            $name left the following meessage for us:
            
            $message

            
            Configurations:

                Model: $model 
                Custom or Base: $custOrBase 
                3D Printed Models: $print3d
                Lot Type: $lot
                Clearing and Demolitions: $demo
                Single Family Home: $singleSize
                Second Units: $unitSize feet
                Basement: $base 
                Appliances: $app
                Bathroom: $bath 
                Windows and Doors: $wind
                2-Color Painting: $paint
                Flooring: 
                    - Polished: $polished
                    - Colored: $colored
                    - Carpet: $carpet
                    - Tile:  $tile
                    - Hardwood: $hard
                    - Laminatated Hardwood: $lamWoodn
                Roofing: $roof
                Wainscoating: $wains
                Solar Panels: $solar
                Electric Charging station: $electricStn 
                Patio: $patio 
                Swiming Pool: $pool 
                BBQ Area: $bbq
                Landscaping: $land

            Totals:
                Base Building Cost: $bbCost
                Site Conditions: $condCost
                Building Upgrades: $upgrades
                
                Plans and Engineering: $plansEng
                Utility Connections: $utilitTot
                Site Amenities: $amentTotal
                -----------------------------
                Building Cost: $ $totalbuild
                Project Total: $ $totalProject
                
    ";
    
    $message2 = "

            Hi $name,
            
            This is your new Sollars Home configuration!
                        
            Configurations:

                Model: $model 
                Custom or Base: $custOrBase 
                3D Printed Models: $print3d
                Lot Type: $lot
                Clearing and Demolitions: $demo
                Single Family Home: $singleSize
                Second Units: $unitSize feet
                Basement: $base 
                Appliances: $app
                Bathroom: $bath 
                Windows and Doors: $wind
                2-Color Painting: $paint
                Flooring: 
                    - Polished: $polished
                    - Colored: $colored
                    - Carpet: $carpet
                    - Tile:  $tile
                    - Hardwood: $hard
                    - Laminatated Hardwood: $lamWoodn
                Roofing: $roof
                Wainscoating: $wains
                Solar Panels: $solar
                Electric Charging station: $electricStn 
                Patio: $patio 
                Swiming Pool: $pool 
                BBQ Area: $bbq
                Landscaping: $land

            Totals:
                Base Building Cost: $bbCost
                Site Conditions: $condCost
                Building Upgrades: $upgrades
                
                Plans and Engineering: $plansEng
                Utility Connections: $utilitTot
                Site Amenities: $amentTotal
                -----------------------------
                Building Cost: $ $totalbuild
                Project Total: $ $totalProject
                
    A Sollars Team member will reach out to you soon.  
    
    Best Regards,
    Team Sollars
                
                
                
    ";

/* Send the message using mail() function */	
//	mail($myemail1, $subject, $message);
//	mail($myemail2, $subject, $message);
//	mail($myemail3, $subject, $message);
	
    //Sollars Sales Team Message
    mail($myemail4, $subject2, $message1, $email,'-f'.$email);
    mail($myemail, $subject2, $message1, $email,'-f'.$email);

    //Customer Email's message
    mail($email, $subject, $message2, $myemail4, '-f'.$myemail4);

?>

