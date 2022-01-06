import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Default state
const initialState = {
  transactions: [],
  error: null,
  isLoading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Create provider for other components to access state, actions, etc
// Children will be the components wrapped inside the GlobalProvider
export const GlobalProvider = ({ children }) => {

  // Reducer takes our own reducer and an initial piece of state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // ACTIONS
  // Async since we are waiting for the api response
  async function getTransactions() {
    try {
      
      // Make the api call with axios
      const res = await axios.get("/expensetracker/transactions/");

      // Dispatch an action to the reducer with the fetched data
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function addTransaction(transaction) {
    try {

      // Config to make a POST request with axios (headers)
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Axios request
      const res = await axios.post(
        "expensetracker/transactions/",
        transaction,
        config
      );

      // Dispatch an action with the response data. In this case, the recently added transaction
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.message,
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`expensetracker/transactions/${id}`);
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // Return the Provider so that we can access it
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        isLoading: state.isLoading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
