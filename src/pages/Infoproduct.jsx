import "../css/infoproduct.css";
import { useCart } from "../components/CartContext";
import { useState } from "react";
import Footer from "../components/Footer";

function Infoproduct() {
  const { infoproduct } = useCart();
  const [open, setOpen] = useState(false);
  const { handleAddOblibene } = useCart();

  const arrStars = [
    {
      id: 1,
      img: "src/assets/star.png",
    },
    {
      id: 2,
      img: "src/assets/star.png",
    },
    {
      id: 3,
      img: "src/assets/star.png",
    },
    {
      id: 4,
      img: "src/assets/star.png",
    },
    {
      id: 5,
      img: "src/assets/star.png",
    },
  ];

  return (
    <>
      <div className="wrapper-infoproduct-bg">
        <div className="wrapper-info-left">
          <img
            src={infoproduct.img}
            alt={infoproduct.title}
            className="img-info-product"
          />
        </div>
        <div className="wrapper-info-right">
          <div className="wrapper-grid">
            <div>
              <h3 className="title-product-info">{infoproduct.title}</h3>
            </div>
            <div className="wrapper-stars-info">
              <p className="starsAll">
                {arrStars.map((star) => (
                  <img
                    key={star.id}
                    src={star.img}
                    alt="star"
                    className="img-star"
                  />
                ))}
                <span className="hodnoceni">4,7</span>
                <a href="#" className="hodnoceni-text">
                  1 505 hodnocení
                </a>
              </p>
            </div>
            <div>
              <p className="description-product">
                Bezdrátová sluchátka - s mikrofonem, True Wireless, pecky,
                otevřená konstrukce, Bluetooth 5.3, přepínání skladeb, přijímání
                hovorů, certifikace IP54, výdrž baterie až 30 h (5 h+30 h)
              </p>
            </div>
            <div>
              <div className="custom-select">
                <button
                  onClick={() => setOpen((perv) => !perv)}
                  className="select-btn"
                >
                  <div className="wrapper-left-center">
                    <div className="wrapper-left-btn">
                      <img
                        src={infoproduct.img}
                        alt="img"
                        className="img-select"
                      />
                      <div>
                        <p>Varianty</p>
                        <p>2</p>
                      </div>
                    </div>
                    <div className="wrapper-right-btn">
                      <p>Další</p>
                      <img
                        src={infoproduct.img}
                        alt="img"
                        className="img-select"
                      />
                    </div>
                  </div>
                  <div
                    className={`wrapper-arrow-down ${
                      open ? "arrow-up" : "arrow-down"
                    }`}
                  >
                    <span></span>
                    <span></span>
                  </div>
                </button>
                {open && (
                  <ul className="select-list">
                    <li onClick={() => setOpen((prev) => !prev)}>
                      <img
                        className="img-select"
                        src={infoproduct.img}
                        alt="img"
                      />
                      <div className="wraper-count-skladem">
                        <p>4 + 0</p>
                        <p>Skladem</p>
                      </div>
                    </li>
                    <li onClick={() => setOpen((prev) => !prev)}>
                      <img
                        className="img-select"
                        src={infoproduct.img}
                        alt="img"
                      />
                      <div className="wraper-count-skladem">
                        <p>4 s aktivním potlačováním hluku + 1400,-</p>
                        <p>Skladem</p>
                      </div>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="wrapper-select-btn">
              <div className="btn-select">
                <p>Nový</p>
                <p>2 990,-</p>
              </div>
              <div className="btn-select">
                <p>Zánovní</p>
                <p>2 929,-</p>
              </div>
            </div>
            <div className="wrapper-checkbox-bg">
              <div className="wrapper-chackbox">
                <input type="checkbox" />
                <div className="wrapper-img-bluetoothe">
                  <img src="src/assets/JA065b1.webp" alt="img" />
                </div>
                <p className="checkbox-text">
                  Bluetooth lokalizační čip - Apple AirTag
                </p>
                <span>656,-</span>
                <span className="usetrite">Ušetříte 73,-</span>
              </div>
              <div className="wrapper-chackbox">
                <input type="checkbox" />
                <p className="checkbox-text">Pojištění prodloužené záruky</p>
                <span>478,-</span>
              </div>
              <div className="wrapper-chackbox">
                <input type="checkbox" />
                <p className="checkbox-text">
                  Pojištění proti rozbití a krádeži
                </p>
                <span>403,-</span>
              </div>
              <div className="wrapper-chackbox">
                <input type="checkbox" />
                <p className="checkbox-text">Možnost vrácení zboží do 60 dnů</p>
                <span>209,-</span>
              </div>
            </div>
            <div className="wrapper-deliveri">
              <a href="#" className="info-skladem">
                Skladem &gt; {infoproduct.skladem} ks
              </a>
              <div className="wraper-doruceni">
                <img
                  src="src/assets/unknown-delivery.svg"
                  alt="img-doruceni"
                  className="img-doruceni"
                />
                <a href="#">Zjistit přesný termín doručení</a>
              </div>
              <div className="wrapper-alzabox">
                <div className="wrapper-left-alzabox">
                  <img
                    src="src/assets/alzabox-promo.svg"
                    alt="img"
                    className="img-alzabox"
                  />
                  <p className="text-objednas">
                    Do půlnoci objednáš, ráno v AlzaBoxu máš.
                  </p>
                </div>
                <a className="link-info" href="#">
                  info
                </a>
              </div>
            </div>
            <div className="wrapper-btn-add-cart">
              <div className="wrapper-btn-add-cart-left">
                <p className="price-left">2 990,-</p>
                <p className="text-dph">bez DPH 2 471,-</p>
                <div className="wrapper-garance">
                  <img
                    src="src/assets/high-quality.png"
                    alt="img-garance"
                    className="img-garance"
                  />
                  <span>Garance nejlepší ceny</span>
                </div>
                <button className="btn-add-cart-alzabox">Do Alzaboxu</button>
              </div>
              <div className="wrapper-btn-add-cart-left">
                <p className="price-right">
                  <img
                    src="src/assets/home_credit_compact.svg"
                    alt="img-home"
                  />
                  Home Credit AKCE
                </p>
                <div className="text-urok">
                  <p>
                    <strong>3,9%</strong> úrok
                  </p>
                  <p>od 129,- měsíčně</p>
                </div>
                <div className="wrapper-koupit-right">
                  <span>Koupit na splátky</span>
                </div>
                <button
                  onClick={() => handleAddtoCart(infoproduct.id)}
                  className="btn-add-cart-alzabox-right"
                >
                  Do košíku
                </button>
              </div>
            </div>
            <div className="wrapper-do-oblibene">
              <div className="oblibene">
                <img
                  src="src/assets/heart.png"
                  alt="img-hard"
                  className="img-add-oblibene"
                />
                <span onClick={() => handleAddOblibene(infoproduct.id)}>
                  Přidat do seznamu
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Infoproduct;
