import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputValue} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
