import { useNavigate } from "react-router-dom";

export default function HalamanDashboard() {    
      const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/");
  }

  return (
    <div>
      <h1>Selamat Datang Pengguna</h1>
       <button onClick={handleLogout}>Keluar</button>
    </div>
  );
}