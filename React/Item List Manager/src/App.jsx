import React, { useRef, useState } from "react";
import "h8k-components";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const inputRef = useRef("");

  const handleAddItem = () => {
    if (!inputRef.current.value?.length) return;

    setItems([...items, inputRef.current.value]);
    inputRef.current.value = "";
  };

  return (
    <>
      <h8k-navbar header="Item List Manager"></h8k-navbar>
      <div className="App">
        <h3>Item List</h3>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter item"
          data-testid="input-field"
        />
        <button onClick={handleAddItem} data-testid="add-button">
          Add Item
        </button>
        <ul data-testid="item-list">
          {items.map((item, index) => (
            <li key={index} data-testid="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
