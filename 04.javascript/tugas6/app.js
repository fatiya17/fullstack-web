import { index, store, destroy } from "./controller.js";

const main = () => {
    // tambah 2 data
    console.log(store({ nama: "Kevin", umur: 21, alamat: "Medan", email: "kevin@example.com" }));
    console.log(store({ nama: "Lina", umur: 24, alamat: "Bali", email: "lina@example.com" }));
    
    // tampilkan semua data
    console.log(index());
    
    // hapus 1 data
    console.log(destroy());
}

main();