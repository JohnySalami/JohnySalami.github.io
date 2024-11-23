<?php

header('Content-Type: text/html; charset=utf-8');

$username = isset($_POST['username']) ? trim($_POST['username']) : '';
$password = isset($_POST['password']) ? trim($_POST['password']) : '';

if ($username !== '' && $password !== '') {
    header("Location: login_success.html");
    exit();
} else {
    header("Location: login_fail.html");
    exit();
}
?>