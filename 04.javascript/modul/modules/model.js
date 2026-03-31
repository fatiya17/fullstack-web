export class ProdukModel{
    constructor(){
        this.produkList = [];
    }

    // fungsi menambah produk
    tambahProduk(namaProduk){
        this.produkList.push(namaProduk);
    }

    // fungsi menghapus produk
    hapusProduk(namaProduk){
        this.produkList = this.produkList.filter(produk => produk !== namaProduk);
    }

    // fungsi mendapatkan semua produk
    getProduk(){
        return this.produkList;
    }
}