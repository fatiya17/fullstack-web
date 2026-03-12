// arrow function dengan array of object
const mahasiswa = [
    {nama: "Budi", nilai: 70},
    {nama: "Andi", nilai: 80},
    {nama: "Siti", nilai: 90},
    {nama: "Dewi", nilai: 85},
    {nama: "Rina", nilai: 75},
]

const hitungRataRata = data => data.reduce((acc, mhs) => acc + mhs.nilai, 0) / data.length;

const mahasiswaLulus = data => data.filter(mhs => mhs.nilai >= 60);

const namaMahasiswa = data => mahasiswaLulus(data).map(mhs => mhs.nama);

console.log(`Rata-rata nilai mahasiswa: ${hitungRataRata(mahasiswa)}`);
console.log("Mahasiswa yang lulus:", namaMahasiswa(mahasiswa));