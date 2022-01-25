import { useState } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import  Home  from "./pages/Home";
import Login from "./pages/Login";
import { GlobalProvider } from "./context/GlobalState";
import PrivateRoute from "./routes/PrivateRoute";
import PrivateLogin from "./routes/PrivateLogin";
import Appbar from "./components/Appbar";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();

  return (
    <GlobalProvider>
      {(location.pathname !== "/login") && <Appbar />}
        <Routes>
          <Route
            path="/"
            exact
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            exact
            element={
              <PrivateLogin>
                <Login />
              </PrivateLogin>
            }
          />
        </Routes>
    </GlobalProvider>
  );
};

export default App;
