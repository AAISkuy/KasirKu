import { useState } from "react";
import type { FormEvent } from "react";
import Toast from "../components/Toast";
import { useNavigate } from "react-router-dom";
import type { Pengguna } from "../data/Pengguna";

type Props = {
  daftarPengguna: Pengguna[];
};

type FormErrors = { email?: string; password?: string };
type InfoToast = { teks: string; jenis: "sukses" | "gagal" } | null;
const AKUN_ADMIN = { email: "Rentifa@gmail.com", password: "Akutifa111" };

export default function HalamanLogin({ daftarPengguna }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pesan, setPesan] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState<InfoToast | null>(null);
  const navigate = useNavigate();

  function tampilkanToast(teks: string, jenis: "sukses" | "gagal") {
    setToast({ teks, jenis });
    setTimeout(() => setToast(null), 3000);
  }

  function handleMasuk(e: FormEvent) {
    e.preventDefault();
    setPesan(`Mencoba masuk sebagai ${email}`);
  }

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (email === "") errs.email = "Email wajib diisi";
    else if (!email.includes("@")) errs.email = "Format email salah";
    if (password === "") errs.password = "Password wajib diisi";
    else if (password.length < 8) errs.password = "Minimal 8 karakter";
    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    // Hentikan proses jika ada error
    if (Object.keys(validationErrors).length > 0) return;
    console.log("Validation passed! Siap kirim data ke API.");
    if (email === AKUN_ADMIN.email && password === AKUN_ADMIN.password) {
      tampilkanToast("Berhasil masuk. Selamat datang!", "sukses");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      tampilkanToast("Email atau password salah", "gagal");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Rentifa</h2>
      <p>Total pengguna: {daftarPengguna.length}</p>
      <small>Reliable Rides, Easy Rentals</small>
      <h2>Selamat Datang</h2>
      <p>Masuk ke akun Anda untuk mengelola sewa dan reservasi</p>
      <label>Alamat Email</label>
      <input
        className={errors.email ? "error" : "input"}
        id="email"
        style={{}}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <small className="error-message">{errors.email}</small>}
      <label htmlFor="password">Kata Sandi</label>
      <div className="password-row">
        <input
          id="password"
          className={errors.password ? "error" : "input"}
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Sembunyikan" : "Lihat"}
        </button>
      </div>

      {errors.password && (
        <small className="error-message">{errors.password}</small>
      )}
      <button type="submit">Masuk</button>

      <div
        className="auth-footer"
        style={{ textAlign: "center", marginTop: "12px" }}
      >
        <small>
          Belum punya akun? <a href="/daftar">Daftar sekarang</a>
        </small>
      </div>

      {pesan && <p>{pesan}</p>}

      {toast && <Toast teks={toast.teks} jenis={toast.jenis} />}
    </form>
  );
}
