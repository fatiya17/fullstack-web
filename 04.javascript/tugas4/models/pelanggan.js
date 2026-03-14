class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null;
    this.riwayatTransaksi = [];
  }

  catatTransaksiPenyewaan(kendaraan, lamaHari) {
    if (!kendaraan.tersedia) {
      throw new Error(`Kendaraan ${kendaraan.nama} sedang tidak tersedia.`);
    }

    const totalBiaya = kendaraan.hitungBiayaSewa(lamaHari);

    kendaraan.tersedia = false;
    this.kendaraanDisewa = kendaraan;

    const transaksi = {
      tanggal: new Date().toLocaleString('id-ID'),
      pelanggan: this.nama,
      kendaraan: kendaraan.nama,
      nomorPolisi: kendaraan.nomorPolisi,
      lamaHari,
      totalBiaya,
    };

    this.riwayatTransaksi.push(transaksi);
    return transaksi;
  }

  selesaiSewa() {
    if (!this.kendaraanDisewa) {
      return;
    }

    this.kendaraanDisewa.tersedia = true;
    this.kendaraanDisewa = null;
  }
}

module.exports = Pelanggan;
