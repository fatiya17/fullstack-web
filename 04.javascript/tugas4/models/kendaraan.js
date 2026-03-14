class Kendaraan {
  constructor(nama, nomorPolisi, tarifPerHari) {
    this.nama = nama;
    this.nomorPolisi = nomorPolisi;
    this.tarifPerHari = tarifPerHari;
    this.tersedia = true;
  }

  hitungBiayaSewa(lamaHari) {
    return this.tarifPerHari * lamaHari;
  }

  info() {
    return `${this.nama} (${this.nomorPolisi}) - Rp${this.tarifPerHari.toLocaleString('id-ID')}/hari`;
  }
}

class Mobil extends Kendaraan {
  constructor(nama, nomorPolisi, tarifPerHari, jumlahKursi) {
    super(nama, nomorPolisi, tarifPerHari);
    this.jumlahKursi = jumlahKursi;
  }

  info() {
    return `${super.info()} | Kursi: ${this.jumlahKursi}`;
  }
}

class Motor extends Kendaraan {
  constructor(nama, nomorPolisi, tarifPerHari, tipe) {
    super(nama, nomorPolisi, tarifPerHari);
    this.tipe = tipe;
  }

  info() {
    return `${super.info()} | Tipe: ${this.tipe}`;
  }
}

class Bus extends Kendaraan {
  constructor(nama, nomorPolisi, tarifPerHari, kapasitasPenumpang) {
    super(nama, nomorPolisi, tarifPerHari);
    this.kapasitasPenumpang = kapasitasPenumpang;
  }

  info() {
    return `${super.info()} | Kapasitas: ${this.kapasitasPenumpang} penumpang`;
  }
}

module.exports = {
  Kendaraan,
  Mobil,
  Motor,
  Bus,
};
