// without spread operator
const angka = [1, 2, 3];
console.log(angka[0], angka[1], angka[2]);

// with spread operator
const spr_angka = [1, 2, 4];
const spr_angka2 = [5, 6, 7];

const gabungan = [...spr_angka, ...spr_angka2];

console.log(...spr_angka);
console.log(gabungan);

const user = {nama: "Budi", umur: 25};
const userBaru = {...user, kota: "Jakarta"};
console.log(userBaru);