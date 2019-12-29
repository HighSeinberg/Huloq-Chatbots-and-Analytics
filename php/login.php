<?php

session_start();

$con = mysqli_connect('localhost','root','');
mysqli_select_db($con,'huloq_database');

$email = $_POST['login_email'];
$password = $_POST['login_password'];

$s = "SELECT FROM user_table WHERE Email = '$email' && Password = '$password'";
$result = mysqli_query($con,$s);
$num = mysqli_num_rows($result);

if($num == 1) {
    header('location:../index.html');
} else {
    $_SESSION['email'] = $email;
    header('location:welcome.php');
}

?>