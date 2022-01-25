import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { Container, LogoContainer, Button } from "./AuthElements";
import Logo from "../../images/logo.png";

const Auth = () => {
  const navigate = useNavigate();
  const { googleLogin } = useContext(GlobalContext);

  const googleSuccess = (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    googleLogin({ result, token }, navigate);
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Could not sign in with your Google account");
  };

  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="Logo" />
        <h1>Expense Tracker</h1>
      </LogoContainer>
      <GoogleLogin
        clientId="208706502819-6uhrqrva53mmm6nfjgmbjbijcf5dgtdg.apps.googleusercontent.com"
        buttonText="Login with your Google account"
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
      />
    </Container>
  );
};

export default Auth;
