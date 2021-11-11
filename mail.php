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

        // Fichier envoyé et sans erreur
        if (isset($_FILES['fichiers']) && $_FILES['fichiers']['error'] == 0)
        {   
            // Fichier inférieur ou égal à 5 Mo
            if ($_FILES['fichiers']['size'] <= 5000000)
            {   
                // Vérification de l'extension du fichier
                $fileInfo = pathinfo($_FILES['fichiers']['name']);
                $extension = $fileInfo['extension'];
                $allowedExtensions = ['jpg', 'jpeg', 'pdf', 'gif', 'png'];
                if (in_array($extension, $allowedExtensions)) 
                {
                    //Validation et stockage du fichier
                    move_uploaded_file($_FILES['fichiers']['tmp_name'], 'uploads/' . 
                    basename($_FILES['fichiers']['name']));
                    $nomFichier = $_FILES['fichiers']['name'];
                    echo "L'envoi du fichier a bien été effectué. ";
                }
            }
        }

    $from = utf8_decode($_POST['email']);
    $to ="ulrik.edeline@outlook.fr";
    $subject = utf8_decode($_POST['objet']);
    $message = utf8_decode($_POST['demande']);
    if (isset($nomFichier)) {
    $headers = "From:" . $from . " + Fichier nommé " . 
    $nomFichier;
    } else {
        $headers = "From:" . $from; 
    }
    mail($to,$subject,$message, $headers);
    echo "L'email a été envoyé. ";
    ?>
    <a href="contact.html" title="Retour">Retour à la page précédente</a> 
</body>
</html>