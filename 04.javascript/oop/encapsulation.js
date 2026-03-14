// const _harga = Symbol("harga");

class Produk {
    #harga;
    constructor(nama, harga) {
        this.nama = nama;
        // this.harga = harga;
        // this[_harga] = harga; 
        this.#harga = harga;
    }
    getHarga(){
        // return this[this[_harga]];
        return this.#harga;
    }
    setHarga(hargaBaru){
        if(hargaBaru > 0){
            // this[_harga] = hargaBaru;
            this.#harga = hargaBaru;
        } else {
            console.log("Harga tidak boleh negatif");
        }
    }
}

const tv = new Produk("TV", 5000000);
console.log(tv.getHarga()); 
tv.setHarga(4500000);
console.log(tv.getHarga());
// console.log(tv._harga);