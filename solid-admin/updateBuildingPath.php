<?php
    $servername = "localhost";
    $username = "sollarsDBAdmin";
    $password = "z4M-MwK)@Xi#";
    $dbname = "sollarProductDB";

    $building = json_decode( $_POST["building"], true);
    $buildKeys = array();
    $arr2 = array();


    foreach ( $building as $key => $values ){
       

        if ( is_array($values) ){
            
            foreach ($values as $key1 => $values2 ){
                                
                array_push($arr2, $key1);

            }
        }elseif ( $key != "submit" ){
            array_push($buildKeys, $key);
            
        }
    }

    $buildKeys = array_merge($buildKeys, $arr2);

    echo print_r( $building, true);

    $sql = "UPDATE Buildings SET";
    
    
    for ( $i = 0; $i < count( $buildKeys ); $i++ ){
       
        
        if ( $i == count($buildKeys)-1 ){
            $sql .=  " ".$buildKeys[$i]. "='".$building[$buildKeys[$i]]."'";

        }else  {
            $sql .=  " ".$buildKeys[$i]. "='".$building[$buildKeys[$i]]."', ";
            
        }
        
    }

        $sql .= " WHERE shellType="."'".$building["shellType"]."' AND model='".$building["model"]."';";
   
    echo "\r\n";
    echo print_r($sql, true);

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 


    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }

    $conn->close();

?>