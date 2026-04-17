<?php
$motor = new Motor("Motor", "Bensin", 2);
$submarine = new Submarine("Kapal Laut", "Nuclear", 700);

echo "Informasi Motor:<br>";
$motor->getInfo();

echo "<br><br>Informasi Kapal Laut:<br>";
$submarine->getInfo();

?>