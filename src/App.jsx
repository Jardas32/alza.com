import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Objednavky from "./pages/Objednavky";
import Oblibene from "./pages/Oblibene";
import Cart from "./pages/Cart";
import Menufooter from "./components/Menufooter";
import Katalog from "./pages/Katalog";
import Menu from "./pages/Menu";
import Infoproduct from "./pages/Infoproduct";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/objednavky" element={<Objednavky />} />
        <Route path="/oblibene" element={<Oblibene />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/infoproduct" element={<Infoproduct />} />
      </Routes>

      <Menufooter />
      
      <Footer />
    </HashRouter>
  );
}

export default App;
