<?php
if (!isset($_SERVER['PHP_AUTH_USER'])) {
    header('WWW-Authenticate: Basic realm="Authorization: Basic dGVzdDp0ZXN0QDMyMQ=="');
    header('HTTP/1.0 401 Unauthorized');
    echo 'Text to send if user hits Cancel button';
    exit;
} else {
    $username = $_SERVER['PHP_AUTH_USER'];
    $password = $_SERVER['PHP_AUTH_PW'];
    if($username == 'test' && $password == 'test@321') {
        header('location: index01.html');
    }else {
        echo 'username or password wrong';
    }
}
?>