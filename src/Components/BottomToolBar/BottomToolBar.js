import "./BottomToolBar.css";
import { NavContext } from "../../Context/NavContext";
import { DataContext } from "../../Context/DataContext";
import { useContext } from "react";

function BottomToolBar({ gotoAction }) {
  const { sectionName, setSectionName } = useContext(NavContext);
  const { data } = useContext(DataContext);
  return (
    <header id="header-responsive" className="d-lg-none d-md-none">
      <nav className="responsive-nav">
        <ul>
          <li
            className={sectionName === "Inicio" ? "active" : ""}
            onClick={() => {
              gotoAction("Home");
              setSectionName("Inicio");
            }}
          >
            <i className="ion-ios-home"></i>
          </li>
          <li
            className={sectionName === "Sobre nosotros" ? "active" : ""}
            onClick={() => {
              gotoAction("AboutUs");
              setSectionName("Sobre nosotros");
            }}
          >
            <i className="ion-android-document"></i>
          </li>
          <li
            className={sectionName === "Departamentos" ? "active" : ""}
            onClick={() => gotoAction("Departments")}
          >
            <i className="ion-android-bookmark"></i>
          </li>
          <li
            className={sectionName === "Portafolio" ? "active" : ""}
            onClick={() => gotoAction("Portfolio")}
          >
            <i className="ion-android-playstore"></i>
          </li>
          <li>
            <a
              className="ion-android-mail"
              href={`mailto:${data.header.supportEmail}`}
              title="Envianos un correo"
              rel="noopener noreferrer"
              target="_blank"
              style={{ textDecoration: "none", color: "#413e66" }}
            >{` `}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default BottomToolBar;
