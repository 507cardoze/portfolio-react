import { InView } from "react-intersection-observer";
import "./Departments.css";
import { useState, forwardRef } from "react";
import DepartmentsModal from "../../DepartmentsModal/DepartmentsModal";

const Departments = ({ setSectionName, data }, ref) => {
  const [departments, setDepartments] = useState(null);

  const CloseTheModal = () => {
    setDepartments(null);
  };

  const OpenTheModal = (name) => {
    setDepartments(name);
  };

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
          {data.departments.departmentItems?.map((department, i) => (
            <DepartmentsModal
              key={i}
              department={department}
              CloseTheModal={CloseTheModal}
              OpenTheModal={OpenTheModal}
              departments={departments}
            />
          ))}
        </div>
      </InView>
    </section>
  );
};

export default forwardRef(Departments);
