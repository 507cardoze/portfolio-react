import "./Navigation.css";
import { NavContext } from "../../Context/NavContext";
import { DataContext } from "../../Context/DataContext";
import { useContext } from "react";

const Navigation = ({ gotoAction }) => {
  const { sectionName, setSectionName } = useContext(NavContext);
  const { data } = useContext(DataContext);

  return (
    <header
      id="header"
      className={sectionName !== "Inicio" ? "header-scrolled" : ` `}
    >
      <div className="container">
        <div className="logo float-left" onClick={() => gotoAction("Home")}>
          <span>
            <img src={data.header.logo} alt="" className="img-fluid" />
          </span>
          {sectionName !== "Inicio" && (
            <h1 className="text-light">
              <span>{data.header.logoTitle}</span>
            </h1>
          )}
        </div>

        <nav className="main-nav float-right d-none d-lg-block ">
          <ul>
            <li
              className={sectionName === "Inicio" ? "active" : ""}
              onClick={() => {
                gotoAction("Home");
                setSectionName("Inicio");
              }}
            >
              <span>
                <i className="ion-ios-home"></i>
                {` Inicio`}
              </span>
            </li>

            <li
              className={sectionName === "Sobre nosotros" ? "active" : ""}
              onClick={() => {
                gotoAction("AboutUs");
                setSectionName("Sobre nosotros");
              }}
            >
              <span>
                <i className="ion-android-document"></i>
                {` Sobre Nosotros`}
              </span>
            </li>
            <li
              className={sectionName === "Departamentos" ? "active" : ""}
              onClick={() => {
                gotoAction("Departments");
                setSectionName("Departamentos");
              }}
            >
              <span>
                <i className="ion-android-bookmark"></i>
                {` Departamentos`}
              </span>
            </li>
            <li
              className={sectionName === "Portafolio" ? "active" : ""}
              onClick={() => {
                gotoAction("Portfolio");
                setSectionName("Portafolio");
              }}
            >
              <span>
                <i className="ion-android-playstore"></i>
                {` Portafolio`}
              </span>
            </li>
            <li>
              <a
                href={`mailto:${data.header.supportEmail}`}
                title="Envianos un correo"
                rel="noopener noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <i className="ion-android-mail"></i>
                {` `}
                Contactanos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
