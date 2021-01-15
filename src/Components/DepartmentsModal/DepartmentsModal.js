import CloseButton from "../CloseButton/CloseButton";
import "./DepartmentsModal.css";

function DepartmentsModal({
  department,
  CloseTheModal,
  OpenTheModal,
  departments,
}) {
  return (
    <div
      className={`col-md-${department.layout.md} col-lg-${department.layout.md}`}
    >
      {departments === department.title && (
        <div
          className="modal-overlay"
          id="modal-overlay"
          onClick={CloseTheModal}
        ></div>
      )}
      <div
        className={`box ${departments === department.title ? `popup` : ""}`}
        onClick={() => {
          if (departments !== department.title) {
            OpenTheModal(department.title);
          }
        }}
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
        {departments === department.title && (
          <>
            <CloseButton onClick={CloseTheModal} />
            <h4 className="description">
              <p>{department.description}</p>
            </h4>
          </>
        )}
      </div>
    </div>
  );
}

export default DepartmentsModal;
