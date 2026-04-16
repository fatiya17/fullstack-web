<?php

$nama = 'Fakhriul';
$nilai = 75;

// jika nilai >= 60 = lulus
// jika nilai < 60 = tidak lulus
$keterangan = ($nilai >= 60) ? 'Lulus' : 'Tidak lulus';

echo "Nama siswa: $nama";
echo "<br/>Nilai: $nilai";
echo "<br/>Keterangan: $keterangan";

?>