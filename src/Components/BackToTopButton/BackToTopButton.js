import "./BackToTopButton.css";
import { useWindowScroll } from "react-use";
import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageYOffset]);

  if (!visible) {
    return false;
  }

  const scrollToTopAction = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className="back-to-top d-md-block d-lg-block"
      onClick={scrollToTopAction}
    >
      <i className="fa fa-chevron-up"></i>
    </div>
  );
};

export default BackToTopButton;
