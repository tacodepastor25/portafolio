<?php
if(isset($_POST["submit"]))
{
    $para = "181662@upslp.edu.mx";
    $asunto = "Enviando Información";
    $nomb = $_POST("nombre");
    $correo = $_POST("email");
    $mensaje = $_POST("mensaje");
    $headers = "MIME-Version: 1.0\r\n";
    $headers = "Content-type: text/html; charset=utf8\r\n";
    $cuerpo = " Envidado por: $nomb\n Email: $correo\n Mensaje: $mensaje\n";

    $bool = mail($para,$asunto,$cuerpo,$headers);
}
else
{
    echo "Algo malo ocurrio...";

}

