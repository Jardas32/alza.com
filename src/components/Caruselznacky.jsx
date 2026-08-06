import "../css/caruselznacky.css";
import { useState, useEffect, useRef } from "react";

function Caruselznacky() {
  const items = [
    {
      img: "./logo-alzapower.svg",
      text: "Příslušenství k mobilům a notebookům",
    },
    {
      img: "./logo-siguro.svg",
      text: "Domácí elektro spotřebiče",
    },
    {
      img: "./logo-alzaergo.svg",
      text: "Ergonomická kancelář pro každého",
    },
    {
      img: "./logo-alzaguard.svg",
      text: "Ochrana mobilů a tabletů",
    },
    {
      img: "./logo-rapture.svg",
      text: "Elitní výbava pro hráče",
    },
    {
      img: "./logo-siguro.svg",
      text: "Domácí elektro spotřebiče",
    },
    {
      img: "./logo-alzaergo.svg",
      text: "Ergonomická kancelář pro každého",
    },
    {
      img: "./logo-alzacafe.svg",
      text: "Káva, za kterou (si) stojíme",
    },
  ];

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

  const showLeft = translateX < 0;
  const showRight = translateX > MAX_SHIFT;

  const next = () => {
    setTranslateX((prev) => Math.max(prev - STEP, MAX_SHIFT));
  };

  const prev = () => {
    setTranslateX((prev) => Math.min(prev + STEP, 0));
  };

  return (
    <div className="wrapper-znacky">
      <div className="wrapper-text-znacky">
        <h4 className="text-znacky">
          Naše značky. <br /> Kvalita za skvělou cenu.
        </h4>
        <button className="btn-vsechny-znacky">Všechny naše značky</button>
      </div>

      <div className="wrapper-carusel-znacky">
        {showLeft && (
          <button
            onClick={prev}
            className="btn-arrow-znacky btn-left-znacky"
            aria-label="Scroll left"
          >
            <span></span>
            <span></span>
          </button>
        )}

        <div ref={containerRef} className="slider">
          <div
            ref={trackRef}
            className="slider-track"
            style={{
              transform: `translateX(${translateX}px)`,
            }}
          >
            {items.map((item, i) => (
              <div key={i} className="card-slider">
                <img src={item.img} alt="" className="img-card-znacky" />
                <p className="text-content-znacky">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {showRight && (
          <button
            onClick={next}
            className="btn-arrow-znacky btn-right-znacky"
            aria-label="Scroll right"
          >
            <span></span>
            <span></span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Caruselznacky;
