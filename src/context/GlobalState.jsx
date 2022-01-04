import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

const initialState = {
  transactions: [
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Create provider for other components to access state, actions, etc
export const GlobalProvider = ({ children }) => {
  // Reducer takes our own reducer and an initial piece of state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    })
  }

  // Return the Provider so that we can access it
  // {children} will be our components wrapped inside the Provider. In this case, everything in App.js
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
