<?php

// variable
$nama = 'Fakhriul';
$totalBelanja = 150000;
$keterangan = '';

// if-else
if ($totalBelanja > 100000) {
    $keterangan = "Selamat $nama Anda mendapatkan hadiah";
} else {
    $keterangan = "Terima kasih $nama, sudah berbelanja";
}

echo "Nama Pelanggan: $nama";
echo "<br/>Total Belanja: Rp. $totalBelanja";
echo "<br/>Keterangan: $keterangan";

?>