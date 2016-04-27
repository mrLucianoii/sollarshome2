<?php
/*************************************************************************
 * 
 * SOLID CONFIDENTIAL
 * __________________
 * 
 *  [2013] - [2016] Property of Luciano Aldana dba SOLID 
 *  All Rights Reserved.
 * 
 * NOTICE:  All information contained herein is, and remains
 * the property of SOLID and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to SOLID
 * and its suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from SOLID.
 
 
 */

    $servername = "localhost";
    $username = "sollarsDBAdmin";
    $password = "z4M-MwK)@Xi#";
    $dbname = "sollarProductDB";

    $buildings = json_decode( $_POST[buildings], true);
    $shellName = json_decode( $_POST[shellType], true );

    $buildlKeys = array();
    $arr2 = array();

    echo print_r($buildings, true);

    foreach ( $buildings as $key => $values ){
       
        if ( is_array($values) ){
            
            foreach ($values as $key1 => $values2 ){
                                
                array_push($arr2, $key1);

            }
        }else {
            array_push($buildlKeys, $key);
            
        }
            
    }


    foreach ( $arr2 as $value ){
        array_push($buildlKeys, $value );
    }

             
    function sqlPrep ( $buildObj, $arrKeys ){
        
        $sql = "INSERT INTO Buildings (";
        
        for ( $x = 0; $x < count($arrKeys); $x++) {
            
            if ( $x == count($arrKeys)-1 ){
                
                $sql .= " ".$arrKeys[$x]."";

            }else {
                $sql .= " ".$arrKeys[$x].",";
                
            }
                                                   
        }
        $sql .= " ) VALUES (";
        $i = 0;
        $counterSD = count($buildObj);
        
        foreach ( $buildObj as $key => $value ){
            
           if ( is_array($value) ){
                
                foreach ($value as $value2){
 
                    $cNum++;
                    if ( $cNum == 9 ){
                     
                        $sql .= " '".$value2."'";
                        
                    }else {
                        $sql .= " '".$value2."',";

                    }

                }
                
            }else {
                if( $i == $counterSD - 1 ){
                    $sql .= " '".$value."'";
                
                }else {
                    $sql .= " '".$value."',";
                    
                    
                }
                    
           }
            $i++;
        }
        $i = 0;
        $sql .= " )";
        
        return $sql;
        
    }
    
    echo "\r\n";
    echo print_r( sqlPrep( $buildings, $buildlKeys), true );

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
        

    if ($conn->query( sqlPrep( $buildings, $buildlKeys) ) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

?>