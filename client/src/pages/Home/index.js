import React from "react";
import {
  Balance,
  IncomeExpense,
  NewTransactionForm,
  TransactionList,
} from "../../components";
import { HomeContainer, HomeWrapper } from "./HomeElements";

const Home = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <NewTransactionForm />
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;
