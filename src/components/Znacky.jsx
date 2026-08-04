import "../css/znacky.css";
import { useState, useRef, useEffect } from "react";

const arrZnacky = [
  { id: 1, img: "src/assets/apple_6.webp" },
  { id: 2, img: "src/assets/samsung_6.webp" },
  { id: 3, img: "src/assets/lego_2.webp" },
  { id: 4, img: "src/assets/dell_4.webp" },
  { id: 5, img: "src/assets/lg_2.webp" },
  { id: 6, img: "src/assets/hp_2.webp" },
  { id: 7, img: "src/assets/sony.webp" },
  { id: 8, img: "src/assets/epson_2.webp" },
  { id: 9, img: "src/assets/nikon.webp" },
  { id: 10, img: "src/assets/xiaomi_6.webp" },
];

function Znacky() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const [translateX, setTranslateX] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const updateSizes = () => {
      if (!containerRef.current || !trackRef.current) return;

      setContainerWidth(containerRef.current.clientWidth);
      setTrackWidth(trackRef.current.scrollWidth);
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);

    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  const MAX_SHIFT = Math.min(0, containerWidth - trackWidth);
  const STEP = containerWidth;

  const canScroll = trackWidth > containerWidth;

  const showLeft = canScroll && translateX < 0;
  const showRight = canScroll && translateX > MAX_SHIFT;

  const next = () => {
    setTranslateX((prev) => Math.max(prev - STEP, MAX_SHIFT));
  };

  const prev = () => {
    setTranslateX((prev) => Math.min(prev + STEP, 0));
  };

  return (
    <div className="wrapper-zanacky-bground">
      <div ref={containerRef} className="wrapper-znacky-carusel">
        {showLeft && (
          <button
            onClick={prev}
            className="button-arrow-znacky button-left-znacky"
            aria-label="Scroll left"
          >
            <span></span>
            <span></span>
          </button>
        )}

        {showRight && (
          <button
            onClick={next}
            className="button-arrow-znacky button-right-znacky"
            aria-label="Scroll right"
          >
            <span></span>
            <span></span>
          </button>
        )}
        <div
          ref={trackRef}
          className="carusel-slider"
          style={{
            transform: `translateX(${translateX}px)`,
          }}
        >
          {arrZnacky.map((img) => (
            <div key={img.id} className="card-znacky-carusel">
              <img
                src={img.img}
                alt="img-znacky-carusel"
                className="img-znacky-carusel"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Znacky;
