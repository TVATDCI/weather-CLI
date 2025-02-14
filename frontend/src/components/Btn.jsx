import React from "react";
import PropTypes from "prop-types";
import BtnSvg from "../assets/BtnSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const buttonClasses = `relative inline-flex items-center justify-center ${className}`;
  const spanClasses = `relative z-10 ${px}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      <BtnSvg white={white} />
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
