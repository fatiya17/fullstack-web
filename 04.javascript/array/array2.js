let angka1 = [1, 2, 3];
let angka2 = [4, 5, 6];


console.log(angka1.sort()); // mengurutkan elemen array secara ascending
console.log(angka1.reverse()); // membalik urutan elemen array
console.log(angka1).indexOf(2); // mencari index dari elemen 2 dalam array angka1
console.log(angka1).lastIndexOf(2); // mencari index terakhir dari elemen 2 dalam array angka1

let hasilGabung = angka1.concat(angka2); // menggabungkan dua array

console.log(hasilGabung);

let teks = angka1.join("-"); // menggabungkan elemen array menjadi string dengan pemisah "-"

console.log(teks);

let potongan = angka1.slice(2, 3); // mengambil sebagian elemen array dari index 0 sampai index 2 (tidak termasuk index 2)

console.log(potongan);

angka1.splice(1, 1, 10, 20); // menambahkan elemen baru pada index ke 1 tanpa menghapus elemen lain

console.log(angka1);