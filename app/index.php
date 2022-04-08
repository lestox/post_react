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

    // data
    $id = $_POST['id'];
    $title = $_POST['title'];
    $text = $_POST['text'];
    $token = $_POST['token'];

    // SQL
    $sql  = "INSERT INTO articles VALUES (id, title, text)";
    $stmt= $pdo->prepare($sql);
    $stmt->execute([$id, $title, $text]);

    // echo json_encode( $_POST );
    echo(json_encode(array(
        "" => true
    )));
}
else
{

    // tell the user about error

    echo(json_encode(["sent" => false, "message" => "Something went wrong"]));
}
