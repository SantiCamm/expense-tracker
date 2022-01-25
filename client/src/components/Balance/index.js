import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { BalanceAmount, Title } from "./BalanceElements";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <Title>Your balance</Title>
      <BalanceAmount>${balance}</BalanceAmount>
    </>
  );
};

export default Balance;
