import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/caruselawiper.css";

function CaruselSwiper({ mobily }) {
  const { cart, handleInfoProduct, handleAddtoCart } = useCart();

  return (
    <div className="wrapper-caruselswiper">
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={true}
        speed={600}
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          375: {
            slidesPerView: 1,
          },
          560: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 4,
          },
        }}
      >
        {mobily.map((product) => (
          <SwiperSlide className="swiper-slide" key={product.id}>
            <div
              onClick={() => handleInfoProduct(product)}
              key={product.id}
              className="wrapper-carusel-card"
            >
              <Link
                to={`/${encodeURIComponent(
                  product.allcategories
                )}/${encodeURIComponent(
                  product.categories
                )}/${encodeURIComponent(product.category)}/${encodeURIComponent(
                  product.title
                )}`}
              >
                <div className="wrapper-bg-img">
                  <img src={product.img} alt="img" className="img-card" />
                </div>
              </Link>
              <div className="wrapper-stars">
                <div className="wrapper-starts-img">
                  {Array.from({ length: product.rating }).map((_, index) => (
                    <img
                      key={index}
                      className="img-start"
                      src="./star.png"
                      alt="img-star"
                    />
                  ))}
                </div>
                <span>{product.rating}</span>

                <span>1135x</span>
              </div>

              <h4 className="card-title">{product.title.slice(0, 40)}...</h4>

              <div className="wrapper-price">
                <p
                  style={{
                    color: "red",
                    fontSize: "20px",
                    fontFamily: "var(--fontfamaly)",
                    fontWeight: "600",
                  }}
                  className="price-carusel-apple"
                >
                  {product.price.toLocaleString("cs-CZ", {
                    style: "currency",
                    currency: "CZK",
                    minimumFractionDigits: 0,
                  })}
                </p>
              </div>
              {!cart.find((p) => p.id == product.id) ? (
                <button
                  onClick={() => handleAddtoCart(product)}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CaruselSwiper;
