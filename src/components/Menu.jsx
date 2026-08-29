import "../css/prihlasenimenuheader.css";
import { Link } from "react-router-dom";
import { prihlasitse } from "../data/data";
import { useCart } from "./CartContext";

function Menu() {
  const { user, registration, logOut } = useCart();

  const menuSlice = prihlasitse.leftPrihlaseni.slice(
    1,
    prihlasitse.leftPrihlaseni.length - 1
  );

  return (
    <>
      <div className="wrapper-prihlaseni-left">
        <div className="wrapper-flex-list">
          {!user && (
            <div
              onClick={() => registration()}
              className="card-prihlaseni-header"
            >
              <Link className="card-prihlaseni-header-link">
                <img
                  width={20}
                  height={20}
                  className="svg-prihlaseni"
                  src={prihlasitse.leftPrihlaseni[0].svg}
                  alt="svg"
                />
                <span>{prihlasitse.leftPrihlaseni[0].name}</span>
              </Link>
            </div>
          )}

          {menuSlice.map((pri) => (
            <div key={pri.id} className="card-prihlaseni-header">
              <Link className="card-prihlaseni-header-link">
                <img
                  width={20}
                  height={20}
                  className="svg-prihlaseni"
                  src={pri.svg}
                  alt="svg"
                />
                <span>{pri.name}</span>
              </Link>
            </div>
          ))}

          {user && (
            <div onClick={() => logOut()} className="card-prihlaseni-header">
              <Link className="card-prihlaseni-header-link">
                <img
                  width={20}
                  height={20}
                  className="svg-prihlaseni"
                  src={
                    prihlasitse.leftPrihlaseni[
                      prihlasitse.leftPrihlaseni.length - 1
                    ].svg
                  }
                  alt="svg"
                />
                <span>
                  {
                    prihlasitse.leftPrihlaseni[
                      prihlasitse.leftPrihlaseni.length - 1
                    ].name
                  }
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="wrapper-prihlaseni-header-right">
        {prihlasitse?.rightPrihlaseni && (
          <div className="wrapper-prihlaseni-header-right-bg">
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

            <h4>{prihlasitse.rightPrihlaseni.textVyhody}</h4>
            <p>{prihlasitse.rightPrihlaseni.podrobnosti}</p>

            <Link to="/login">{prihlasitse.rightPrihlaseni.prihlasitse}</Link>
            <Link to="/registration">
              {prihlasitse.rightPrihlaseni.noveRegistrace}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Menu;
