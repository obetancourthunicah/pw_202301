<?php
$sectionName = "INICIO";
if (isset($_POST["btnp1"])) {
    $sectionName = "P1";
}
if (isset($_POST["btnp2"])) {
    $sectionName = "P2";
}
if (isset($_POST["btncli"])) {
    $sectionName = "CLI";
}
if (isset($_POST["btnf1"])) {
    $sectionName = "F1";
}
if (isset($_POST["btnf2"])) {
    $sectionName = "F2";
}

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SPA Demo</title>
</head>

<body>
    <?php
    switch ($sectionName) {
        case "INICIO":
    ?>
            <h2>inicio</h2>
            <form action="spa.php" method="post">
                <button type="submit" name="btnp1">Goto P1</button>
                <button type="submit" name="btnp2">Goto P2</button>
            </form>
        <?php
            break;
        case "P1":
        ?>
            <h2>p1</h2>
            <form action="spa.php" method="post">
                <button type="submit" name="btncli">Goto cli</button>
            </form>
        <?php
            break;
        case "P2":
        ?>
            <h2>p2</h2>
            <form action="spa.php" method="post">
                <button type="submit" name="btncli">Goto cli</button>
            </form>
        <?php
            break;
        case "CLI":
        ?>
            <h2>cli</h2>
            <form action="spa.php" method="post">
                <button type="submit" name="btnf1">Goto F1</button>
                <button type="submit" name="btnf2">Goto F2</button>
            </form>
        <?php
            break;
        case "F1":
        ?>
            <h2>f1</h2>
            <strong>Fin 1</strong>
        <?php
            break;
        case "F2":
        ?>
            <h2>f2</h2>
            <strong>Fin 2</strong>
    <?php
            break;
    }
    ?>
</body>

</html>
