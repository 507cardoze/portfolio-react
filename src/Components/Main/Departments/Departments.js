import { InView } from "react-intersection-observer";
import "./Departments.css";
import React, { useState, forwardRef } from "react";

const Departments = ({ setSectionName, data }, ref) => {
  const [departments, setDepartments] = useState("");

  return (
    <section id="services" className="section-bg" ref={ref}>
      <InView
        className="container"
        as="div"
        name="Departamentos"
        onChange={(inView, entry) => {
          if (inView)
            return setSectionName(entry.target.attributes[1].nodeValue);
        }}
      >
        <header className="section-header">
          <h3>{data.departments.mainTitle}</h3>
          <p>{data.departments.mainDescription}</p>
        </header>

        <div className="row">
          {data.departments.departmentItems?.map((department) => (
            <>
              {departments === department.title && (
                <div
                  class="modal-overlay"
                  id="modal-overlay"
                  onClick={() => setDepartments("")}
                ></div>
              )}
              <div
                className={`col-md-${department.layout.md} col-lg-${department.layout.md}`}
              >
                <div
                  className={`box ${
                    departments === department.title ? `popup` : ""
                  }`}
                  onClick={() => setDepartments(department.title)}
                >
                  <div
                    className="icon"
                    style={{ background: `${department.background}` }}
                  >
                    <i
                      className={`${department.icon}`}
                      style={{ color: `${department.iconColor}` }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <p>{department.title}</p>
                  </h4>
                  {departments === department.title ? (
                    <h4 className="description">
                      <p>{department.description}</p>
                    </h4>
                  ) : null}
                </div>
              </div>
            </>
          ))}
        </div>
      </InView>
    </section>
  );
};

export default forwardRef(Departments);
