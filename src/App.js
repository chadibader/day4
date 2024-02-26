import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <div className="centered-container">
        <p className="count">Count: {count}</p>
        <div className="buttons">
          <button className="button" onClick={decrementCount}>-</button>
          <button className="button" onClick={resetCount}>Reset</button>
          <button className="button" onClick={incrementCount}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
