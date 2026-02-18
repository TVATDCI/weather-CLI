import PropTypes from "prop-types";

/**
 * Reusable Input component with glassmorphism styling
 * Supports labels, error states, and consistent theming
 *
 * @param {Object} props - Component props
 * @param {string} props.label - Input label
 * @param {string} props.error - Error message to display
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.type - Input type
 * @param {string} props.placeholder - Placeholder text
 */
export const Input = ({
  label,
  error,
  className = "",
  type = "text",
  placeholder,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-gray-300">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`
          px-4 py-2.5 rounded-lg
          bg-white/10 backdrop-blur-sm
          border border-white/20
          text-white placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          transition-all duration-300
          ${error ? "border-red-500 focus:ring-red-500" : ""}
          ${className}
        `}
        {...props}
      />
      {error && <span className="text-sm text-red-400 mt-1">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password", "number", "search"]),
  placeholder: PropTypes.string,
};

export default Input;
