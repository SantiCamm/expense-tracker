import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { NewTransactionForm } from "./components/NewTransactionForm";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <NewTransactionForm />
      </div>
    </GlobalProvider>
  );
}

export default App;
