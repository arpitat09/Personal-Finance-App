// TransactionForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './Transaction.css';

export default function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({
    type: 'income',
    category: '',
    amount: '',
    description: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:3001/api/transactions', form);
    onAdd();
    setForm({ type: 'income', category: '', amount: '', description: '' });
  };

  return (
    <div className="container">
      <h2>Add Transaction</h2>
      <form className="transaction-form" onSubmit={handleSubmit}>
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
        <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleChange} required />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
