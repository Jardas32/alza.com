import "../css/prihlasenimenufooter.css";
import { Link } from "react-router-dom";
import { prihlasitse } from "../data/data";
import { allDataMenu } from "../data/data";
import { FaLock } from "react-icons/fa6";
import { useCart } from "../components/CartContext";

function MenuPage() {
  const { user, registration, logOut } = useCart();

  return (
    <div className="wrapper-prihlaseni-footer-acount">
      <div className="wrapper-prihlaseni-footer-left">
        {!user && (
          <div
            onClick={() => registration()}
            className="list-li-category prihlasitse-text"
          >
            <Link className="list-link">
              <div className="wrapper-category-text">
                <img
                  className="list-category-icon"
                  src={allDataMenu.prihlasitse.icon}
                  alt="icon-prihlasitse"
                />
                <span className="list-category-text">
                  {allDataMenu.prihlasitse.text}
                </span>
              </div>
            </Link>
          </div>
        )}

        <ul className="list-menu">
          {allDataMenu.allListMenu.map((item) => (
            <ul key={item.id} className="list-menu">
              <li key={item.id} className="list-title">
                {item.listName}
              </li>
              {item.listCategories.map((category) => (
                <li key={category.id} className="list-li-category">
                  <Link className="list-link">
                    <div className="wrapper-category-text">
                      <img
                        className="list-category-icon"
                        src={category.icon}
                        alt="icon"
                      />
                      <span className="list-category-text">
                        {category.text}
                      </span>
                    </div>

                    {!user && category.isAuth && (
                      <FaLock className="lock-link" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </ul>

        {user && (
          <div
            onClick={() => logOut()}
            className="list-li-category prihlasitse-text"
          >
            <Link className="list-link">
              <div className="wrapper-category-text">
                <img
                  className="list-category-icon"
                  src={allDataMenu.odhlasitse.icon}
                  alt="icon-odhlasitse"
                />
                <span className="list-category-text">
                  {allDataMenu.odhlasitse.text}
                </span>
              </div>
            </Link>
          </div>
        )}
      </div>

      <div className="wrapper-prihlaseni-right">
        {prihlasitse?.rightPrihlaseni && (
          <>
            <div className="wrapper-user-left">
              <div className={`wrapper-user-img ${user ? "active" : ""}`}>
                <img
                  className={`icon-user ${user ? "active" : ""}`}
                  src={user ? user.img : prihlasitse.rightPrihlaseni.icon}
                  alt="icon-blue"
                />
              </div>

              <div className="wrapper-user-info">
                <h4 className="user-name">{user?.username}</h4>
                <h5 className="user-email">{user?.email}</h5>
              </div>
            </div>

            {user && (
              <div className="wrapper-alzaplus">
                <h3>
                  <span>alza</span>
                  <span>plus+</span>
                </h3>
                <p className="doruceni-text">
                  Doručení ZDARMA už od 25 Kč měsíčně
                </p>
                <p className="neplate-text">
                  Neplaťte za doručení do AlzaBoxů, na prodejny a další odběrná
                  místa.
                </p>
                <Link>Více o AlzaPlus+</Link>
              </div>
            )}

            {!user && (
              <>
                <h4>{prihlasitse.rightPrihlaseni.textVyhody}</h4>
                <p>{prihlasitse.rightPrihlaseni.podrobnosti}</p>

                <Link to="/login">
                  {prihlasitse.rightPrihlaseni.prihlasitse}
                </Link>
                <Link to="/registration">
                  {prihlasitse.rightPrihlaseni.noveRegistrace}
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default MenuPage;
