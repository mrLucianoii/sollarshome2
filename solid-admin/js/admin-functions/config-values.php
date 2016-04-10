<?php


$jData = $_POST;

$inputs = json_decode($jData['valuesSD'], true);

echo("<script>console.log('Test Value: ".print_r( json_decode($jData['valuesSD'], true) )."');</script>");

   // $file = file_get_contents("json/configValues/values.json");
     $fileName = '../../json/configValues/values.json';

    file_put_contents($fileName, json_encode($inputs));

        
?>

