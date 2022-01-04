import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .map((transaction) => transaction.amount)
    .filter((amount) => {return amount > 0})
    .reduce((acc, item) => (acc += item), 0)
    
    const expense = transactions
    .map((transaction) => transaction.amount)
    .filter((amount) => {return amount < 0})
    .reduce((acc, item) => (acc += item), 0)

  console.log(income)


    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${Math.abs(income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${Math.abs(expense)}</p>
        </div>
      </div>
    )
}
