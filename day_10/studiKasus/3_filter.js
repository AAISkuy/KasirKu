const produk = [
  { nama: "Beat Street 110", harga: 85000, stok: 5 },
  { nama: "Vario old 125", harga: 110000, stok: 3 },
  { nama: "Vario New 150", harga: 130000, stok: 7 },
  { nama: "Honda CBR 150", harga: 125000, stok: 4 },
  { nama: "Nmax 155", harga: 150000, stok: 10 }
];

function saringStokMenipis(daftar) {
  return daftar.filter((p) => p.stok < 5);
}

const hasil = saringStokMenipis(produk);
if (hasil.length === 0) console.log("Tidak ditemukan");
else console.table(hasil);