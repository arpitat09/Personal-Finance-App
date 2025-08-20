import React from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  const [refresh, setRefresh] = React.useState(false);
  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <div className="App">
      <h1>Finance Budget Tracker</h1>
      <TransactionForm onAdd={triggerRefresh} />
      <TransactionList key={refresh} />
    </div>
  );
}

export default App;