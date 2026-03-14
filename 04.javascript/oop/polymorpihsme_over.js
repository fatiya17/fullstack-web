class Kendaraan {
    bergerak() {
        console.log("Kendaraan ini bergerak");
    }
}

class Mobil extends Kendaraan {
    bergerak() {
        console.log("Mobil melaju di jalan raya");
    }
}

class Kapal extends Kendaraan {
    bergerak() {
        console.log("Kapal berlayar di laut");
    }
}

class Pesawat extends Kendaraan {
    bergerak() {
        console.log("Pesawat terbang di udara");
    }
}

const kendaraan1 = new Mobil();
const kendaraan2 = new Kapal();
const kendaraan3 = new Pesawat();

// overriding
kendaraan1.bergerak(); 
kendaraan2.bergerak(); 
kendaraan3.bergerak(); 

// overloading
class Kalkulator {
    tambah(a, b = 0, c = 0) {
        return a + b + c;
    }
}

const kalkulator = new Kalkulator();
console.log(kalkulator.tambah(5)); 
console.log(kalkulator.tambah(5, 10));