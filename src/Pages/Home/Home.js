import Main from "../../Components/Main/Main";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import BottomToolBar from "../../Components/BottomToolBar/BottomToolBar";
import { useRef } from "react";
import { motion } from "framer-motion";
import InstallPWA from "../../Components/InstallPWA/InstallPWA";

const Home = () => {
  const gotoAction = (section) => {
    switch (section) {
      case "Home":
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        break;
      case "AboutUs":
        window.scrollTo({
          top: aboutSection.current.offsetTop - 70,
          behavior: "smooth",
        });
        break;
      case "Departments":
        window.scrollTo({
          top: departmentsSection.current.offsetTop - 70,
          behavior: "smooth",
        });
        break;
      case "Portfolio":
        window.scrollTo({
          top: portfolioSection.current.offsetTop - 70,
          behavior: "smooth",
        });
        break;
      default:
        return null;
    }
  };

  const aboutSection = useRef(null);
  const departmentsSection = useRef(null);
  const portfolioSection = useRef(null);

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={{
        in: {
          opacity: 1,
        },
        out: {
          opacity: 0,
        },
      }}
      transition={{
        type: "tween",
        ease: "anticipate",
        duration: 1.5,
      }}
    >
      <InstallPWA />
      <Navigation gotoAction={gotoAction} />
      <BottomToolBar gotoAction={gotoAction} />
      <Main
        ref={{
          aboutRef: aboutSection,
          departmentsRef: departmentsSection,
          portfolioRef: portfolioSection,
        }}
        gotoAction={gotoAction}
      />
      <Footer />
    </motion.div>
  );
};

export default Home;
