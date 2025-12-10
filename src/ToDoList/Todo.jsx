import React from "react";
import EditTodoForm from "./EditTodoForm";
import "./todolist.css";

function Todo({ todo, handleCompleted, handleEditTask, handleDelete }) {
  return (
    <div className="todo-task">
      <span
        onClick={() => handleCompleted(todo.id)}
        className={`${todo.isCompleted ? "completed" : ""}`}
      >
        {todo.task}
      </span>
      <div>
        <button onClick={() => handleEditTask(todo.id)}>Edit</button>
        <button onClick={() => handleDelete(todo.id)}>x</button>
      </div>
    </div>
  );
}

export default Todo;
