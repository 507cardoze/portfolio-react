import React, { useState, createContext } from "react";
import { Helmet } from "react-helmet";

export const NavContext = createContext();

export const NavProvider = (props) => {
  const [sectionName, setSectionName] = useState("Inicio");
  return (
    <NavContext.Provider value={{ sectionName, setSectionName }}>
      <Helmet title={sectionName} />
      {props.children}
    </NavContext.Provider>
  );
};
