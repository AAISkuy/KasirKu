import "./form.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HalamanLogin from "./pages/HalamanLogin";
import HalamanRegister from "./pages/HalamanRegister";
import HalamanDashboard from "./pages/HalamanDashboard";
import { useState } from "react";
import { penggunaAwal, type Pengguna } from "./data/Pengguna";
 
export default function App() {
 const [daftarPengguna, setDaftarPengguna] =
    useState<Pengguna[]>(penggunaAwal);

  function tambahPengguna(baru: Pengguna) {
    setDaftarPengguna((prev) => [...prev, baru]);
  }
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Masuk</Link> | <Link to="/daftar">Daftar</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HalamanLogin daftarPengguna={daftarPengguna}/>} />
        <Route path="/daftar" element={<HalamanRegister daftarPengguna={daftarPengguna} 
        onDaftar={tambahPengguna}/>} />
        <Route path="/dashboard" element={<HalamanDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
