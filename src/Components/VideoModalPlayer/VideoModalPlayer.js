import { motion } from "framer-motion";
import CloseButton from "../CloseButton/CloseButton";
import "./VideoModalPlayer.css";

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

function VideoModalPlayer({ item, setVideoModal }) {
  return (
    <div>
      <div className="backdrop" onClick={() => setVideoModal(null)} />
      <motion.div
        className="modal-video"
        initial="out"
        animate="in"
        exit="out"
        variants={elementsVariants}
        transition={elementsTransitions}
      >
        <CloseButton onClick={() => setVideoModal(null)} />
        <video controls="controls" poster={item.image} autoPlay>
          <source src={item.media.src} type={item.media.type} />
        </video>
      </motion.div>
    </div>
  );
}

export default VideoModalPlayer;
