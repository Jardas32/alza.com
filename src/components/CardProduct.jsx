import "../css/cardproduct.css";
import { Link, useParams } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { useCart } from "./CartContext";

function CardProduct({ product, index }) {
  const { handleInfoProduct } = useCart();
  const { categories, category, selectcategory } = useParams();

  return (
    <div className={`wrapper-cardProduct ${index > 3 ? "active" : ""}`}>
      <div
        onClick={() => handleInfoProduct(product)}
        className="wrapper-cardProduct-img"
      >
        <Link
          to={`/${encodeURIComponent(categories)}/${encodeURIComponent(
            category
          )}/${encodeURIComponent(selectcategory)}/${encodeURIComponent(
            product.title
          )}`}
        >
          <img className="img-cardProduct" src={product.img} alt="img" />
        </Link>
      </div>

      <div className="wrapper-body-cardProduct">
        <div className="wrapper-rating-cardProduct">
          <div className="wrapper-stars-cardProduct">
            <div className="wrapper-starts-img">
              {Array.from({ length: 5 }).map((_, index) => (
                <img
                  key={index}
                  className="img-start-cardProduct"
                  src="./star.png"
                  alt="img-star"
                />
              ))}
            </div>
            <span className="rating-number">{product.rating}</span>

            <span className="rating-pepel">115x</span>
          </div>

          <div className="wrapper-oblibene-icon">
            <IoIosHeart className="icon-heart-oblibene" />
          </div>
        </div>

        <h2 className="title-cardProduct">{product.title}</h2>

        <p className="desc-cardProduct">{product.description}</p>
      </div>

      <div className="wrapper-price-cardProduct">
        <span className="price-cardProduct">
          {product.price.toLocaleString("cs-CZ", {
            style: "currency",
            currency: "CZK",
            minimumFractionDigits: 0,
          })}
        </span>

        <button className="btn-add-cart-cardProduct">
          <MdShoppingCart className="icon-btn-add" />
          <span className="text-btn-add">Do košíku</span>
        </button>
      </div>

      <div className="wrapper-skladem-cardProduct">
        <p>Skladem - {product.skladem}ks</p>
      </div>

      <div className="wrapper-footer-cardProduct">
        <div className="alza-promo-img">
          <img src="./alzabox-promo.svg" alt="alza-promo" />
        </div>

        <p className="alza-promo-text">
          Do půlnoci objednáš, ráno v AlzaBoxu máš.
        </p>

        <Link className="alza-promo-link">info</Link>
      </div>
    </div>
  );
}

export default CardProduct;
