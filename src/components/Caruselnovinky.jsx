import { useState, useEffect, useRef } from "react";
import "../css/caruselnovinky.css";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

function Caruselnovinky({ products }) {
  const [index, setIndex] = useState(0);
  const [showRight, setShowRight] = useState(true);
  const [showLeft, setShowLeft] = useState(false);
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);
  const { cart, handleAddtoCart, handleInfoProduct } = useCart();

  useEffect(() => {
    function update() {
      if (containerRef.current) {
        setWidth(containerRef.current.clientWidth);
      }
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const MAX_SHIFT = -980;
  const STEP = width;

  const next = () => {
    setIndex((prev) => {
      const newIndex = prev - STEP;
      if (newIndex <= MAX_SHIFT) {
        setShowRight(false);
        setShowLeft(true);
        return MAX_SHIFT;
      }
      setShowLeft(true);
      return newIndex;
    });
  };

  const prev = () => {
    setIndex((prev) => {
      const newIndex = prev + STEP;
      if (newIndex >= 0) {
        setShowLeft(false);
        setShowRight(true);
        return 0;
      }
      setShowRight(true);
      return newIndex;
    });
  };

  return (
    <div ref={containerRef} className="wrapper-carusel">
      {showLeft && (
        <button onClick={prev} className="btn-arrow btn-left">
          <span></span>
          <span></span>
        </button>
      )}
      <div style={{ transform: `translateX(${index}px)` }} className="slider">
        {products.map((product) => (
          <div key={product.id} className="wrapper-carusel-card">
            <Link to="/infoproduct">
              <div
                onClick={() => handleInfoProduct(product)}
                className="wrapper-bg-img"
              >
                <img src={product.img} alt="img" className="img-card" />
              </div>
            </Link>
            <h4 className="card-title-novinky">
              {product.title.slice(0, 30)}...
            </h4>
            <div className="wrapper-price-novinky">
              <p className="text-novinka">Novinka</p>
              <p className="price-carusel-novinky">
                {product.price.toLocaleString("cs-CZ", {
                  style: "currency",
                  currency: "CZK",
                  minimumFractionDigits: 0,
                })}
              </p>
            </div>
            {!cart.find((p) => p.id == product.id) ? (
              <button
                onClick={() => handleAddtoCart(product.id)}
                className="btn-add-cart"
              >
                <img
                  style={{ width: "20px" }}
                  src="./cart.png"
                  alt="img-cart"
                  className="img-cart"
                />
                Do košíku
              </button>
            ) : (
              <button className="btn-pridano">Přidáno do košíku</button>
            )}
          </div>
        ))}
      </div>

      {showRight && (
        <button onClick={next} className="btn-arrow btn-right">
          <span></span>
          <span></span>
        </button>
      )}
    </div>
  );
}

export default Caruselnovinky;
