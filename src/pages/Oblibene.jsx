import "../css/oblibene.css";
import { useCart } from "../components/CartContext";
import { FaShoppingCart } from "react-icons/fa";

function Oblibene() {
  const {
    oblibene,
    quantityMainus,
    quantityPlus,
    deleteProductCart,
    handleAddtoCart,
    inCart,
  } = useCart();

  return (
    <div className="wrapper-oblibene-bg">
      <div className="wrapper-oblibene-count">
        Oblíbené: <span>{oblibene.length}</span>
      </div>
      <div className="wrapper-oblibene-grid">
        {oblibene.map((product) => (
          <div key={product.id} className="oblibene-card">
            <img src={product.img} alt="img" className="img-oblibene-card" />

            <h4 className="title-oblibene">{product.title.slice(0, 25)}...</h4>

            {!inCart(product.id) && (
              <div className="wrapper-quantity-oblibene">
                <div
                  onClick={() => quantityMainus(product.id)}
                  className="mainus-oblibene"
                >
                  -
                </div>
                <div className="quantity-oblibene">
                  <input
                    type="text"
                    className="count-quantity-oblibene"
                    value={product.quantity}
                    readOnly
                  />
                </div>
                <div
                  onClick={() => quantityPlus(product.id)}
                  className="plus-oblibene"
                >
                  +
                </div>
              </div>
            )}

            <div className="skladem-oblibene">
              Skladem <span>{product.skladem} ks</span>
            </div>

            <div className="price-oblibene">
              {(product.price * product.quantity).toLocaleString("cs-CZ", {
                style: "currency",
                currency: "CZK",
                maximumFractionDigits: 0,
              })}
            </div>

            <button
              onClick={() => {
                handleAddtoCart(product.id);
                inCart(product.id);
              }}
              className="btn-delete-oblibene"
            >
              <FaShoppingCart />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Oblibene;
