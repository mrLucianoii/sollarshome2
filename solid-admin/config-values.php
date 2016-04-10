<?php


$jData = $_POST;

$inputs = json_decode($jData, true);

echo("<script>console.log('Test Value: ".print_r($inputs, true)."');</script>");

echo("<script>console.log('Inputs: ".print_r(json_decode($jData, true))."');
    console.log(".print_r($inputs, true)."');
    console.log('inside php file');a

</script>");

?>

