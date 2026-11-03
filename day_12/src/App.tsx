import "./form.css";
import {browserRouter, Router, Route, Link } from "react-router";
import HalamanLogin from "./pages/HalamanLogin";
import HalamanRegister from "./pages/HalamanRegister";

export default function App() {
   return (
    <BrowserRouter>
      <nav>
        <Link to="/">Masuk</Link> | <Link to="/daftar">Daftar</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HalamanLogin />} />
        <Route path="/daftar" element={<HalamanRegister />} />
      </Routes>
    </BrowserRouter>
  );
}
