import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isUserLogged = localStorage.getItem("profile");
  return isUserLogged ? children : <Navigate to="login" />;
};

export default PrivateRoute;
