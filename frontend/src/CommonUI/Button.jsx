import React from "react";

const Button = ({ text, style, spanvalue }) => {
  return (
    <button className={style}>
      <span>{spanvalue}</span> {text}
    </button>
  );
};

export default Button;
