import "../css/cart.css";
import { useCart } from "../components/CartContext";
import { Link } from "react-router-dom";
import { Fragment } from "react";

function Cart() {
  const { cart, totalPrice, quantityMainus, quantityPlus, deleteProductCart } =
    useCart();

  return (
    <div className="wrapper-cart-bg">
      <div className="wrapper-cart-top">
        {cart.length === 0 && (
          <div className="wrapper-empty">
            <div className="wrapper-img-empty">
              <img
                src="./bg-basket-empty.png"
                alt="img-empty"
                className="img-empty"
              />
              <p className="text-empty-cart">Jsem tak prázdný...</p>
            </div>
            <Link className="link-home" to="/">
              Zobrazit katalog
            </Link>
          </div>
        )}
        <div className="wrapper-cart">
          <table className="wrapper-product-bg">
            {cart.map((product) => (
              <Fragment key={product.id}>
                <tbody className="product">
                  <tr className="wrapper-product">
                    <td className="product-img">
                      <img
                        src={product.img}
                        alt="img-product"
                        className="img-product"
                      />
                    </td>
                    <td className="product-title">
                      <a className="title" href="#">
                        {product.title}
                      </a>
                    </td>
                    <td>
                      <div className="wrapper-quantity">
                        <div
                          onClick={() => quantityMainus(product.id)}
                          className="mainus"
                        >
                          -
                        </div>
                        <div className="quantity">
                          <input
                            type="text"
                            className="count-quantity"
                            value={product.quantity}
                            readOnly
                          />
                        </div>
                        <div
                          onClick={() => quantityPlus(product.id)}
                          className="plus"
                        >
                          +
                        </div>
                      </div>
                    </td>
                    <td className="product-skladem">
                      <p className="skladem">
                        Skladem <span>{product.skladem} ks</span>
                      </p>
                    </td>
                    <td className="product-price">
                      <p className="price">
                        {(product.price * product.quantity).toLocaleString(
                          "cs-CZ",
                          {
                            style: "currency",
                            currency: "CZK",
                            maximumFractionDigits: 0,
                          }
                        )}
                      </p>
                    </td>
                    <td className="product-delete">
                      <button
                        onClick={() => {
                          deleteProductCart(product.id);
                        }}
                        className="btn-delete"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tbody className="wrapper-bottom-body">
                  <tr className="row-bottom-product">
                    <td></td>
                    <td style={{ textAlign: "start" }}>
                      <div className="wrapper-td-img">
                        <img
                          src="./warranty-prodlouzenaZaruka.webp"
                          alt="img"
                          className="img-icon"
                        />
                        <input type="checkbox" />
                        <span>Pojištění prodloužené záruky + 1 rok</span>
                        <span>209 Kč</span>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="row-bottom-product">
                    <td></td>
                    <td style={{ textAlign: "start" }}>
                      <div className="wrapper-td-img">
                        <img
                          src="./warranty-okamzitaVymena.webp"
                          alt="img"
                          className="img-icon"
                        />
                        <input type="checkbox" />
                        <span>Záruka okamžité výměny</span>
                        <span>242 Kč</span>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="row-bottom-product">
                    <td></td>
                    <td style={{ textAlign: "start" }}>
                      <div className="wrapper-td-img">
                        <img
                          src="./warranty-pojisteniZbozi.webp"
                          alt="img"
                          className="img-icon"
                        />
                        <input type="checkbox" />
                        <span>Pojištění proti rozbití a krádeži na 1 rok</span>
                        <span>209 Kč</span>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Fragment>
            ))}
          </table>
        </div>
      </div>
      <div className="wrapper-cart-bottom">
        <Link to="/" className="btn-zpet">
          Zpět k nákupu
        </Link>
        {cart.length > 0 && (
          <div className="wrapper-pokrocovat">
            <div className="wrapper-cena-total">
              <p className="text-cena">Cena k úhradě s DPH</p>
              <p className="price-total">
                {totalPrice.toLocaleString("cz")} Kč
              </p>
            </div>
            <button className="btn-pokrocovat">Pokračovat</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
