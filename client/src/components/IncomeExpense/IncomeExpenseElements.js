import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const Wrapper = styled.div`
  flex: 1;
  text-align: center;
`;

export const BorderWrapper = styled.div`
  flex: 1;
  text-align: center;
  border-right: 1px solid #dedede;
`;

export const IncomeTitle = styled.h4`
  margin: 0;
  text-transform: uppercase;
`;

export const ExpenseTitle = styled.h4`
  margin: 0;
  text-transform: uppercase;
`;

export const Income = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
  color: #2ecc71;
`;

export const Expense = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
  color: #c0392b;
`;
