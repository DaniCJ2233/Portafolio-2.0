<?php
$conex = mysqli_connect("localhost", "root", "", "registro google");

if (!$conex) {
    die("Error de conexión: " . mysqli_connect_error());
}
?>
