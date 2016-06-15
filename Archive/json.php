<?php 
    $file = file_get_contents("json/builder.json");
    $allContent = file_get_contents("json/builderStart.json");
    
    $dataNew = json_decode($file, true);
    $dataAll = json_decode($allContent, true);

    // Get last id
    //$last_item    = end($data);
    //$last_item_id = $last_item['id'];    

    $datNew[] = $_POST;
    
    
    file_put_contents('json/builder.json', json_encode($datNew));

?> 