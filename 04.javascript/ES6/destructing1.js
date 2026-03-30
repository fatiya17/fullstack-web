const productList = [
  {
    nama: "Laptop",
    harga: 10000000,
    stok: 5,
  },
  {
    nama: "Smartphone",
    harga: 5000000,
    stok: 10,
  },
  {
    nama: "Tablet",
    harga: 3000000,
    stok: 8,
  },
];

function displayProductInfo({ nama, harga, stok }) {
  console.log(`Nama Produk: ${nama}`);
  console.log(`Harga: ${harga}`);
  console.log(`Stok: ${stok}`);
  console.log("-------------------");
}

const [product1, product2, product3] = productList;

console.log("Informasi Produk 1:");
displayProductInfo(product1);
console.log("Informasi Produk 2:");
displayProductInfo(product2);
console.log("Informasi Produk 3:");
displayProductInfo(product3);
