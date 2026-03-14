const { Mobil, Motor, Bus } = require('./models/kendaraan');
const Pelanggan = require('./models/pelanggan');
const SistemManajemenTransportasi = require('./models/sistemManajemenTransportasi');

// contoh penggunaan sistem =====
const sistem = new SistemManajemenTransportasi();

const avanza = new Mobil('Toyota Avanza', 'B 1234 ABC', 350000, 7);
const vario = new Motor('Honda Vario', 'B 5678 DEF', 120000, 'Matic');
const busPariwisata = new Bus('Hino Pariwisata', 'B 9999 XYZ', 1500000, 40);

sistem.tambahKendaraan(avanza);
sistem.tambahKendaraan(vario);
sistem.tambahKendaraan(busPariwisata);

const pelanggan1 = new Pelanggan('Andi Saputra', '081234567890');
const pelanggan2 = new Pelanggan('Siti Aisyah', '089876543210');

sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

sistem.catatPenyewaan(pelanggan1, avanza, 3);
sistem.catatPenyewaan(pelanggan2, vario, 2);

sistem.tampilkanDaftarPenyewaAktif();
sistem.tampilkanSemuaTransaksi();
