import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 84vh;

  @media(max-width: 768px) {
    margin-top: 22px;
  }
`;

export const HomeWrapper = styled.div`
  margin: 30px auto;
  width: 400px;

  @media(max-width: 768px) {
    width: 340px;
  }
`;
