function jumlahkan(...angka) {
  return angka.reduce((total, num) => total + num, 0);
}

console.log(jumlahkan(1, 2, 3)); // Output: 6
console.log(jumlahkan(10, 10, 10, 10)); // Output: 40

const arr_angka = [1, 2, 3, 4, 5];

// descructuring array dengan rest operator
const [pertama, kedua, ...sisa] = arr_angka;
console.log(pertama, kedua); // Output: 1 2
console.log(sisa); // Output: [3, 4, 5]
console.log(jumlahkan(...arr_angka)); // Output: 15

const data = {
    nama: "Budi",
    umur: 25,
    kota: "Jakarta",
    pekerjaan: "Programmer"
}

const {nama, umur, ...infoLain} = data;
console.log(nama, umur, infoLain); 