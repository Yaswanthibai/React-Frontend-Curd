import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AddEditForm from "./components/AddEditForm";
import "./App.css";

export const TransactionContext = createContext(null);

function App() {
  const [transactions, setTransactions] = useState([
    { title: "break fast", amount: 50, date: "2026-10-26" },
    { title: "lunch", amount: 100, date: "2026-10-26" },
  ]);

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-transaction" element={<AddEditForm />} />
          <Route path="/edit-transaction/:title" element={<AddEditForm />} />
        </Routes>
      </BrowserRouter>
    </TransactionContext.Provider>
  );
}

export default App;
