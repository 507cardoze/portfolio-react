import "./Footer.css";
import BackToTopButton from "../BackToTopButton/BackToTopButton";
import { forwardRef, useContext } from "react";
import { InView } from "react-intersection-observer";
import { NavContext } from "../../Context/NavContext";
import moment from "moment";

const Footer = ({ gotoAction }, ref) => {
  const { contactRef } = ref;
  const { setSectionName } = useContext(NavContext);
  return (
    <footer id="footer" className="section-bg" ref={contactRef}>
      <div className="footer-top">
        <InView
          className="container"
          as="div"
          name="Contactos"
          onChange={(inView, entry) => {
            if (inView)
              return setSectionName(entry.target.attributes[1].nodeValue);
          }}
        >
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-sm-6">
                  <div className="footer-info">
                    <h3>DIRECCIÓN NACIONAL DE TELEMÁTICA</h3>
                    <p>
                      Planificar, organizar, dirigir y controlar los sistemas de
                      telecomunicaciones y el desarrollo informático
                      institucional en los ámbitos técnicos y de entrenamiento
                      informático. Estará conformado por los departamentos de
                      Informática, Redes e Infraestructura Teleinformática y
                      Comunicaciones.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="footer-links">
                    <h4>Enlaces útiles</h4>
                    <ul>
                      <li
                        onClick={() => {
                          gotoAction("Home");
                          setSectionName("Inicio");
                        }}
                      >
                        <span>Inicio</span>
                      </li>

                      <li
                        onClick={() => {
                          gotoAction("AboutUs");
                          setSectionName("Sobre nosotros");
                        }}
                      >
                        <span>Sobre Nosotros</span>
                      </li>
                      <li onClick={() => gotoAction("Departments")}>
                        <span>Departamentos</span>
                      </li>
                      <li onClick={() => gotoAction("Portfolio")}>
                        <span>Portafolio</span>
                      </li>
                    </ul>
                  </div>

                  <div className="footer-links">
                    <h4>Contactanos</h4>
                    <p>
                      Comando General Aeronaval <br></br> Cocolí <br></br>
                      Edificio 3005<br></br> Corregimiento de Veracruz
                      <br></br> Distrito de Arraiján<br></br>
                      <strong>Phone:</strong> +1 5589 55488 55 <br></br>
                      <strong>Email:</strong> info@example.com <br></br>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </InView>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright {`${moment().format("YYYY")}`}
          <br></br>
          <strong>
            DINATEL, Dept. de Informática, Sección Desarrollo de Software
          </strong>{" "}
          <br></br>
          Todos los derechos reservados. <br></br>
          {`${moment().format("D-MM-YYYY, h:mm a")}`}
        </div>
        <div className="copyright"></div>
      </div>
      <BackToTopButton />
    </footer>
  );
};

export default forwardRef(Footer);
