class SistemManajemenTransportasi {
  constructor() {
    this.daftarPelanggan = [];
    this.daftarKendaraan = [];
    this.daftarTransaksi = [];
  }

  tambahKendaraan(kendaraan) {
    this.daftarKendaraan.push(kendaraan);
  }

  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  catatPenyewaan(pelanggan, kendaraan, lamaHari) {
    const transaksi = pelanggan.catatTransaksiPenyewaan(kendaraan, lamaHari);
    this.daftarTransaksi.push(transaksi);
  }

  tampilkanDaftarPenyewaAktif() {
    console.log('\n=== DAFTAR PELANGGAN YANG SEDANG MENYEWA ===');

    const penyewaAktif = this.daftarPelanggan.filter((pelanggan) => pelanggan.kendaraanDisewa !== null);

    if (penyewaAktif.length === 0) {
      console.log('Belum ada pelanggan yang sedang menyewa kendaraan.');
      return;
    }

    penyewaAktif.forEach((pelanggan, index) => {
      const kendaraan = pelanggan.kendaraanDisewa;
      console.log(
        `${index + 1}. Nama: ${pelanggan.nama} | Telepon: ${pelanggan.nomorTelepon} | Kendaraan: ${kendaraan.nama} (${kendaraan.nomorPolisi})`
      );
    });
  }

  tampilkanSemuaTransaksi() {
    console.log('\n=== RIWAYAT TRANSAKSI PENYEWAAN ===');

    if (this.daftarTransaksi.length === 0) {
      console.log('Belum ada transaksi.');
      return;
    }

    this.daftarTransaksi.forEach((transaksi, index) => {
      console.log(
        `${index + 1}. ${transaksi.tanggal} | ${transaksi.pelanggan} menyewa ${transaksi.kendaraan} (${transaksi.nomorPolisi}) selama ${transaksi.lamaHari} hari | Total: Rp${transaksi.totalBiaya.toLocaleString('id-ID')}`
      );
    });
  }
}

module.exports = SistemManajemenTransportasi;
