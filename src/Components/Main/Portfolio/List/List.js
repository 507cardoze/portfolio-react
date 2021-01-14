import React, { useState } from "react";
import ListItem from "./ListItem/ListItem";
import { motion } from "framer-motion";

function List({ data }) {
  const [videoModal, setVideoModal] = useState(null);

  const pageVariants = {
    in: {
      opacity: 1,
      y: "0%",
    },
    out: {
      opacity: 0,
      y: "50%",
    },
  };

  const pageTransitions = {
    type: "tween",
    ease: "anticipate",
    duration: 1,
  };

  const elementsVariants = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const elementsTransitions = {
    type: "spring",
    stiffness: 80,
  };

  return (
    <motion
      className="row "
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransitions}
    >
      {data.length > 0 && (
        <>
          {data.map((item) => (
            <>
              {videoModal === item.id ? (
                <>
                  <div
                    className="backdrop"
                    onClick={() => setVideoModal(null)}
                  />
                  <motion.div
                    className="modal-video"
                    key={item.id}
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={elementsVariants}
                    transition={elementsTransitions}
                  >
                    <video controls="controls" poster={item.image}>
                      <source src={item.media.src} type={item.media.type} />
                    </video>
                  </motion.div>
                </>
              ) : (
                <ListItem item={item} setVideoModal={setVideoModal} />
              )}
            </>
          ))}
        </>
      )}
    </motion>
  );
}

export default List;
