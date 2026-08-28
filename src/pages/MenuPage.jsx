import "../css/menu.css";
import { Link } from "react-router-dom";
import { prihlasitse } from "../data/data";
import { allDataMenu } from "../data/data";

console.log(allDataMenu.prihlasitse.text);

allDataMenu.allListMenu.map((item) => console.log(item.listCategories));

console.log(allDataMenu.odhlasitse.text);

function MenuPage() {
  return (
    <div className="wrapper-prihlaseni-footer-acount">
      <div className="wrapper-prihlaseni-footer-left">
        <div className="list-li-category prihlasitse-text">
          <Link className="list-link">
            <img
              className="list-category-icon"
              src={allDataMenu.prihlasitse.icon}
              alt="icon-prihlasitse"
            />
            <span className="list-category-text">
              {allDataMenu.prihlasitse.text}
            </span>
          </Link>
        </div>

        <ul className="list-menu">
          {allDataMenu.allListMenu.map((item) => (
            <ul key={item.id} className="list-menu">
              <li key={item.id} className="list-title">
                {item.listName}
              </li>
              {item.listCategories.map((category) => (
                <li key={category.id} className="list-li-category">
                  <Link className="list-link">
                    <img
                      className="list-category-icon"
                      src={category.icon}
                      alt="icon"
                    />
                    <span className="list-category-text">{category.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </ul>

        <div className="list-li-category prihlasitse-text">
          <Link className="list-link">
            <img
              className="list-category-icon"
              src={allDataMenu.odhlasitse.icon}
              alt="icon-odhlasitse"
            />
            <span className="list-category-text">
              {allDataMenu.odhlasitse.text}
            </span>
          </Link>
        </div>
      </div>

      <div className="wrapper-prihlaseni-right">
        {prihlasitse?.rightPrihlaseni && (
          <>
            <img src={prihlasitse.rightPrihlaseni.icon} alt="icon-blue" />

            <h4>{prihlasitse.rightPrihlaseni.textVyhody}</h4>
            <p>{prihlasitse.rightPrihlaseni.podrobnosti}</p>

            <Link to="/login">{prihlasitse.rightPrihlaseni.prihlasitse}</Link>
            <Link to="/registration">
              {prihlasitse.rightPrihlaseni.noveRegistrace}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default MenuPage;
