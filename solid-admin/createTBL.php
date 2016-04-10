<?php
 /* SOLID CONFIDENTIAL
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

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 
/*
For easy creation of new SHELL tables :)
        $sql1 = "CREATE TABLE Shell (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(30) NOT NULL,
            modelAmount INT(6) NOT NULL,
            reg_date TIMESTAMP
            )";
  */  
    $sql1 = "CREATE TABLE Buildings (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(30) NOT NULL,
            shellType VARCHAR(30) NOT NULL,
            model VARCHAR(30) NOT NULL,
            priceShell INT(20) NOT NULL,
            priceOpt1 INT(20) NOT NULL,
            priceOpt2 INT(20) NOT NULL,
            squareFoot INT(6) NOT NULL,
            ceiling INT(3) NOT NULL,
            qtyRooms INT(3) NOT NULL,
            qtyBath INT(3) NOT NULL,
            kitchen VARCHAR(10) NOT NULL,
            outDoorPool VARCHAR(10) NOT NULL,
            patio VARCHAR(30) NOT NULL,
            patioDeck VARCHAR(30) NOT NULL,
            poolBase VARCHAR(30) NOT NULL,
            garage1 VARCHAR(30) NOT NULL,
            garage2 VARCHAR(30) NOT NULL,
            garage3 VARCHAR(30) NOT NULL,
            shellPath VARCHAR(30) NOT NULL,
            path1 VARCHAR(30) NOT NULL,
            path2 VARCHAR(30) NOT NULL,
            descriptionSD TINYTEXT NOT NULL,
            
            CONSTRAINT fk_shellType FOREIGN KEY (name)
            REFERENCES Shell(name)
            
            )";
        
        if ($conn->query($sql1) === TRUE) {
            echo "Table created successfully";
        } else {
            echo "Error creating table: " . $conn->error;
        }
        $conn->close();

?>