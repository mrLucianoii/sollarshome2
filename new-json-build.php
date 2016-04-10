<?php 
    $file = fopen("json/builderStart.json", 'w');
    $data = json_decode($file, true);

    // Get last id
    $last_item    = end($data);
    $last_item_id = $last_item['id'];    


    $data[] = $_POST;

    file_put_contents('json/builderStart.json', json_encode($data));

?> 