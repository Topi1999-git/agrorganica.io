<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "anthonyzhispon@gmail.com";

    $contenido = "
    Nombre: $nombre

    Correo: $correo

    Asunto: $asunto

    Mensaje:
    $mensaje
    ";

    $cabeceras = "From: $correo";

    if(mail($destinatario, $asunto, $contenido, $cabeceras)){
        echo "
        <script>
            alert('Mensaje enviado correctamente');
            window.location='index.html';
        </script>";
    } else {
        echo "
        <script>
            alert('No se pudo enviar el mensaje');
            window.location='index.html';
        </script>";
    }
}

?>