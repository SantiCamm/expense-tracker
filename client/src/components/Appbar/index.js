import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/logo.png";
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
          alt={user?.googleUserData?.name}
          src={user?.googleUserData?.imageUrl}
        />
        <LogoutButton onClick={handleLogout}>LOG OUT</LogoutButton>
      </UserContainer>
    </Header>
  );
};

export default Appbar;
