import "../css/menu.css";
import { Link } from "react-router-dom";
import { prihlasitse } from "../data/data";

function Menu() {
  return (
    <>
      <div className="wrapper-prihlaseni-left">
        {prihlasitse.leftPrihlaseni.map((pri) => (
          <div key={pri.id} className="card-prihlaseni">
            <Link className="card-prihlaseni-link">
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
    </>
  );
}

export default Menu;
