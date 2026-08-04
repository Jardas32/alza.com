import "../css/novinky.css";
import { useState } from "react";

const dataNovinky = [
  {
    img: "src/assets/star-wars-fate-of-the-old-republic-logo-nahled.jpg",
    title: "Oznámeno akční RPG Star Wars: Fate of the Old Republic",
    text: "Na singleplayerovém příběhovém RPG pracuje bývalý ředitel vývoje Knights of the Old Republic a série Mass Effect.",
  },
  {
    img: "src/assets/control-resonant-nahled.jpg",
    title: "Control: Resonant – Vše, co potřebujete vědět",
    text: " Control: Resonant navazuje na příběh paranormálního dobrodružství Control z roku 2019, ve kterém jsme se vžili do Jesse Fayden, která se vydává hledat svého ztraceného bratra Dylana a mimochodem se u toho stane...",
  },
  {
    img: "src/assets/nejlepsi-telefony-2025-2.jpg",
    title: "Nejlepší telefony 2025 (AKTUALIZOVÁNO)",
    text: "Hledáte nejlepší telefony pro rok 2025? V následujícím článku vám přinášíme přehled současných šampiónů. Zahrnuli jsme i ani na nejlepší mobily do 16 000, 10 000, 5 000 Kč a nejlepší mobily pro děti a seniory....",
  },
  {
    img: "src/assets/tomb-raider-legacy-of-atlantis-nahled.jpg",
    title: "Tomb Raider: Catalyst a Tomb Raider remake oznámeny",
    text: "Obě hry pohání Unreal Engine 5 a dočkáme se jich během dvou let.",
  },
  {
    img: "src/assets/divinity-ann-trailer-portal-nahled.jpg",
    title: "Divinity: tvůrci Baldur's Gate 3 se vrací ke kořenům",
    text: "Studio Larian na The Game Awards 2025 představilo svou dosud nejambicióznější hru.",
  },
  {
    img: "src/assets/ubrousky-latkove-jak-slozit.jpg",
    title: "Skládání ubrousků na Vánoce",
    text: "Skládání ubrousků je jednoduchý způsob, jak ozdobit vánoční stůl. Originálně poskládané ubrousky na vašem stole pomohou vytvořit dokonalou vánoční atmosféru. A přitom je to tak jednoduché.",
  },
  {
    img: "src/assets/cyberpunk-2077-5-vyroci-novinka-nahled.jpg",
    title: "Cyberpunk 2077 slaví 5. výročí novým trailerem",
    text: "Efektní ukázka představuje pomyslné ohlédnutí za posledních 5 let v Night City, během kterých se hra proměnila k nepoznání.",
  },
  {
    img: "src/assets/telefony-zima-prevence-maly-zdroj-pexels-001.jpg",
    title: "Telefonům zima nesvědčí. Jak s nimi zacházet při nízkých teplotách",
    text: "Mobilní telefony máme neustále u sebe. I v zimě a třeskutém mrazu. To jim ale úplně nesvědčí. Jak se k telefonům chovat, když je zima a na teploměru pod nulou? Čemu se vyhnout? Poradíme v našem článku.",
  },
  {
    img: "src/assets/kores-hlavni-banner-nahled.jpg",
    title: "Kores tipy na dárky",
    text: "Hledáte dárek, který potěší, inspiruje a zanechá po sobě něco krásného? Zkuste darovat radost z tvoření – s produkty Kores se fantazii meze nekladou.",
  },
];

function Novinky() {
  const [showmore, setShowmore] = useState(false);

  const visibleNews = showmore ? dataNovinky : dataNovinky.slice(0, 3);

  return (
    <div className="wrapper-novinky">
      <p className="text-novinky">Novinky</p>
      <div className="wrapper-novinky-content">
        <div className="wrapper-novinky-card">
          <div className="wrapper-novinky-img">
            <img
              src="src/assets/best-kids-tablet-thumb.jpg"
              alt="img-novinky"
              className="img-novinky"
            />
          </div>
          <a href="#" className="novinky-title">
            Nejlepší tablety pro děti 2025
          </a>
          <p className="novinky-text-content">
            Tablet je skvělou pomůckou pro rozvíjení a vzdělávání dítěte. Který
            ale zvolit, když jich je na trhu nepřeberné množství? Ukážeme si ty
            momentálně nejlepší tablety pro děti a přidáme tipy na užitečné...
          </p>
        </div>
        <div className="wrapper-novinky-card">
          <div className="wrapper-novinky-img">
            <img
              src="src/assets/resident-evil-requiem-grace-alyssa-nahled.jpg"
              alt="img-novinky"
              className="img-novinky"
            />
          </div>
          <a href="#" className="novinky-title">
            Resident Evil Requiem možná nechtěně odhalil další hratelnou postavu
          </a>
          <p className="novinky-text-content">A ne, Leon Kennedy to není.</p>
        </div>
      </div>
      <div className="wrapper-novinky-bottom">
        {visibleNews.map((news, index) => {
          return (
            <div key={index} className="wrapper-novinky-bottom-card">
              <div className="wrapper-novinky-img">
                <img src={news.img} alt="img-novinky" className="img-novinky" />
              </div>
              <a href="#" className="novinky-title">
                {news.title}
              </a>
              <p className="novinky-text-content">{news.text}</p>
            </div>
          );
        })}
      </div>
      <div className="wrapper-btn-vsychny-novinky">
        <button
          onClick={() => setShowmore((prev) => !prev)}
          className="btn-novinky"
        >
          {showmore ? "Skrýt novinky" : "Všechny novinky"}
          <div className="wrapper-arrow">
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Novinky;
