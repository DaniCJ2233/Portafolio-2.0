<?php
include('con_db.php');

if ($conex) {
    echo "";
} else {
    echo "Error en la conexión: " . mysqli_connect_error();
}

if(isset($_POST['register'])){
    if ( (strlen($_POST['email']))>= 1){
        $email = trim($_POST['email']);
        $fechareg = date("d/m/y");
        $consulta = "INSERT INTO datos(email,fecha_reg) VALUES ('$email','$fechareg')";

        $resultado = mysqli_query($conex,$consulta);
        if ($resultado) {
            ?>
            <h3 class="ok">Te has inscripto correctamente</h3>;
            <?php
        }else {
            ?>
            <h3 class="bad"></h3>Ups! Ha ocurrido un error!</h3>
            <?php
        }
    }else {
        ?>
        <h3 class="bad"></h3>Por favor, complete los datos solicitados</h3>
        <?php
    }
}
?>
