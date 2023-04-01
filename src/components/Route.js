import { useNavigationContext } from "../context/navigation";

const Route = ({ path, children }) => {
  const { currentPath } = useNavigationContext();

  if (path === currentPath) {
    return children;
  }

  return null;
};

export default Route;
