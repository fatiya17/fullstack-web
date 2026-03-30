let daftarProduk = ['Laptop', 'Smartphone'];

function tambahProduk(produkBaru) {
  daftarProduk = [...daftarProduk, ... produkBaru];
  console.log("Produk berhasil ditambahkan:", produkBaru);
}   

function tampilkanProduk() {
  console.log("Daftar Produk Saat Ini:", daftarProduk);
}

function salinProduk() {
    return [...daftarProduk];
}

tambahProduk(['Tablet', 'Headphone']);
tampilkanProduk();

const produkCadangan = salinProduk();
console.log("Produk Cadangan:", produkCadangan);

tambahProduk(['Monitor', 'Keyboard']);
tampilkanProduk();
console.log("Produk Cadangan Setelah Penambahan:", produkCadangan);