import { useState } from "react";

export default function Form({ onAddItems }) {
    const [description, setDescription] = useState(" ");
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(e) {
      if (!description) return;
      const data = {
        quantity,
        description,
        id: Date.now(),
        packed: false,
      };
      onAddItems(data);
      setDescription("");
      setQuantity(1);
      e.preventDefault();
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>what do you need for your trip?</h3>
  
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
    );
  }