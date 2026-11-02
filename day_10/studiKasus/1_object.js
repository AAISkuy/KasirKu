function buatProduk({ nama, harga, stok = 0, kategori = "Umum" } = {}) {
  return { nama, harga, stok, kategori };
}

const a = buatProduk({ nama: "Vario 125 old", harga: 110000, stok: 11 });
const b = buatProduk({ harga: 160000, nama: "Nmax 155" });

console.log(a);
console.log(b);