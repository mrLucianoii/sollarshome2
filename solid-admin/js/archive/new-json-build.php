<?php 
    
    
    $nPage = $_POST['par1']['webpage'];

    
    switch ($nPage) {
        case 'index-copy.html':
            $file = file_get_contents("json/index-copy.json");
            $fileName = 'json/index-copy.json';
            break;
        case 'architects.html':
             $file = file_get_contents("json/architects.json");
            $fileName = 'json/architects.json';

            break;
        case 'builders.html':
             $file = file_get_contents("json/builders.json");
            $fileName = 'json/builders.json';
            
            break;
        case 'featuresBenefits.html':
            $file = file_get_contents("json/featuresBenefits.json");
            $fileName = 'json/featuresBenefits.json';

            break;
        case 'homeowners.html':
            $file = file_get_contents("json/homeowners.json");
            $fileName = 'json/homeowners.json';
            break;
        case 'homes.html':
            $file = file_get_contents("json/homes.json");
            $fileName = 'json/homes.json';
            break;
        default:
            break;
    }
  //  $hist = file_get_contents("json/history.json");

 // $history = json_decode(, true);
            
       $data = json_decode($file, true);

        $data = $_POST;
        $history[] = $_POST;
     //   $history $_POST;
   /*   $history[] = array(
            'id' => $nPage;
            'time Saved' => $data['par1']['timeSaved'];
            'Page Content' => $data;
        ); */
    file_put_contents($fileName, json_encode($data));
    file_put_contents('json/history.json', json_encode($history));
   // file_put_contents($hist, json_encode($history));

?> 