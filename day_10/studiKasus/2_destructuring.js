const produk = { nama: "Vario New 150 ", harga: 130000, stok: 15 };
const { nama, harga: hargaSatuan, diskon = 0 } = produk;

const terlaris = ["Nmax 155", "Beat Street 110", "Vario New 150"];
const [juara1, , juara3] = terlaris;
console.log(terlaris);

const baru = { ...produk, stok: 20 };   // salinan, stok diubah
const baru2 = { ...produk, stok: 50 };   // salinan, stok diubah
const tambah = [...terlaris, "Nmax 155"];

console.log(produk);
console.log(terlaris);
console.log(baru);
console.log(baru2);
console.log(tambah);