<?php
$sname= "localhost";
$unmae= "root";
$password = "";

$db = "users";

$connect = mysqli_connect($sname, $unmae, $password, $db);

if (!$conn){
	echo "connection failed!";
	
}