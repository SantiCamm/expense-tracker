import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const NewTransactionForm = () => {
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
      <h3>Add new transaction</h3>
      <form onSubmit={submitTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            required
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            required
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>

      {error && <h4 className="error">{error}</h4>}
    </>
  );
};
