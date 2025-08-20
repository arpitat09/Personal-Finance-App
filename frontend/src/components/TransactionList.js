// TransactionList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Transaction.css';

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({});

  const fetchData = async () => {
    const res = await axios.get('http://localhost:3001/api/transactions');
    setTransactions(res.data);

    const sum = await axios.get('http://localhost:3001/api/summary');
    setSummary(sum.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>Summary</h2>
      <div className="transaction-summary">
        <p>Total Income: ${summary.totalIncome}</p>
        <p>Total Expenses: ${summary.totalExpenses}</p>
        <p>Savings: ${summary.savings}</p>
      </div>

      <h2>Transactions</h2>
      <ul className="transaction-list">
        {transactions.map(tx => (
          <li key={tx._id} className={tx.type === 'expense' ? 'expense' : ''}>
            <strong>{tx.category}</strong> - ${tx.amount}
            <span>{new Date(tx.date).toLocaleDateString()}</span>
            {tx.description && <span>{tx.description}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
