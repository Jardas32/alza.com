import "../css/header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../components/CartContext";

function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const { cart } = useCart();
  const { totalProduct } = useCart();

  return (
    <header className="headers">
      <Link to="/">
        <img src="./alza_cz.svg" alt="img-logo" className="logo" />
      </Link>
      <div className="wrapper-search">
        <img src="./glass.png" alt="img-search" className="img-search" />
        <input type="text" placeholder="Co hledáte?" />
        <button className="btn-clear-input">X</button>
        <button className="btn-search">Hledat</button>
      </div>
      <div className="wrapper-prihlaseni">
        <img src="./user.png" alt="img-login" className="img-login" />
        <p className="text-prihlaseni">
          <span>Moje Alza</span>
          <Link className="login-link" to="/login">
            Prihlasit se
          </Link>
        </p>
        <img
          src="./down-chevron.png"
          alt="arrow-down"
          className="img-arrow-down"
        />
      </div>
      <div className="wrapper-navigation">
        <div className="wrapper-open-search">
          {!openSearch && (
            <img
              onClick={() => setOpenSearch(true)}
              src="./glass.png"
              alt="img-search"
              className="img-search-open"
            />
          )}

          {openSearch && (
            <div className="wrapper-search-open">
              <img
                onClick={() => setOpenSearch(false)}
                src="./glass.png"
                alt="img-search"
                className="img-search-open"
              />
              <input type="text" placeholder="Co hledate?" />
              <button className="btn-clear-input-open">X</button>
              <button className="btn-search-open">Hledat</button>
            </div>
          )}
        </div>
        <Link className="orders hidens" to="/objednavky">
          <img src="./orders.png" alt="img" className="img-objednavky" />
        </Link>
        <Link to="/oblibene">
          <img src="./love.png" alt="img" className="img-oblibene" />
        </Link>
        <Link className="hidens">
          <img src="./flagCZ.png" alt="img" className="flag" />
        </Link>
        <Link className="hidens" to="/cart">
          <span className="totalCard">{totalProduct}</span>
          <img src="./cart.png" alt="img" className="cart-header" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
