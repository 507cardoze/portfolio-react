import { forwardRef, useContext } from "react";
import { NavContext } from "../../Context/NavContext";
import { DataContext } from "../../Context/DataContext";
import Intro from "./Intro/Intro";
import About from "./About/About";
import Departments from "./Departments/Departments";
import Portafolio from "./Portfolio/Portfolio";

const Main = ({ gotoAction }, ref) => {
  const { aboutRef, departmentsRef, portfolioRef } = ref;
  const { setSectionName } = useContext(NavContext);
  const { data } = useContext(DataContext);

  return (
    <main id="main">
      <Intro
        setSectionName={setSectionName}
        gotoAction={gotoAction}
        data={data}
      />
      <About ref={aboutRef} setSectionName={setSectionName} data={data} />
      <Departments
        ref={departmentsRef}
        setSectionName={setSectionName}
        data={data}
      />
      <Portafolio
        ref={portfolioRef}
        setSectionName={setSectionName}
        data={data}
      />
    </main>
  );
};

export default forwardRef(Main);
