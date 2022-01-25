import React, { useContext, useEffect } from "react";
import { Title } from "../../Balance/BalanceElements";
import { GlobalContext } from "../../../context/GlobalState";
import Transaction from "../Transaction";
import { List } from "./TransactionListElements";

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Title>History</Title>
      <List>
        {transactions.map((transaction) => {
          return (
            <Transaction key={transaction._id} transaction={transaction} />
          );
        })}
      </List>
    </>
  );
};

export default TransactionList;
