import React, { useState, useMemo } from "react";
import "./App.css";

// Memoized list
const ItemList = React.memo(({ items }) => {
  console.log("ItemList rendered");

  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={index} className="list-item">
          {item}
        </li>
      ))}
    </ul>
  );
});

function App() {
  const [count, setCount] = useState(0);

  const items = useMemo(() => {
    return Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Counter: {count}</h1>

      <button
        className="button"
        onClick={() => setCount(count + 1)}
      >
        Increment Counter
      </button>

      <ItemList items={items} />
    </div>
  );
}

export default App;