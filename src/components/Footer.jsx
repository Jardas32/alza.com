import "../css/footer.css";

const arrVihody = [
  {
    id: 1,
    img: "./best-eshop.svg",
    text: "Nejspolehlivější internetový obchod v ČR",
  },
  {
    id: 2,
    img: "./same-day-delivery.svg",
    text: "Zboží doručíme již v den objednání",
  },
  {
    id: 3,
    img: "./nonstop-support.svg",
    text: "Nonstop dostupná zákaznická podpora",
  },
  {
    id: 4,
    img: "./free-delivery.svg",
    text: "Doručení zdarma na cokoliv s AlzaPlus+",
  },
  {
    id: 5,
    img: "./pickup-places.svg",
    text: "Prodejny a odběrná místa po celé ČR",
  },
];

const arrZnackyFirem = [
  {
    id: 1,
    img: "./mastercard.svg",
  },
  {
    id: 2,
    img: "./maestro.svg",
  },
  {
    id: 3,
    img: "./visa.svg",
  },
  {
    id: 4,
    img: "./isic.svg",
  },
  {
    id: 5,
    img: "./mastercard-obchodnik-cz.svg",
  },
  {
    id: 6,
    img: "./kristalova-lupa.webp",
  },
  {
    id: 7,
    img: "./udrzitelny-eshop.webp",
  },
];

function Footer() {
  return (
    <div className="wrapper-footer">
      <div className="wrapper-images">
        {arrVihody.map((item) => {
          return (
            <div key={item.id} className="card-vihody">
              <img src={item.img} alt="img" className="img-vihody" />
              <p className="text-vihody">
                {item.text.slice(0, 17)} <br />
                {item.text.slice(17)}
              </p>
            </div>
          );
        })}
      </div>
      <div className="wrapper-banner-footer">
        <div className="wrapper-banner-left">
          <p className="text-banner-footer">Nákupy pod palcem s aplikací</p>
          <p className="text-banner-footer">Alza</p>
          <p className="text-banner-footer">
            Nakupuj pohodlně s naší aplikací, ať jsi kdekoliv.
          </p>
          <p className="text-banner-footer">Více o aplikaci</p>
        </div>
        <div className="wrapper-banner-center-img">
          <img src="./qr.svg" alt="qarcod" className="img-qarcod" />
          <div className="wrapper-google-app">
            <div className="wrapper-googles">
              <img src="./app-store.svg" alt="img" className="img-app-google" />
            </div>
            <div className="wrapper-googles">
              <img
                src="./google-play.svg"
                alt="img"
                className="img-app-google"
              />
            </div>
          </div>
        </div>
        <div className="wrapper-banner-footer-right">
          <img className="img-phone" src="./alzak.png" alt="img-" />
        </div>
      </div>
      <div className="wrapper-znacky-firem">
        {arrZnackyFirem.map((images) => {
          return (
            <div key={images.id} className="card-znacky-firem">
              <img src={images.img} alt="img-firma" className="img-firma" />
            </div>
          );
        })}
      </div>
      <div className="wrapper-footer-content">
        <ul className="wrappet-footer-textcontent">
          <li>Nakupování</li>
          <li>Možnosti doručení</li>
          <li>Možnosti platby</li>
          <li>Reklamace a vrácení</li>
          <li>Prodejní síť Alza</li>
          <li>Nákup na splátky</li>
          <li>Obchodní podmínky</li>
          <li>Přehled služeb</li>
          <li>Podmínky reklamy</li>
          <li>Podvody a</li>
          <li>bezpečnost</li>
        </ul>
        <ul className="wrappet-footer-textcontent">
          <li>Objednávky</li>
          <li>Stav objednávky</li>
          <li>Stav reklamace</li>
          <li>Jak nakoupit</li>
        </ul>
        <ul className="wrappet-footer-textcontent">
          <li>O nás</li>
          <li>Kontakt</li>
          <li>Kontakty lékárna</li>
          <li>Základní informace</li>
          <li>Historie a současnost</li>
          <li>Mise a vize</li>
          <li>Kariéra</li>
          <li>Pro média</li>
          <li>Aplikace</li>
          <li>Sklady / LC</li>
          <li>Compliance</li>
        </ul>
        <ul className="wrappet-footer-textcontent">
          <li>Služby</li>
          <li>Alza pro firmy</li>
          <li>AlzaNEO pronájem</li>
          <li>AlzaPlus+</li>
          <li>Alza affiliate</li>
          <li>Alza pro studenty</li>
          <li>AlzaTrade</li>
          <li>Alza Invoice</li>
          <li>Financing</li>
        </ul>
        <div className="wrapper-soc">
          <p className="text-sledujte">Sledujte nás</p>
          <div className="wrapper-center-soc-img">
            <div className="wrapper-img-soc">
              <img src="./facebook.svg" alt="img" className="imgSoc" />
            </div>
            <div className="wrapper-img-soc">
              <img src="./instagram.svg" alt="img" className="imgSoc" />
            </div>
            <div className="wrapper-img-soc">
              <img src="./youtube.svg" alt="img" className="imgSoc" />
            </div>
            <div className="wrapper-img-soc">
              <img src="./twitter.svg" alt="img" className="imgSoc" />
            </div>
          </div>
          <div className="wrapper-language">
            <p className="text-language">Jazyk webu (website language)</p>
            <p className="wrapper-img-cz">
              <img src="./cz.png" alt="img" className="imgCz" />
              <span>CZ</span>
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper-footer-bottom">
        <img src="./heart.png" alt="img-heart" className="img-heart" />© 1994 -
        2025 Alza.cz a.s.
      </div>
    </div>
  );
}

export default Footer;
