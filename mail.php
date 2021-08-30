﻿<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
    <?php
    ini_set( 'display_errors', 1);
    error_reporting( E_ALL );
    $from = utf8_decode($_POST['email']);
    $to ="ulrik.edeline@outlook.fr";
    $subject = utf8_decode($_POST['objet']);
    $message = utf8_decode($_POST['demande']);
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
    echo "L'email a été envoyé.";
    ?>
    <a href="Contact.html" title="Retour">Retour à la page précédente</a> 
</body>
</html>