<?php
/* Set e-mail recipient */
//$myemail1 = "info@sollarsconstruction.com";
//$myemail2 = " don@sollarsconstruction.com";
$myemail4 = "luciano@brandedsolid.com";

//$myemail = "luciano@brandedsolid.com";

/* Check all form inputs using check_input function */

        $jData = $_POST;



        $name = $jData['meData']['first'];
        $nameLast = $jData['meData']['last'];
        $phone = $jData['meData']['phone'];
        $email = $jData['meData'['email'];
        $message = $jData'meData']['message'];
/*
        $model = $jData['meData']['currentModel'];
        $custOrBase = $jData['meData']['custom'];
        $print3d = $jData['meData']['printModel'];
        $lot   = $jData['meData']['sCondtn'];
        $demo    = $jData['meData']['demo'];
        $singleSize= $jData['meData']['singleHome'];
        $unitSize    = $jData['meData']['addUnits'];
        $base = $jData['meData']['basement'];
        $app = $jData['meData']['app'];
        $bath = $jData['meData']['bath'];
        $wind = $jData['meData']['window'];
        $paint = $jData['meData']['painting'];
//        $pol  = $jData['meData']['first'];
  //      $col   = $jData['meData']['first'];
   //     $tile  = $jData['meData']['first'];
    //    $lamWoodn    = $jData['meData']['first'];
        $roof   = $jData['meData']['roof'];
        $wains  = $jData['meData']['wains'];
        $solar   = $jData['meData']['solar'];
        $electricStn  = $jData['meData']['chargeStn'];
        $patio  = $jData['meData']['dPatio'];
        $pool     = $jData['meData']['pool'];
        $bbq     = $jData['meData']['bbq'];
        $land     = $jData['meData']['land'];

        $bbCost = $jData['meData']['baseTotal'];
        $condCost = $jData['meData']['siteConditionTotal'];
        $upgrades = $jData['meData']['buildingUpgradeTotal'];

        $plansEng = $jData['meData']['designTotal'];
        $utilitTot = $jData['meData']['utilityTotal'];
        $amentTotal = $jData['meData']['amenitiesTotal'];
        
        $totalbuild = $jData['meData']['buildCostTotal'];
        $totalProject = $jData['meData']['sumTotalProject'];

            */
        /* Let's prepare the message for the e-mail */
        $message = "

            First Name: $name
            Last Name: $nameLast
            Phone: $phone
            E-mail: $email


            Message: 

            Configurations:

                Model: $model 
                Custom or Base: $custOrBase 
                3D Printed Models: $print3d
                Lot Type:$lot
                Clearing and Demolitions: $demo
                Single Family Home: $singleSize
                Second Units: $unitSize
                Basement: $base 
                Appliances: $app
                Bathroom: $bath 
                Windows and Doors: $wind
                2-Color Painting: $paint
                Flooring: 
                    - Polished $pol
                    - Colored $col
                    - Carpet $col
                    - Tile  $tile
                    - Laminatated Hardwood $lamWoodn
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
                Building Cost: $totalbuild
                Project Total: $totalProject



        ";


        /* Send the message using mail() function */	
        //	mail($myemail1, $subject, $message);
        //	mail($myemail2, $subject, $message);
        //	mail($myemail3, $subject, $message);

            mail($myemail4, $subject, $message);

?>

