function hitungRataRata(nilai){
    // func: declare
    // hitungRataRata: nama fungsi
    // nilai: parameter fungsi, bisa lebih dari satu
    let total = 0;
    for(let i = 0; i < nilai.length; i++){
        total += nilai[i];
    }
    return total / nilai.length;
}

let nilaiMahasiswa = [80, 90, 75, 85, 95];
console.log(`Rata-rata nilai mahasiswa: ${hitungRataRata(nilaiMahasiswa)}`);