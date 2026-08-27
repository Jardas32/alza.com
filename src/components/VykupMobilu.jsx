import "../css/vykupmobilu.css";
import { vykupMobilu } from "../data/data";

function VykupMobilu() {
  return (
    <div className="wrapper-vykupmobilu">
      <p className="left-text">
        <strong>Výkup mobilů, tabletů a chytrých hodinek</strong>
        <br /> Získej peníze za své staré zařízení na nákup nového.
      </p>

      <div className="wrapper-vykupmobilu-grids">
        {vykupMobilu.map((vykup) => (
          <div key={vykup.id} className="vykup-card">
            <img src={vykup.icon} alt="icon" />
            <p className="vykup-desc">{vykup.text}</p>
          </div>
        ))}
      </div>

      <button className="btn-vice">Vice</button>
    </div>
  );
}

export default VykupMobilu;
