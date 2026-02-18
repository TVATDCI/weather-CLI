import PropTypes from "prop-types";

/**
 * Card component with glassmorphism styling
 * Provides a consistent container for content sections
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hover - Enable hover effects
 */
export const Card = ({ children, className = "", hover = false, ...props }) => {
  return (
    <div
      className={`
        bg-white/10 backdrop-blur-md
        border border-white/20
        rounded-2xl shadow-xl
        p-6
        transition-all duration-300
        ${hover ? "hover:bg-white/15 hover:shadow-2xl hover:scale-[1.02]" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
};

export default Card;
