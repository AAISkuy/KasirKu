import { readFile, writeFile, mkdir } from "node:fs/promises";
const produk = [
  { nama: "Beat Street 110", harga: 85000, stok: 5 },
  { nama: "Vario old 125", harga: 110000, stok: 3 },
  { nama: "Vario New 150", harga: 130000, stok: 7 },
  { nama: "Honda CBR 150", harga: 125000, stok: 4 },
  { nama: "Santa Fe", harga: 5255000, stok: 2 },
  { nama: "Nmax 155", harga: 150000, stok: 10 },
  
];

async function simpan(data) {
  await mkdir("day_10/dataLatihan", { recursive: true });
  await writeFile("day_10/dataLatihan/data_kendaraan.json", JSON.stringify(data, null, 2));
}

await simpan(produk);


async function muat() {
  try {
    return JSON.parse(await readFile("day_10/dataLatihan/data_kendaraan.json", "utf8"));
  } catch (err) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}


const dataFile = await muat();
console.log("Jumlah data dari file:", dataFile.length);