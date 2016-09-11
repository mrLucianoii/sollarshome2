<?php    
    $server = "IDONTTHINKSO";
    $username = "IDONTTHINKSO";
    $password = "IDONTTHINKSO";
    $database = "IDONTTHINKSO";

    $con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());

    mysql_select_db($database, $con);


    $nameFirst = mysql_real_escape_string($_POST["first"]);
    $nameLast = mysql_real_escape_string($_POST["last"]);

    $email = mysql_real_escape_string($_POST["email"]);
/*    $phone = mysql_real_escape_string($_POST["phone"]);
    $message = mysql_real_escape_string($_POST["message"]);
    $home = mysql_real_escape_string($_POST["home"]); */


    $sql = "INSERT INTO emails  (email, nameFirst, nameLast) ";
    $sql .= "VALUES ('$email', '$nameFirst', '$nameLast')";

    if (!mysql_query($sql, $con)) {
        die('Error 69 (lol): ' . mysql_error());
    } else {
        /* Redirect visitor to the thank you page */
        header('Location: index.html');
        
    }

    mysql_close($con);

?>