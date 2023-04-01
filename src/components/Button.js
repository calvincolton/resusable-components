import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({ children, variant, rounded, outline, ...props }) => {
  const baseClass = "flex items-center px-3 py-1.5 border";
  const classes = classnames(props.className, baseClass, {
    "bg-blue-500 border-blue-500": variant === "primary",
    "bg-gray-900 border-gray-900": variant === "secondary",
    "bg-green-500 border-green-500": variant === "success",
    "bg-yellow-400 border-yellow-400": variant === "warning",
    "bg-red-500 border-red-500": variant === "danger",
    "rounded-full": rounded,
    "text-white": !outline,
    "bg-white": outline,
    "text-blue-500": outline && variant === "primary",
    "text-gray-900": outline && variant === "secondary",
    "text-green-500": outline && variant === "success",
    "text-yellow-400": outline && variant === "warning",
    "text-red-500": outline && variant === "danger",
  });

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  rounded: false,
  outline: false,
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "success", "warning", "danger"]),
  rounded: PropTypes.bool,
  outline: PropTypes.bool,
};

export default Button;
