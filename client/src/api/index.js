import axios from "axios";

// const API = axios.create({baseURL: "http://localhost:5000"});
const transactionsAPI = axios.create();
const usersAPI = axios.create();

// Passing bearer token in headers for the transactions API
transactionsAPI.interceptors.request.use((req) => {
  const data = JSON.parse(localStorage.getItem("profile"));
    if (data.data.token) {
      req.headers.authorization = `Bearer ${
        data.data.token
      }`;
    }
    return req;
  });

export const fetchTransactions = () => transactionsAPI.get("/expensetracker/transactions/");
export const addTransaction = (transaction, config) => transactionsAPI.post("/expensetracker/transactions/", transaction, config);
export const deleteTransaction = (transactionID) => transactionsAPI.delete(`/expensetracker/transactions/${transactionID}`);

export const googleLogin = (token) => usersAPI.post("/expensetracker/users/auth", token);