import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

export const Card = ({ children, className, hover = false, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white/10 backdrop-blur-md",
        "border border-white/20",
        "rounded-2xl shadow-xl",
        "p-6",
        "transition-all duration-300",
        { "hover:bg-white/15 hover:shadow-2xl hover:scale-[1.02]": hover },
        className
      )}
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
