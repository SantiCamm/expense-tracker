import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import {
    BorderWrapper,
  Container,
  Expense,
  ExpenseTitle,
  Income,
  IncomeTitle,
  Wrapper,
} from "./IncomeExpenseElements";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((amount) => {
      return amount > 0;
    })
    .reduce((acc, item) => (acc += item), 0);

  const expense = amounts
    .filter((amount) => {
      return amount < 0;
    })
    .reduce((acc, item) => (acc += item), 0);

  return (
    <Container>
      <BorderWrapper>
        <IncomeTitle>Income</IncomeTitle>
        <Income>+${Math.abs(income)}</Income>
      </BorderWrapper>
      <Wrapper>
        <ExpenseTitle>Expense</ExpenseTitle>
        <Expense>-${Math.abs(expense)}</Expense>
      </Wrapper>
    </Container>
  );
};

export default IncomeExpense;
