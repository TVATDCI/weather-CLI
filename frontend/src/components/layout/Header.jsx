import PropTypes from "prop-types";

/**
 * Header component
 * Application header with title and optional navigation
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Header title
 * @param {React.ReactNode} props.children - Additional header content
 */
export const Header = ({ title = "Weather App", children }) => {
  return (
    <header className="w-full py-4 px-6 bg-white/5 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          {title}
        </h1>
        {children}
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
