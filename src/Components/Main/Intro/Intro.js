import { InView } from "react-intersection-observer";
import "./Intro.css";

const Intro = ({ setSectionName, gotoAction, data }) => {
  return (
    <section
      id="intro"
      className="clearfix"
      style={{
        background: `#f5f8fd url(${data.intro.background}) center top no-repeat`,
      }}
    >
      <InView
        className="container d-flex h-100"
        as="div"
        name="Inicio"
        onChange={(inView, entry) => {
          if (inView)
            return setSectionName(entry.target.attributes[1].nodeValue);
        }}
      >
        <div className="row justify-content-center align-self-center">
          <div className="col-md-6 intro-info order-md-first order-last">
            <h2>
              {data.intro.title1}
              <span>{data.intro.title2}</span>
            </h2>
            <div>
              <span
                className="btn-get-started scrollto"
                onClick={() => gotoAction("Portfolio")}
              >
                {data.intro.blueButtonText}
              </span>
            </div>
          </div>

          <div className="col-md-6 intro-img order-md-last order-first">
            <img
              src={`${data.intro.image}`}
              alt={`${data.intro.alt}`}
              className="img-fluid"
            />
          </div>
        </div>
      </InView>
    </section>
  );
};

export default Intro;
