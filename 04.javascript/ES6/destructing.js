// without destructuring
const angka = [10, 20, 30];

const a = angka[0];
const b = angka[1];
const c = angka[2];

console.log(a, b, c);

// with destructuring
const angka2 = [10, 20, 30];

const [a1, b2, c3] = angka2;
console.log(a1, b2, c3);

// without destructuring object
const user = {
  nama: "Budi",
  umur: 25,
  alamat: "Jakarta",
};

// const nama = user.nama;
// const umur = user.umur;
// const alamat = user.alamat;

// console.log(nama, umur, alamat);

// with destructuring object
const { nama, umur, alamat } = user;
console.log(nama, umur, alamat);

// destructuring looping
const siswa = [
  {nama: "Siti",nilai: 90},
  {nama: "Andi",nilai: 80},
];

for (const {nama, nilai} of siswa) {
  console.log(`Nama: ${nama}, mendapatkan Nilai: ${nilai}`);
}