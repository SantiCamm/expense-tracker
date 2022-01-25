import styled from "styled-components";

export const Title = styled.h3`
  border-bottom: 1px solid rgb(0, 0, 0);
  padding-bottom: 10px;
  margin: 40px 0 10px;
`;

export const Label = styled.label`
  display: inline-block;
  margin: 10px 0;
`;

export const Input = styled.input`
  border: 1px solid #dedede;
  border-radius: 2px;
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 100%;
`;

export const Error = styled.h4`
  background: #ffa59c;
  padding: 12px;
  color: #ff0000;
  width: 100%;
  text-align: center;
`;

export const TransactionButton = styled.button`
  cursor: pointer;
  background-color: #F4B2B0;
  box-shadow: var(--box-shadow);
  color: rgb(255, 255, 255);
  border: 0;
  display: block;
  font-size: 16px;
  margin: 15px 0 30px;
  padding: 12px;
  width: 100%;
`;
