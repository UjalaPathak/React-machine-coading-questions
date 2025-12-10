import React, { useState } from "react";

function EditTodoForm({ todo, editTask }) {
  const [inputValue, setInputValue] = useState(todo.task);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(inputValue, todo.id);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputValue} />
      <button type="submit" onClick={editTask}>
        Update Task
      </button>
    </form>
  );
}

export default EditTodoForm;
