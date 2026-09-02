import "../css/header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../components/CartContext";
import { IoIosArrowDown } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import Menu from "../components/Menu";

function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const {
    user,
    totalProduct,
    openSearchResult,
    setOpenSearchResult,
    opensearchRef,
    search,
    setSearch,
    searchResult,
    setInfoproduct,
  } = useCart();

  return (
    <header className="headers">
      <Link to="/">
        <img src="./alza_cz.svg" alt="img-logo" className="logo" />
      </Link>

      <div className="wrapper-search-bg">
        <div className={`wrapper-search  ${openSearchResult ? "active" : ""}`}>
          <img src="./glass.png" alt="img-search" className="img-search" />
          <input
            onClick={() => setOpenSearchResult(true)}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-search"
            type="text"
            placeholder="Co hledáte?"
          />
          <button onClick={() => setSearch("")} className="btn-clear-input">
            X
          </button>
          <button className="btn-search">Hledat</button>
        </div>

        <div
          ref={opensearchRef}
          className={`wrapper-search-result ${openSearchResult ? "open" : ""}`}
        >
          <div className="wrapper-result">
            {searchResult.length === 0 ? (
              <h3 className="nic-neni-result">Není . . .</h3>
            ) : (
              searchResult.map((result) => (
                <div key={result.id} className="wrapper-result-product">
                  <Link
                    onClick={() => {
                      setInfoproduct(result);
                      setOpenSearchResult(false);
                    }}
                    to={`/${encodeURIComponent(
                      result.allcategories
                    )}/${encodeURIComponent(
                      result.categories
                    )}/${encodeURIComponent(
                      result.category
                    )}/${encodeURIComponent(result.title)}`}
                    className="wrapper-result-product-link"
                  >
                    <img
                      className="search-product-img"
                      src={result.img}
                      alt={result.title}
                    />

                    <span>{result.title}</span>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div
        className={`overflow-open-search ${openSearchResult ? "active" : ""}`}
      ></div>

      <div
        onClick={() => setOpenLogin((open) => !open)}
        className={`wrapper-prihlaseni ${user ? "user" : ""}`}
      >
        <div className={`wrapper-user-img-header ${user ? "user" : ""}`}>
          <img
            src={`${user ? user.img : "./user.png"}`}
            alt="img-login"
            className={`img-login ${user ? "user" : ""}`}
          />
        </div>

        {user ? (
          <h4 className="user-name">{user.username.slice(0, 14)}...</h4>
        ) : (
          <p className="text-prihlaseni">
            <span>Moje Alza</span>
            <span>Prihlasit se</span>
          </p>
        )}

        <IoIosArrowDown
          className={`img-arrow-down ${openLogin ? "active" : ""}`}
        />
      </div>

      <div className={`wrapper-prihlaseni-acount ${openLogin ? "active" : ""}`}>
        <Menu />
      </div>

      <div className="wrapper-navigation">
        <div className="wrapper-open-search">
          {!openSearch && (
            <div className="wrapper-mobile-search-bg">
              <div className="wrapper-search-bg">
                <div
                  onClick={() => setOpenSearchResult(true)}
                  className="wrapper-search-open"
                >
                  <input
                    className="input-search-mobile"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Co hledáte?"
                  />
                  <button
                    onClick={() => setSearch("")}
                    className="btn-clear-input"
                  >
                    X
                  </button>
                </div>

                <button className="btn-zrusit">Zrušit</button>
              </div>
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
