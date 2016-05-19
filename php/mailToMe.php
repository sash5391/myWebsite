<?php
    if(isset($_POST['ContactButton'])){
        $url='https://www.google.com/recaptcha/api/siteverify';
        $privatekey="6LeGPSATAAAAAILvcFnD7QE6Ub6Aepvi6l8CLFkv";

        $response=file_get_contents($url."?secret=".$privatekey."&response=".$_POST['g-recaptcha-response']."&remoteip=".$_SERVER['REMOTE_ADDR']);
        $data=json_decode($response);

        if(isset($data->success) AND $data->success==true){
            /* Do Nothing */
        }else{
            echo "<script type='text/javascript'>alert('reCAPTCHA Validation failed! Please try again.');</script>";
            echo "<script>setTimeout(\"location.href = 'http://www.sashwatmishra.com/contact.html';\",1000);</script>";
            exit(0);
        }
    }
$to      = "sashwatmishra@gmail.com";
$sender  = $_REQUEST["name"]
$subject = "Personal Website: Mail from ".$sender
$body    = $_REQUEST["message"];
$email   = $_REQUEST["email"];

$dodgy_strings = array(
                "content-type:"
                ,"mime-version:"
                ,"multipart/mixed"
                ,"bcc:"
);

function is_valid_email($email) {
  return preg_match('#^[a-z0-9.!\#$%&\'*+-/=?^_`{|}~]+@([0-9.]+|([^\s]+\.+[a-z]{2,6}))$#si', $email);
}

function contains_bad_str($str_to_test) {
  $bad_strings = array(
                "content-type:"
                ,"mime-version:"
                ,"multipart/mixed"
		,"Content-Transfer-Encoding:"
                ,"bcc:"
		,"cc:"
		,"to:"
  );
  
  foreach($bad_strings as $bad_string) {
    if(eregi($bad_string, strtolower($str_to_test))) {
      echo "$bad_string found. Suspected injection attempt - mail not being sent.";
      exit;
    }
  }
}

function contains_newlines($str_to_test) {
   if(preg_match("/(%0A|%0D|\\n+|\\r+)/i", $str_to_test) != 0) {
     echo "newline found in $str_to_test. Suspected injection attempt - mail not being sent.";
     exit;
   }
} 

if($_SERVER['REQUEST_METHOD'] != "POST"){
   echo("Unauthorized attempt to access page.");
   exit;
}

if (!is_valid_email($email)) {
  echo 'Invalid email submitted - mail not being sent.';
  exit;
}

contains_bad_str($email);
contains_bad_str($subject);
contains_bad_str(body);

contains_newlines($email);
contains_newlines($subject);

$headers = "From: $email";
mail($to, $subject, $body, $headers);
echo "<script type='text/javascript'>alert('SUCCESS! Thanks for submitting.');</script>";
echo "<script>setTimeout(\"location.href = 'http://www.sashwatmishra.com/contact.html';\",1000);</script>";
?>