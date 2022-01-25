import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #e6e6e6;

  @media (max-width: 768px) {
    /* justify-content: center; */
  }
`;

export const LogoContainer = styled.div`
  width: 45px;
  height: 45px;

  img {
    width: 100%;
  }
`;

export const AppName = styled.h2`
  color: #ff86f5;
  color: #f4b2b0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const LogoutButton = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: white;
  background: #ff86f5;
  background: #f4b2b0;

  @media (max-width: 768px) {
    /* display: none; */
  }
`;

export const Avatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;
