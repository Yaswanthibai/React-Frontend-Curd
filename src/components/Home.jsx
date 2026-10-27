import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TransactionContext } from "../App";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const { transactions, setTransactions } = useContext(TransactionContext);

  const handleDelete = (index) => {
    const updatedTransactions = transactions.filter((transaction, i) => i !== index);
    setTransactions(updatedTransactions);
  };

  return (
    <div className="home-container">
      <h2>Expenses</h2>
      <button className="add-btn" onClick={() => navigate("/add-transaction")}>
        + Add Transaction
      </button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.title}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.date}</td>
              <td>
                <button
                  onClick={() =>
                    navigate(`/edit-transaction/${transaction.title}`)
                  }>
                  Edit
                </button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
