<?php
    $nombre = "";
    $apellido = "";
    $edad = 10;

    if (isset($_POST["btnProcesar"])) {
        $nombre = $_POST["nombre"];
        $apellido = $_POST["apellido"];
        $edad = intval($_POST["edad"]);
    }
    
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intro a PHP</title>
</head>
<body>
    <h1>Intro a PHP</h1>
     <form action="index.php" method="post">
        <label for="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" value="<?php echo $nombre; ?>">
        <br>
        <label for="apellido">Apellido</label>
        <input type="text" name="apellido" id="apellido" value="<?php echo $apellido; ?>">
        <br>
        <label for="edad">Edad</label>
        <select name="edad" id="edad">
            <option value="10" <?php echo ($edad === 10)?"selected":""; ?>>Entre 0 y 10</option>
            <option value="20" <?php echo ($edad === 20)?"selected":""; ?>>Entre 11 y 20</option>
            <option value="30" <?php echo ($edad === 30)?"selected":""; ?>>Entre 21 y 30</option>
            <option value="40" <?php echo ($edad === 40)?"selected":""; ?>> Mayores a 30</option>
        </select>
        <br>
        <button type="submit" name="btnProcesar">Enviar</button>
    </form>
    <?php
        if (isset($_POST["btnProcesar"])) {
            for ($i = 0; $i < $edad; $i += 5) {
                echo 'Hola ' . $nombre . " " . $apellido . "<br/>" ;
            }
        }
    ?>
</body>
</html>
