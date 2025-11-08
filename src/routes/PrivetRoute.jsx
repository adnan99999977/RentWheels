
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {

  const location = useLocation();

  if (loading) {
    return <p>Loading...</p>;
  }

  // if (!user) {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  return children;
};

export default PrivateRoute;
