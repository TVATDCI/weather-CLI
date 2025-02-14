import React from "react";
import PropTypes from "prop-types";
import BtnSvg from "../assets/BtnSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const buttonClasses = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-14 ${px} ${
    white ? "text-n-8" : "text-n-5"
  } ${className || ""}`;
  const spanClasses = "relative z-10";
  return (
    <button className={buttonClasses} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {BtnSvg(white)}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  px: PropTypes.string,
  white: PropTypes.bool,
};

export default Button;
