import React, { useEffect, useState } from "react";
import "./todolist.css";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

function ToDoListWrapper() {
  const [item, setItems] = useState([]);

  const addTodo = (list) => {
    setItems([
      ...item,
      { id: uuidv4(), task: list, isCompleted: false, isEditable: false },
    ]);
  };

  const handleCompleted = (index) => {
    setItems(
      item.map((value) =>
        value.id === index
          ? { ...value, isCompleted: !value.isCompleted }
          : value
      )
    );
  };

  const handleDelete = (index) => {
    setItems(item.filter((value) => value.id !== index));
  };

  const editTodo = (index) => {
    setItems(
      item.map((value) =>
        value.id === index
          ? { ...value, isEditable: !value.isCompleted }
          : value
      )
    );
  };

  const editTask = (task, index) => {
    console.log("task", task, index);
    setItems(
      item.map((value) =>
        value.id === index
          ? { ...value, task, isEditable: !value.isEditable }
          : value
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("task",)
  }, [item]);

  return (
    <div className="container">
      <h1>Get Things Done</h1>
      <TodoForm addTodo={addTodo} />
      {item.map((value, index) =>
        value.isEditable ? (
          <EditTodoForm todo={value} editTask={editTask} />
        ) : (
          <Todo
            todo={value}
            key={index}
            handleEditTask={editTodo}
            handleCompleted={handleCompleted}
            handleDelete={handleDelete}
          />
        )
      )}
    </div>
  );
}

export default ToDoListWrapper;
