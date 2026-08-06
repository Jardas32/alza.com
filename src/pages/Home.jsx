import "../css/home.css";
import Carusel from "../components/Caruselnejleosi";
import Caruselappleproducts from "../components/Caruselappleproducts";
import Caruselnovinky from "../components/Caruselnovinky";
import Novinky from "../components/Novinky";
import Caruselznacky from "../components/Caruselznacky";
import Znacky from "../components/Znacky";
import Footer from "../components/Footer";
import { useCart } from "../components/CartContext";

function Home() {
  const { products, category } = useCart();

  return (
    <>
      <div className="wrapper-content-main">
        <div className="wrapper-banner wrapper-top-hidden">
          <div className="top-banner wrapper-img-banner">
            <img
              src="./AD10_banner_1025x250_BEZ_CTA_CZ.jpg"
              alt="img-banner"
              className="img-banner"
            />
          </div>
          <div className="bottom-banners">
            <div className="wrapper-img-banner">
              <img
                src="https://image.alza.cz/Foto/ImgGalery/bannery/v2/74c22377-ce3b-4339-b0c7-392bf84eb213.jpg"
                className="img-banner"
              />
            </div>
            <div className="wrapper-img-banner">
              <img
                src="https://image.alza.cz/Foto/ImgGalery/bannery/v2/e8364a29-14b8-4f33-b95b-168fd15ba230.jpg"
                className="img-banner"
              />
            </div>
            <div className="wrapper-img-banner">
              <img
                src="https://image.alza.cz/Foto/ImgGalery/bannery/v2/766e7690-7a17-415b-afc6-1a4b0f7ae83b.jpg"
                className="img-banner"
              />
            </div>
          </div>
        </div>
        <div className="wrapper-category">
          <ul className="category">
            {category.map((item) => (
              <li key={item.id}>
                <span>
                  <img src={item.img} alt="icon" />
                </span>
                <a className="category-icon" href="#">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="wrapper-banner">
          <div className="top-banner wrapper-img-banner wrapper-bottom-hidden">
            <img
              src="./AD10_banner_1025x250_BEZ_CTA_CZ.jpg"
              alt="img-banner"
              className="img-banner"
            />
          </div>
          <div className="bottom-banners wrapper-bottom-hidden">
            <div className="wrapper-img-banner">
              <img
                src="https://image.alza.cz/Foto/ImgGalery/bannery/v2/74c22377-ce3b-4339-b0c7-392bf84eb213.jpg"
                className="img-banner"
              />
            </div>
            <div className="wrapper-img-banner">
              <img
                src="https://image.alza.cz/Foto/ImgGalery/bannery/v2/e8364a29-14b8-4f33-b95b-168fd15ba230.jpg"
                className="img-banner"
              />
            </div>
            <div className="wrapper-img-banner">
              <img
                src="https://image.alza.cz/Foto/ImgGalery/bannery/v2/766e7690-7a17-415b-afc6-1a4b0f7ae83b.jpg"
                className="img-banner"
              />
            </div>
          </div>
          <div className="wrapper-nejlepsi">
            <p className="text-nejlepsi">To nejlepší z Alza dnů!</p>
            <Carusel products={products.slice(0, 8)} />
          </div>
          <div className="wrapper-nejlepsi">
            <p className="text-nejlepsi">To nejlepší z Apple produktů</p>
            <Caruselappleproducts products={products.slice(8, 16)} />
          </div>
          <Caruselznacky />
          <div className="wrapper-nejlepsi">
            <p className="text-nejlepsi">Novinky</p>
            <Caruselnovinky products={products.slice(16)} />
          </div>
          <Novinky />
          <Znacky />
          <div className="wrapper-alza-plus">
            <div className="wrapper-card-alzaplus">
              <p>
                Užij si doručení zdarma s
                <img
                  className="img-plus"
                  src="./alzaplus-logo-white (1).svg"
                  alt=""
                />
              </p>
              <p>
                Pořiď si roční členství AlzaPlus+. Vyplatí se ti klidně už od
                prvního nákupu!
              </p>
              <div className="wrapper-button-alzaplus">
                <button className="btn-alza-plus">Koupit za 299 Kč</button>
                <button className="btn-alza-plus">Více informací</button>
              </div>
            </div>
            <div className="wrapper-img-alza-plus">
              <div className="wrapper-cena-mesic">
                <p className="text-cena-mesic">
                  <i>25Kč</i> <br /> <strong>měsíčně</strong> <br />
                  Při roční platbě
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
