// Data Produk
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000, stok: 10, deskripsi: "Laptop performa tinggi dengan prosesor super cepat." },
    { id: 2, nama: "Smartphone", harga: 5000000, stok: 25, deskripsi: "Ponsel cerdas dengan kamera resolusi tinggi." },
    { id: 3, nama: "Tablet", harga: 7000000, stok: 15, deskripsi: "Layar lebar memukau untuk hiburan dan kerja." },
    { id: 4, nama: "Headphone", harga: 1500000, stok: 30, deskripsi: "Audio imersif dengan fitur noise cancelling." },
    { id: 5, nama: "Smartwatch", harga: 2500000, stok: 20, deskripsi: "Pantau aktivitas harian dan notifikasi cerdas." }
];

// Menambahkan Produk dengan Spread Operator
function tambahProduk(id, nama, harga, stok, deskripsi) {
    if (!id || !nama || !harga || !stok || !deskripsi) {
        alert("Mohon lengkapi semua data produk yang dibutuhkan.");
        return;
    }

    // Validasi ID unik dan Nama unik
    const isIdExist = produkList.some((produk) => produk.id === id);
    const isNamaExist = produkList.some((produk) => produk.nama.toLowerCase() === nama.toLowerCase());

    if (isIdExist) {
        alert(`Gagal menambah produk: ID ${id} sudah digunakan untuk produk lain.`);
        return;
    }

    if (isNamaExist) {
        alert(`Gagal menambah produk: Nama "${nama}" sudah terdaftar dalam sistem.`);
        return;
    }

    const produkBaru = { id, nama, harga, stok, deskripsi };
    
    // Spread operator untuk menambahkan array baru
    produkList = [...produkList, produkBaru];
    
    // Kosongkan form input
    document.getElementById("id").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("harga").value = "";
    document.getElementById("stok").value = "";
    document.getElementById("deskripsi").value = "";

    tampilkanProduk();
}

// Menghapus Produk dengan Filter
function hapusProduk(id) {
    if (confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
        produkList = produkList.filter(({ id: produkId }) => produkId !== id);
        tampilkanProduk();
    }
}

// Format Rupiah
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
}

// Menampilkan Produk dengan Destructuring
function tampilkanProduk() {
    const output = document.getElementById("output");
    
    if (produkList.length === 0) {
        output.innerHTML = "<div style='text-align: center; color: var(--apple-text-muted); padding: 40px;'>Belum ada inovasi produk. Silakan tambahkan.</div>";
        return;
    }

    let tabelHTML = `
        <table>
            <thead>
                <tr>
                    <th width="5%">ID</th>
                    <th width="20%">Nama Produk</th>
                    <th width="15%">Harga</th>
                    <th width="10%">Stok</th>
                    <th width="40%">Deskripsi</th>
                    <th width="10%" class="actions">Aksi</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Destructuring object
    produkList.forEach(({ id, nama, harga, stok, deskripsi }) => {
        tabelHTML += `
            <tr>
                <td>${id}</td>
                <td><strong>${nama}</strong></td>
                <td>${formatRupiah(harga)}</td>
                <td>${stok}</td>
                <td style="color: var(--apple-text-muted);">${deskripsi}</td>
                <td class="actions">
                    <button class="btn-icon" onclick="hapusProduk(${id})" title="Hapus">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    });

    tabelHTML += `
            </tbody>
        </table>
    `;

    output.innerHTML = tabelHTML;
}

// Event Listener
document.getElementById("btnTambah").addEventListener("click", () => {
    const id = Number(document.getElementById("id").value);
    const nama = document.getElementById("nama").value.trim();
    const harga = Number(document.getElementById("harga").value);
    const stok = Number(document.getElementById("stok").value);
    const deskripsi = document.getElementById("deskripsi").value.trim();

    tambahProduk(id, nama, harga, stok, deskripsi);
});

// Tampilkan produk saat pertama kali halaman dibuka
tampilkanProduk();