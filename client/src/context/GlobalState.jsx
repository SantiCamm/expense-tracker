import React, { createContext, useReducer } from "react";
import TransactionsReducer from "./GlobalReducer";
import * as api from "../api";

// Default state
const initialState = {
  transactions: [],
  error: null,
  isLoading: true,
  auth: { error: null, authData: null, success: null },
};

// Create context
export const GlobalContext = createContext(initialState);

// Create provider for other components to access state, actions, etc
// Children will be the components wrapped inside the GlobalProvider
export const GlobalProvider = ({ children }) => {
  // Reducer takes our own reducer and an initial piece of state
  const [state, dispatch] = useReducer(TransactionsReducer, initialState);

  // ACTIONS
  // Async since we are waiting for the api response
  function logout(navigate) {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
  };


  async function googleLogin(res, navigate) {
    const { result: googleUserData, token } = res;
    try {
      const serverResponse = await api.googleLogin({ token });
      const data = serverResponse.data;
      
      dispatch({
        type: "LOGIN",
        payload: {googleUserData, data},
      });
      navigate("/");
    } catch (error) {}
  }

  async function getTransactions() {
    try {
      // Make the api call with axios
      const transactions = await api.fetchTransactions();

      // Dispatch an action to the reducer with the fetched data
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: transactions.data.data,
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
      const res = await api.addTransaction(transaction, config);

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
      await api.deleteTransaction(id);

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
        auth: state.auth,
        getTransactions,
        deleteTransaction,
        addTransaction,
        googleLogin,
        logout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
