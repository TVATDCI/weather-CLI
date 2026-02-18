import PropTypes from "prop-types";

/**
 * Container component
 * Responsive container with max-width constraint
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Container content
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.size - Container max-width size
 */
export const Container = ({ children, className = "", size = "lg" }) => {
  const sizes = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={`
        w-full mx-auto px-4 sm:px-6 lg:px-8
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "full"]),
};

export default Container;
