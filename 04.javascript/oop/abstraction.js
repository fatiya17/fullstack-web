class Kendaraan{
    constructor(merk, tahun){
        if(this.constructor === Kendaraan){
            throw new Error("Kelas Kendaraan tidak bisa diinstansiasi secara langsung");
        }
        this.merk = merk;
        this.tahun = tahun;
    }

    deskripsi(){
        throw new Error("Metode deskripsi() harus diimplementasikan oleh subclass");
    }
}

class Mobil extends Kendaraan{
    constructor(merk, tahun, kecepatan){
        super(merk, tahun);
        this.kecepatan = kecepatan;
    }

    deskripsi(){
        return `Mobil ${this.merk} tahun ${this.tahun} memiliki kecepatan ${this.kecepatan} km/h.`;
    }
}

const mobil1 = new Mobil("Toyota", 2020, 180);
console.log(mobil1.deskripsi());