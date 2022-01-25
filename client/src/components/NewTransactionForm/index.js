import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";

import {
  Title,
  Error,
  Form,
  FormControl,
  Input,
  Label,
  TransactionButton,
} from "./NewTransactionFormElements";

const NewTransactionForm = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction, error } = useContext(GlobalContext);

  const submitTransaction = (e) => {
    e.preventDefault();
    addTransaction({
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    });
  };
  return (
    <>
      <Title>Add new transaction</Title>
      <form onSubmit={submitTransaction}>
        <div>
          <Label htmlFor="text">Income/Expense</Label>
          <Input
            required
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div>
          <Label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </Label>
          <Input
            required
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <TransactionButton>Add transaction</TransactionButton>
      </form>

      {error && <Error>{error}</Error>}
    </>
  );
};

export default NewTransactionForm;
