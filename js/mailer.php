<?php
/* Set e-mail recipient */
$myemail1 = "info@sollarsconstruction.com";
$myemail2 = " don@sollarsconstruction.com";
$myemail4 = "luciano@brandedsolid.com";

//$myemail = "luciano@brandedsolid.com";

/* Check all form inputs using check_input function */
$name = check_input($_POST['first'], "Enter your name");
$nameLast = check_input($_POST['last'], "Enter your last name");
$phone = check_input($_POST['phone']);
$email = check_input($_POST['email']);
$message = check_input($_POST['message'], "Write your message");

$subject = check_input($_POST['subject']);  

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("E-mail address not valid");
}
/* Let's prepare the message for the e-mail */
$message = "

First Name: $name
Last Name: $nameLast
Phone: $phone
E-mail: $email


Message:
$message

";

/* Send the message using mail() function */	
	mail($myemail1, $subject, $message);
	mail($myemail2, $subject, $message);
//	mail($myemail3, $subject, $message);
	mail($myemail4, $subject, $message);

	

//mail($myemail, $subject, $message);

/* Redirect visitor to the thank you page */
header('Location: index.html');

$thanks = "Thank you for your email. We will be in contact with you ASAP. ~Team Sollars";
echo ("<script type='text/javascript'>alert('$thanks');</script>");

exit();

/* Functions we used */
function check_input($data, $problem='')
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
if ($problem && strlen($data) == 0)
{
show_error($problem);
}
return $data;
}

function show_error($myError)
{
?>
<html>
<body>

<p>Please correct the following error:</p>
<strong><?php echo $myError; ?></strong>
<p>Hit the back button and try again</p>

</body>
</html>
<?php
exit();
}
?>