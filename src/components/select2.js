'use client'; // Ensure this code runs on the client side

import React, { useState } from 'react';

export default function DatalistComponent() {
  // Sample options for the datalist
  const options = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Grape",
    "Kiwi",
    "Lemon",
    "Mango",
    "Orange",
    "Peach"
  ];

  const [selectedFruit, setSelectedFruit] = useState("");

  const handleInputChange = (event) => {
    setSelectedFruit(event.target.value);
  };

  return (
    <div>
      <h3>Select a Fruit</h3>
      <input
        list="fruits"
        name="fruit"
        id="fruit"
        value={selectedFruit}
        onChange={handleInputChange}
        className="form-control"
      />
      <datalist id="fruits">
        {options.map((option, index) => (
          <option key={index} value={option} />
        ))}
      </datalist>
    </div>
  );
}
