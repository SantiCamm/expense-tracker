import { Navigate } from "react-router-dom";

const PrivateLogin = ({ children }) => {
  const isUserLogged = localStorage.getItem("profile");
  return isUserLogged ? <Navigate to="/" /> : children;
};

export default PrivateLogin;
