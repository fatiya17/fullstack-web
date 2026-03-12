let buah = ['Pepaya', 'Mangga', 'Apel', 'Jeruk'];
let angka = new Array(1, 2, 3, 4, 5); // menggunakan new array
buah[0] = 'Pisang'; // mengubah data pada index ke 0
let arrKosong = new Array(5).fill(0);

for (let i = 0; i < arrKosong.length; i++) {
    arrKosong[i] = i + 1;
}

Array.prototype.tampilkan = function (data) {
    console.log(this.join("-"));
}

buah.push("Semangka"); // menambahkan data di akhir array
buah.pop(); // menghapus data di akhir array
buah.unshift("Strawberry"); // menambahkan data di awal array
buah.shift(); // menghapus data di awal array

console.log(arrKosong)
console.log(arrKosong[0]);
console.log(angka);
console.log(buah);
console.log(buah[0]);
console.log(buah[1]);
console.log(buah.length);
console.log(buah.consructor); // apakah array atau bukan