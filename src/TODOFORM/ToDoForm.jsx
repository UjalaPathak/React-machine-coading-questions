import { faDiceOne } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "../TODOFORM/todoform.css";

function ToDoForm() {
  const [addItem, setAddItem] = useState("");
  const [value, setValue] = useState([]);
  const handleAddButton = () => {
    setValue((prev) => [
      ...prev,
      {
        text: addItem,
        done: false,
        isEdit: false,
      },
    ]);
    setAddItem("");
  };
  const handleCancel = (index) => {
    const data = value.filter((item, idx) => idx !== index);
    setValue(data);
  };

  const handleCheckbox = (index) => {
    value.map((item, index) =>
      setValue((prev) => [...prev, { text: item.text, done: !item.done }]),
    );
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={addItem}
          onChange={(e) => setAddItem(e.target.value)}
        />
        <button type="submit" onClick={handleAddButton}>
          Add
        </button>
      </div>
      <div className="">
        {value.map((item, idx) => (
          <div className="items" key={idx}>
            <input type="checkbox" onClick={() => handleCheckbox(idx)} />
            <p>{item.text}</p>
            <button onClick={() => handleCancel(idx)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoForm;
