import React from "react";

const SubmitButton = (props) => {
  const { disabled, onClick, label } = props;

  return (
    <button
      className="btn btn-secondary w-100"
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
