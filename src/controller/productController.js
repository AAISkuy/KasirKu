// import * as readline from "node:readline/promises";
// import { stdin as input, stdout as output } from "node:process";
// const rl = readline.createInterface({ input, output });
const daftar = [
  {
    nama: "Teh Celup",
    harga: 5000,
  },
  {
    nama: "Coca-cola",
    harga: 8000,
  },
];
//PROSEDUR tampilkanMenu()
export function tampilkanMenu() {
  console.log(`1 Tambah data 2 Lihat data 3 Cari Data 4 Keluar`);
}

//FUNGSI tanyaAngka()
// export async function tanyaAngka(rl, pertanyaan) {
//   while (true) {
//     const jawab = await rl.question(pertanyaan);
//     const angka = Number(jawab);
//     if (jawab !== "" && angka > 0) {
//       return angka;
//     }
//     console.log("input tidak valid");
//   }
// }
//PROSEDUR tambahData()
export async function tambahData(rl) {
  const nama = await rl.question("Nama Produk : ");
  if (nama === "") {
    console.log(`Isi dulu nama Produk!`);
    return;
  }

  let harga = await rl.question("Harga Produk : ");

  daftar.push({ nama, harga });
  console.log(`Berhasil Bertambah!`);
  // console.table(daftar);
}
//PROSEDUR lihatData()

//PROSEDUR cariData()
