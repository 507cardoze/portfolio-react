import "./Footer.css";
import BackToTopButton from "../BackToTopButton/BackToTopButton";
import { forwardRef, useContext } from "react";
import moment from "moment";
import { DataContext } from "../../Context/DataContext";

const Footer = () => {
  const { data } = useContext(DataContext);
  const { footer } = data.header;
  return (
    <footer id="footer" className="section-bg">
      <div className="container">
        <div className="copyright">
          <strong>{`${footer.direccion}`}</strong>
          <br></br> <strong>{`${footer.departamento}`}</strong>
          <br></br>
          <strong>{`${footer.seccion}`}</strong>
          <br></br>
          &copy; Copyright {`${moment().format("YYYY")}`}
          <br></br>
          Todos los derechos reservados. <br></br>
          <a
            href={`mailto:${footer.email}`}
            title="Envianos un correo"
            rel="noopener noreferrer"
            target="_blank"
          >
            {footer.email}
          </a>
          <br></br>
        </div>
        <div className="copyright"></div>
      </div>
      <BackToTopButton />
    </footer>
  );
};

export default forwardRef(Footer);
