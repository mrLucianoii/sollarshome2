<?php
    $servername = "******";
    $username = "******";
    $password = "******";

    $newDBName = json_decode($_POST['nameSD'], true);

    echo("<script>console.log('Test Value: ".print_r( $newDBName )."');</script>");


    // Create connection
    $conn = new mysqli($servername, $username, $password);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    // Create database
    $sql = "CREATE DATABASE ".$newDBName."";

    if ($conn->query($sql) === TRUE) {
        echo "Database created successfully";
    } else {
        echo "Error creating database: " . $conn->error;
    }

    $conn->close();

?>