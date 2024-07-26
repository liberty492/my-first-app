import React, { useState } from 'react';
import './App.css';

function Crudoperations() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Handle input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Add item to the list
  const handleAddItem = () => {
    if (input.trim() === '') return;
    if (editIndex !== null) {
      const updatedItems = items.map((item, index) =>
        index === editIndex ? input : item
      );
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, input]);
    }
    setInput('');
  };

  // Edit an item from the list
  const handleEditItem = (index) => {
    setInput(items[index]);
    setEditIndex(index);
  };

  // Delete an item from the list
  const handleDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>React CRUD Example</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter item"
        />
        <button onClick={handleAddItem}>
          {editIndex !== null ? 'Update Item' : 'Add Item'}
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleEditItem(index)}>Edit</button>
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crudoperations;
