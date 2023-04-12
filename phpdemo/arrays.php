<?php
$colores = array(
    "rojo",
    "azul",
    "verde"
);

$coloresAlternos = array();
$coloresAlternos[] = "marrón";
$coloresAlternos[] = "negro";
$coloresAlternos[] = "gris";

$persona = array(
    "nombre" => "Fulanito",
    "apellido" => "dTal",
    "identidad" => "08011980102938",
    "edad" => 22
);

$personas = array();
$personas[] = array(
    "nombre" => "Fulanito",
    "apellido" => "dTal",
    "identidad" => "08011980102938",
    "edad" => 23
);
$personas[] = array(
    "nombre" => "Javyer",
    "apellido" => "Torres",
    "identidad" => "0801200012666",
    "edad" => 23
);
/*
$personas[] = array(
    "nombre" => "Maidelyn",
    "apellido" => "Espinoza",
    "identidad" => "0105200100861",
    "edad" => 21
);
*/
$personas[] = array(
    "nombre" => "Elmer",
    "apellido" => "Chandia",
    "identidad" => "0501200110666",
    "edad" => 22
);
$personas[] = array(
    "nombre" => "Eyleen",
    "apellido" => "Tejada",
    "identidad" => "1505200100392",
    "edad" => 22
);
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Uso de Arreglos</h1>
    <h2>Colores</h2>
    <ul>
    <?php
        foreach ($colores as $color) {
            echo '<li>'.$color.'</li>';
        }
    ?>
    </ul>
    <h2>Alternos</h2>
    <ul>
    <?php
        foreach ($coloresAlternos as $colorAlt) {
            echo '<li>'.$colorAlt.'</li>';
        }
    ?>
    </ul>
    <h2>Arreglo Asociativo</h2>
    <table>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Identidad</th>
            <th>Edad</th>
        </tr>
        <?php foreach ($personas as $persona) { ?>
        <tr>
            <?php
                foreach ($persona as $llave => $valor) {
                    echo '<td>'.$valor.'</td>';
                }
            ?>
        </tr>
        <?php } ?>
    </table>
</body>
</html>
