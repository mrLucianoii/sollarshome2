<?php    
    $server = "localhost";
    $username = "adminSOLID";
    $password = "Spawn#7777";
    $database = "sollars_email_app_db";

    $con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());

    mysql_select_db($database, $con);


    $nameFirst = mysql_real_escape_string($_POST["first"]);
    $nameLast = mysql_real_escape_string($_POST["last"]);

    $email = mysql_real_escape_string($_POST["email"]);
    $phone = mysql_real_escape_string($_POST["phone"]);
    $message = mysql_real_escape_string($_POST["message"]);
    $home = mysql_real_escape_string($_POST["home"]);


    $sql = "INSERT INTO emails  (email, nameFirst, nameLast, phone, message, configHome) ";
    $sql .= "VALUES ('$email', '$nameFirst', '$nameLast', '$phone', '$message', '$home' )";

    if (!mysql_query($sql, $con)) {
        die('Error 69 (lol): ' . mysql_error());
    } else {
        echo "We have emailed your Sollars' Home.  Our team will be in contact.";
    }

    mysql_close($con);

?>