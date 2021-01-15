function HeaderList({ data, categoriaSelected, handleOnClickCategory }) {
  return (
    <>
      <header className="section-header">
        <h3 className="section-title">{data.portfolio.sectionTitle}</h3>
      </header>
      <div className="row">
        <div className="col-lg-12">
          <ul id="portfolio-flters">
            {data.portfolio.porfolioFilterList.map((value, i) => (
              <li
                key={i}
                className={categoriaSelected === value ? `filter-active` : ``}
                onClick={() => handleOnClickCategory(value)}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default HeaderList;
