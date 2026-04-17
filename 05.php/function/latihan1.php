<?php
$str = 'Belajar bahasa pemrograman PHP';

// strtoupper: mengubah menjadi huruf besar (uppercase)
$str = strtoupper($str);
echo '<br/>' . $str;

// strtolower: mengubah menjadi huruf kecil (lowercase)
$str = strtolower($str);
echo '<br/>' . $str;

// ucfirst: mengubah huruf pertama menjadi huruf besar
$str = ucfirst($str);
echo '<br/>' . $str;

// ucwords: mengubah semua kata menjadi huruf besar di awal
$str = ucwords($str);
echo '<br/>' . $str;

$fruits = ['Pepaya', 'Mangga', 'Pisang', 'Jambu', 'Apel'];

// sort: mengurutkan array secara ascending (A-Z)
sort($fruits);

foreach ($fruits as $fruit) {
    echo '<br/>' . $fruit;
}

echo '<hr/>';

// arsort: mengurutkan array secara descending (Z-A)
arsort($fruits);

foreach ($fruits as $fruit) {
    echo '<br/>' . $fruit;
}
?>