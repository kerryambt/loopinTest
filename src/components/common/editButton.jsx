import React from "react";

const EditButton = (props) => {
  const { removeMood } = props;
  return (
    <button className="btn btn-outline-light" onClick={removeMood}>
      Edit your mood <i className="fas fa-edit"></i>
    </button>
  );
};

export default EditButton;
