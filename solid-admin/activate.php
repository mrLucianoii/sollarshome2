<?php 
    $file = file_get_contents("json/active-status.json");
    
    $status = json_decode($file, true);

    // Get last id
    //$last_item    = end($data);
    //$last_item_id = $last_item['id'];    

    $status[] = $_POST;
    
    
    file_put_contents('json/active-status.json', json_encode($status));

?> 