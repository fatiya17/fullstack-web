import users from "./data.js";

const index = () => {
    // tampilkan data
    console.log("Daftar Users:");
    users.map((user, i) => {
        console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
    });
    return "Data berhasil ditampilkan.";
};

const store = (user) => {
    // tambah data
    users.push(user);
    return `Data ${user.nama} berhasil ditambahkan.`;
};

const destroy = () => {
    // hapus data
    const deletedUser = users.pop();
    if (deletedUser) {
        return `Data ${deletedUser.nama} berhasil dihapus.`;
    }
    return "Tidak ada data yang dihapus.";
};

export { index, store, destroy };