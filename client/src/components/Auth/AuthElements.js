import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 500px;
  background-color: rgba(0,0,0,0.1);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media(max-width: 768px) {
    width: 300px;
  }

`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  h1 {
      color: #F4B2B0;
  }

  img {
    width: 60px;
    height: 60px;
  }
`;

export const Button = styled.button`
width: 50%;
height: 50px;
`
