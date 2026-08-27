import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Objednavky from "./pages/Objednavky";
import Oblibene from "./pages/Oblibene";
import Cart from "./pages/Cart";
import MenuFooter from "./components/Menufooter";
import Katalog from "./pages/Katalog";
import MenuPage from "./pages/MenuPage";
import Infoproduct from "./pages/Infoproduct";
import CategoriePage from "./pages/CategoriePage";
import CategoryProduct from "./pages/CategoryProduct";
import SelectCategoryPage from "./pages/SelectCategoryPage";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categories" element={<CategoriePage />} />
        <Route path="/:categories/:category" element={<CategoryProduct />} />
        <Route
          path="/:categories/:category/:selectcategory"
          element={<SelectCategoryPage />}
        />
        <Route
          path="/:categories/:category/:selectcategory/:title"
          element={<Infoproduct />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/objednavky" element={<Objednavky />} />
        <Route path="/oblibene" element={<Oblibene />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>

      <MenuFooter />

      <Footer />
    </HashRouter>
  );
}

export default App;
