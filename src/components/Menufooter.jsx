import { Link } from "react-router-dom";
import "../css/menufooter.css";
import { useCart } from "../components/CartContext";

function Menu() {
  const { totalProduct } = useCart();
  return (
    <ul className="wrapper-navigation-footer">
      <li>
        <Link to="/">
          <img src="./home.png" alt="img" className="img-objednavky" />
          Domu
        </Link>
      </li>
      <li>
        <Link to="/katalog">
          <img src="./katalog.png" alt="img" className="img-katalog" />
          Katalog
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <div className="wrapper-img-cart">
            <img src="./cart.png" alt="img" className="cart-img" />
            <span className="totalCard totalCard-footer">{totalProduct}</span>
          </div>
          Kosik
        </Link>
      </li>
      <li>
        <Link to="/menu">
          <img src="./stack.png" alt="img" className="flag" />
          Menu
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
