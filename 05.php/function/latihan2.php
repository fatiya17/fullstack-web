<?php
// User-defined function | void (tidak mengembalikan nilai)
// Tanpa parameter
function salam(){
    echo '<br/>Selamat Pagi Teman2';
}

// Dengan parameter
function sapa($kawan){
    echo '<br/>Selamat Pagi ' . $kawan;
}

// Dengan nilai default
function kabar($kawan = 'Budi'){
    echo '<br/>Hai Apa Kabar ' . $kawan . '?';
}

// Memanggil function void
salam();

$nama = 'Deden';
sapa($nama);

kabar();

kabar('Ahmad');

$siswa = 'Alex';
kabar($siswa);
?>