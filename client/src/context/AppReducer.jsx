// The reducer handles state changes in response to certain actions
const reducer = (state, action) => {
  switch (action.type) {

    // Return all the fetched transactions with the axios request
    case "GET_TRANSACTIONS":
      return {
        ...state,
        isLoading: false,
        transactions: action.payload,
      };

    // Return a new array with the recently added transaction
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        error: null,
      };

    // Filter the transactions to get a new array without the deleted transaction
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };

    // Return the error from the server
    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    
    default:
      return state;
  }
};

export default reducer;
