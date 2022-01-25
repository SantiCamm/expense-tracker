import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { DeleteButton, TransactionItem } from "./TransactionElements";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <TransactionItem color={transaction.amount > 0 ? "#2ecc71" : "#c0392b"}>
      {transaction.text}{" "}
      <span>
        {transaction.amount > 0 ? "+" : "-"}${Math.abs(transaction.amount)}
      </span>
      <DeleteButton
        onClick={() => deleteTransaction(transaction._id)}
      >
        x
      </DeleteButton>
    </TransactionItem>
  );
};

export default Transaction;
