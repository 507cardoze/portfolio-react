import React, { useState, useEffect, forwardRef } from "react";
import { InView } from "react-intersection-observer";
import HeaderList from "./HeaderList/HeaderList";
import List from "./List/List";
import "./Portfolio.css";

const Portfolio = ({ setSectionName, data }, ref) => {
  const [categoriaSelected, setCategoriaSelected] = useState(
    data.portfolio.porfolioFilterList[0],
  );
  const [listElements, setListElements] = useState([]);

  const handleOnClickCategory = (newCategory) =>
    setCategoriaSelected(newCategory);

  useEffect(() => {
    const filterBasedOnTag = (data, tag) => {
      const checkTag = (tags) => tags.includes(tag);
      return data.portfolio.appItems.filter((item) => item.tag.some(checkTag));
    };

    setListElements(filterBasedOnTag(data, categoriaSelected));
  }, [data, categoriaSelected]);

  return (
    <section id="portfolio" className="section-bg" ref={ref}>
      <InView
        className="container"
        as="div"
        name="Portafolio"
        onChange={(inView, entry) => {
          if (inView) {
            setSectionName(entry.target.attributes[1].nodeValue);
          }
        }}
      >
        <HeaderList
          data={data}
          categoriaSelected={categoriaSelected}
          handleOnClickCategory={handleOnClickCategory}
        />
        <List data={listElements} />
      </InView>
    </section>
  );
};

export default forwardRef(Portfolio);
