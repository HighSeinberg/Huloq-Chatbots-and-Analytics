<?php

session_start();
header("location:../index.html");

$con = mysqli_connect('localhost','root','');

mysqli_select_db($con, 'huloq_database');

$Email = $_POST['email'];
$Password = $_POST['password'];

$s = "SELECT * FROM user_table WHERE Email = '$Email'";
$result = mysqli_query($con, $s);
$num = mysqli_num_rows($result);

if($num == 1) {
    echo "Email already registered!";
} else {
    $reg = "INSERT INTO user_table(Email, Password) VALUES ('$Email','$Password')";
    mysqli_query($con, $reg);
    echo "Registration Successful!";
}

?>