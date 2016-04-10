<?php
    $servername = "localhost";
    $username = "sollarsDBAdmin";
    $password = "z4M-MwK)@Xi#";
    $dbname = "sollarProductDB";

    $shells = json_decode( $_POST[shell], true);

    echo print_r($shells, true);

    function insertShell ($obj){
         
        for ( $i = 0; $i < count($shells); $i++ ){
            
            foreach ( $shells[$i] as $key => $value ){
                
                $sql = "UP"    
                
            }
            
        }
        
    }

/*
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    $sql = "UPDATE Buildings SET lastname='Doe' WHERE id=2";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }

    $conn->close();
*/
?>