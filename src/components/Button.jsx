import React from "react";

const Button = ({ type = "button", ButtonText, styling }) => {
  return (
    <button type={type} className={styling}>
      {ButtonText}
    </button>
  );
};

export default Button;
