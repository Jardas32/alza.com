import { Link } from "react-router-dom";
import "../css/backelink.css";

function BackeLink({ items }) {
  return (
    <div className="wrapper-backelink">
      <div className="wrapper-backelonk-scroll">
        {items.map((item, index) => (
          <div className="page-link" key={index}>
            {index > 0 && " > "}

            {item.path ? (
              <Link className="page-link" to={item.path}>
                {index === 0 ? (
                  <img className="backelink-home" src="./home.png" alt="home" />
                ) : (
                  item.name
                )}
              </Link>
            ) : (
              <span className={`page-link ${index > 0 ? "active" : ""}`}>
                {item.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BackeLink;
