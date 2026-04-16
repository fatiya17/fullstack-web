<?php

$nama = "Fakhirul";
$nilai = 75;

// if else multi kondisi
if ($nilai >= 85 && $nilai <= 100) $grade = "A";
else if ($nilai >= 75 && $nilai < 85) $grade = "B";
else if ($nilai >= 60 && $nilai < 75) $grade = "C";
else if ($nilai >= 30 && $nilai < 60) $grade = "D";
else if ($nilai >= 0 && $nilai < 30) $grade = "E";
else $grade = "Tidak valid";

// A = Memuaskan
// B = Bagus
// C = Cukup
// D = Kurang
// E = Sangat Kurang

switch ($grade) {
    case 'A':
        $predikat = "Memuaskan";
        break;

    case 'B':
        $predikat = "Bagus";
        break;

    case 'C':
        $predikat = "Cukup";
        break;

    case 'D':
        $predikat = "Kurang";
        break;

    case 'E':
        $predikat = "Sangat Kurang";
        break;

    default:
        $predikat = "Tidak ada";
}

echo "Nama : " . $nama . "<br>";
echo "Nilai : " . $nilai . "<br>";
echo "Grade : " . $grade . "<br>";
echo "Predikat : " . $predikat;

?>