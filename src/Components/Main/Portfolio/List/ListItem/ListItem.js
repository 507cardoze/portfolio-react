import React from "react";
import NOIMAGE from "../../../../../img/wireframe.png";
import { motion } from "framer-motion";

const DownloadableItem = ({ media }) => {
  return (
    <a href={media.src} className="link-details" title="Descargar" download>
      <i className="ion-android-download"></i>
    </a>
  );
};

const ViewableItem = ({ id, setVideoModal }) => {
  return (
    <span className="link-details" onClick={() => setVideoModal(id)}>
      <i className="ion ion-eye"></i>
    </span>
  );
};

const GoIcon = ({ URL }) => {
  return (
    <a
      href={URL}
      className="link-preview"
      title="Ir"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="ion ion-android-open"></i>
    </a>
  );
};

function ListItem({ item, setVideoModal }) {
  const elementsVariants = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "30%",
    },
  };

  const elementsTransitions = {
    type: "spring",
    stiffness: 180,
  };

  return (
    <motion.div
      className="col-lg-4 col-md-6 portfolio-item"
      key={item.id}
      initial="out"
      animate="in"
      exit="out"
      variants={elementsVariants}
      transition={elementsTransitions}
    >
      <div className="portfolio-wrap">
        <img
          src={item.image ? item.image : NOIMAGE}
          className="img-fluid"
          alt=""
        />
        <div className="portfolio-info">
          <h4>
            {item.URL ? (
              <a rel="noopener noreferrer" target="_blank" href={item.URL}>
                {item.name}
              </a>
            ) : (
              <span>{item.name}</span>
            )}
          </h4>
          <p>{item.description}</p>
          <div>
            {item.URL && <GoIcon URL={item.URL} />}
            {item.media.type === "video/webm" && (
              <ViewableItem id={item.id} setVideoModal={setVideoModal} />
            )}
            {item.media.isDownloable && <DownloadableItem media={item.media} />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ListItem;
