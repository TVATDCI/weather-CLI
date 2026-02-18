import PropTypes from "prop-types";

/**
 * Skeleton loading component
 * Provides visual placeholder while content is loading
 *
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.variant - Skeleton shape variant
 */
export const Skeleton = ({ className = "", variant = "text" }) => {
  const variants = {
    text: "h-4 w-full",
    title: "h-8 w-3/4",
    avatar: "h-12 w-12 rounded-full",
    card: "h-32 w-full rounded-2xl",
    button: "h-10 w-24 rounded-lg",
  };

  return (
    <div
      className={`
        animate-pulse bg-white/20 rounded-lg
        ${variants[variant] || variants.text}
        ${className}
      `}
    />
  );
};

/**
 * Weather card skeleton for loading state
 */
export const WeatherSkeleton = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-4">
      <div className="flex items-center gap-4">
        <Skeleton variant="avatar" className="h-16 w-16" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="title" className="w-1/2" />
          <Skeleton variant="text" className="w-1/3" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </div>
    </div>
  );
};

Skeleton.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["text", "title", "avatar", "card", "button"]),
};

export default Skeleton;
