// import { MenjalankanNode } from "./menjalankan_node.js";
// import * as readline from "node:readline/promises";
// import { stdin as input, stdout as output } from "node:process";
// // console.log(MenjalankanNode());

// const rl = readline.createInterface({ input, output });

// const daftar = [
//   {
//     nama: "Teh Celup",
//     harga: 5000,
//   },
//   {
//     nama: "Coca-cola",
//     harga: 8000,
//   },
// ];

// console.table(daftar);
// let pilihYa;
// do {
//   pilihYa = await rl.question("Pilih Menu :");
//   switch (pilihYa) {
//     case "1":
//       // TAMBAH
//       const nama = await rl.question("Nama Produk : ");
//       if (nama === "") {
//         console.log(`Isi dulu nama Produk!`);
//         break;
//       }
//       let harga = 0;
//       while (true) {
//         let hargaString = await rl.question("Harga Produk : ");
//         harga = Number(hargaString);
//         if (hargaString.trim() !== "" && !isNaN(harga) && harga > 0) {
//           break;
//         }
//         console.log(`Harga gagal ter input`);
//       }
//       daftar.push({ nama, harga });
//       console.log(`Berhasil Bertambah!`);
//       // console.table(daftar);
//       break; //---------------------------------------------------------------------------------
//     case "2":
//       // LIHAT
//       console.table(daftar);
//       break;
//     case "3":
//       // CARI
//       const cari = await rl.question("Ketik yg dicari : ");
//       let ketemu = 0;
//       for (const d of daftar) {
//         if (d.nama.toLowerCase().includes(cari.toLowerCase())) {
//           console.table({
//             nama: d.nama,
//             harga: d.harga,
//           });
//           ketemu++;
//         }
//       }
//       if (ketemu === 0) {
//         console.log(`Data tidak ditemukan!`);
//       }
//       break;
//     case "4":
//       // KELUAR
//       console.log(`Dah Lah....`);
//       break;

//     default:
//       console.log(`Pilihan tidak dikenali`);
//       break;
//   }
// } while (pilihYa !== "4");
// rl.close();
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { tampilkanMenu, tambahData } from "./controller/productController.js";
async function jalanApk() {
  let pilihan;
  const rl = readline.createInterface({ input, output });
  do {
  tampilkanMenu();
  pilihan = await rl.question("Pilih Menu :");
  switch (pilihan) {
    case "1":
      await tambahData(rl);
      break;
    case "2":
      lihatData();
      break;
    case "3":
      await cariData(rl);
      break;
    case "4":
      console.log("Selamat tinggal...");
      break;

    default:console.log("Menu tidak ditemukan!");
      break;
  }
  } while (pilihan !== "4");
  rl.close();
}
jalanApk();