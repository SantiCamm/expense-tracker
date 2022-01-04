import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Create provider for other components to access state, actions, etc
export const GlobalProvider = ({ children }) => {
  // Reducer takes our own reducer and an initial piece of state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Return the Provider so that we can access it
  // {children} will be our components wrapped inside the Provider. In this case, everything in App.js
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
