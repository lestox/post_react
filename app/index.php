<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, GET');
header('Access-Control-Allow-Headers: content-type, authorization');

#$token = str_replace('Bearer', '', getallheaders()['authorization']);

/*echo json_encode([
    'username' => $_SERVER['PHP_AUTH_USER'],
    'password' => $_SERVER['PHP_AUTH_PW'],
]);*/

// Connexion BDD
try{
    $db = new PDO('mysql:host=db;dbname=data',
        'root',
        'password',
                array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    die(json_encode(array('outcome' => true)));
}
catch(PDOException $ex){
    die(json_encode(array('outcome' => false, 'message' => 'Unable to connect')));
}


//Receive post requests

if (empty($_POST['title']) && empty($_POST['text'])) die();

if ($_POST)
{

    // set response code - 200 OK

    http_response_code(200);
    $title = $_POST['title'];
    $text = $_POST['text'];

    // data

    $msg = $_POST['number'] . $_POST['message'];

    // Headers

    $headers = "MIME-Version: 1.0\r\n";
    $headers.= "Content-type: text/html; charset=UTF-8\r\n";
    $headers.= "From: <" . $from . ">";
    mail($to, $subject, $msg, $headers);

    // echo json_encode( $_POST );

    echojson_encode(array(
        "sent" => true
    ));
}
else
{

    // tell the user about error

    echojson_encode(["sent" => false, "message" => "Something went wrong"]);
}

?>