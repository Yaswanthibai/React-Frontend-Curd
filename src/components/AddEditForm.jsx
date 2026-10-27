import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TransactionContext } from "../App";
import "./AddEditForm.css";

function AddEditForm() {
  const [formTitle, setFormTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const { title } = useParams();
  const navigate = useNavigate();
  const { transactions, setTransactions } = useContext(TransactionContext);
  
  useEffect(() => {
    if (title !== "") {
      const existingTransaction = transactions.find((t) => t.title === title);
      if (existingTransaction) {
        setFormTitle(existingTransaction.title);
        setAmount(existingTransaction.amount);
        setDate(existingTransaction.date);
      }
    }
  }, [title, transactions]);

  const handleSave = () => {
    const isEdit = transactions.some((t) => t.title === title);
    if (isEdit) {
      const updatedTransactions = transactions.map((t) =>
        t.title === title ? { title: formTitle, amount, date } : t
      );
      setTransactions(updatedTransactions);
    } else {
      const newTransaction = { title: formTitle, amount, date };
      setTransactions([...transactions, newTransaction]);
    }
    navigate("/");
  };

  return (
    <form className="add-edit-form">
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={formTitle}
        onChange={(e)=>setFormTitle(e.target.value)}
      />
      <label>Amount:</label>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
      />
      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={date}
        onChange={(e)=>setDate(e.target.value)}
      />
      <button type="button" onClick={handleSave}>
        Save
      </button>
    </form>
  );
}

export default AddEditForm;
