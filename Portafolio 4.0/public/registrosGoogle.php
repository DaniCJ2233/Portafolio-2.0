<?php
ob_start();
include('con_db.php');

if ($conex) {
    echo "";
} else {
    echo "Error en la conexión: " . mysqli_connect_error();
}

if (isset($_POST['register'])) {
    if ((strlen($_POST['email'])) >= 1) {
        $email = trim($_POST['email']);
        $fechareg = date("d/m/y");

        // Verificar si el correo electrónico ya existe en la base de datos
        $consulta_existencia = "SELECT * FROM datos WHERE email = '$email'";
        $resultado_existencia = mysqli_query($conex, $consulta_existencia);

        if (mysqli_num_rows($resultado_existencia) > 0) {
            // El correo electrónico ya existe, puedes manejarlo según tus necesidades
            ?>
            <meta http-equiv="refresh" content="2;url=registroValido.php">
            <?php
            exit();
        } else {  // El correo electronico no existe, procedemos a bloquear el inicio de sesion
            ?>
            <meta http-equiv="refresh" content="2;url=registroInvalido.php">
            <?php
            exit();
        }
    }
}
ob_end_flush();
?>
