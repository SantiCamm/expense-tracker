import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/logo.png";
import { GoogleLogout } from "react-google-login";

import {
  Header,
  LogoContainer,
  Avatar,
  UserContainer,
  LogoutButton,
  AppName,
} from "./AppbarElements";

const Appbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const { logout } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  const handleLogout = () => {
    logout(navigate);
  };

  return (
    <Header>
      <LogoContainer>
        <img src={Logo} alt="Logo" />
      </LogoContainer>

      <AppName>Expense Tracker</AppName>
      <UserContainer>
        <Avatar
          alt={user?.result?.sub}
          src={user?.result?.picture}
        />
        <GoogleLogout
          clientId={process.env.REACT_APP_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={handleLogout}
          render={(renderProps) => (
            <LogoutButton
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              LOG OUT
            </LogoutButton>
          )}
        ></GoogleLogout>
      </UserContainer>
    </Header>
  );
};

export default Appbar;
