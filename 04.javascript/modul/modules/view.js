export class ProdukView{
    constructor(){
        this.daftarProdukE1 = document.getElementById("daftar-produk");
        this.formE1 = document.getElementById("form-produk");
        this.inputProdukE1 = document.getElementById("input-produk");
    }

    tampilkanProduk(produkList, controller){
        this.daftarProdukE1.innerHTML = "";
        produkList.forEach(produk => {
            const li = document.createElement("li");
            li.textContent = produk;
            const tombolHapus = document.createElement("button");
            tombolHapus.textContent = "Hapus Produk";
            tombolHapus.addEventListener("click", () => {
                controller.hapusProduk(produk);
            });
            li.appendChild(tombolHapus);
            this.daftarProdukE1.appendChild(li);
        });
    }

    bindTambahProduk(controller){
        this.formE1.addEventListener("submit", (event) => {
            event.preventDefault();
            const namaProduk = this.inputProdukE1.value.trim();
            if(namaProduk){
                controller.tambahProduk(namaProduk);
                this.inputProdukE1.value = "";
            }
        });
    }
}