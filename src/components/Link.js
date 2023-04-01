import classNames from "classnames";
import { useNavigationContext } from "../context/navigation";

const Link = ({ children, to, className, activeClassName, ...props }) => {
  const { navigate, currentPath } = useNavigationContext();

  const classes = classNames("text-blue-500", className, currentPath === to && activeClassName);

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();
    navigate(to);
  };

  return (
    <a {...props} className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
