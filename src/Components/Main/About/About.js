import { InView } from "react-intersection-observer";
import "./About.css";
import { forwardRef } from "react";

const About = ({ setSectionName, data }, ref) => {
  return (
    <section id="about" ref={ref}>
      <InView
        className="container"
        as="div"
        name="Sobre nosotros"
        onChange={(inView, entry) => {
          if (inView)
            return setSectionName(entry.target.attributes[1].nodeValue);
        }}
      >
        <div className="row">
          <div className="col-lg-5 col-md-6">
            {data.about.images?.map((image) => (
              <div className="about-img" key={image.alt}>
                <img src={`${image.src}`} alt={`${image.alt}`} />
              </div>
            ))}
          </div>

          <div className="col-lg-7 col-md-6">
            <div className="about-content">
              <h2>{data.about.title}</h2>
              <h3>{data.about.subTitle}</h3>
              <p>{data.about.mainParagrah}</p>
              <p>{data.about.subParagrah}</p>
            </div>
          </div>
        </div>
      </InView>
    </section>
  );
};

export default forwardRef(About);
