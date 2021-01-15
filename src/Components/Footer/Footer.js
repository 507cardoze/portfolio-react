import "./Footer.css";
import BackToTopButton from "../BackToTopButton/BackToTopButton";
import { forwardRef } from "react";
import moment from "moment";

const Footer = () => {
  return (
    <footer id="footer" className="section-bg">
      <div className="container">
        <div className="copyright">
          <strong>DINATEL</strong>
          <br></br> <strong>Dept. de Informática</strong>
          <br></br>
          <strong>Sección Desarrollo de Software</strong>
          <br></br>
          &copy; Copyright {`${moment().format("YYYY")}`}
          <br></br>
          Todos los derechos reservados. <br></br>
        </div>
        <div className="copyright"></div>
      </div>
      <BackToTopButton />
    </footer>
  );
};

export default forwardRef(Footer);
