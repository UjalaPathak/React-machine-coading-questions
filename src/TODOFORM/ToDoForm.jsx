import React, { useState } from "react";
import "./todoForm.css";

export default function ToDoForm() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [editValue, setEditValue] = useState();
  const handleAddData = (e) => {
    setData((prev) => [
      ...prev,
      { text: search, isCompleted: false, isEditable: false },
    ]);
    setSearch("");
  };

  const handleCrossButton = (index1) => {
    const value = data.filter((value, index) => index !== index1);
    setData(value);
  };

  const handleCompleted = (index1) => {
    setData(
      data.map((value, index) => {
        if (index === index1) {
          return {
            ...value,
            isCompleted: !value.isCompleted,
          };
        }
        return value;
      }),
    );
  };
  const handleEditButton = (indexq) => {
    const value = data.map((item, index) => {
      if (index == indexq) {
        return {
          ...item,
          isEditable: !item.isEditable,
        };
      } else {
        return item;
      }
    });
    setData(value);
  };

  const handleChange = (e, indexq) => {
    const value = data.map((item, index) => {
      if (index === indexq) {
        return {
          ...item,
          text: e.target.value,
        };
      } else {
        return item;
      }
    });
    console.log("value", value);
    setData(value);
  };

  const handleKeyDown = (e, indexq) => {
    if (e.key == "Enter") {
      const value = data.map((item, index) => {
        if (indexq == index) {
          return {
            ...item,
            text: e.target.value,
            isEditable: !item.isEditable,
          };
        } else {
          return item;
        }
      });
      setData(value);
    }
  };

  return (
    <div>
      <h1>ToDoForm</h1>
      <div>
        <input
          type="serach"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={(e) => handleAddData(e)}>Add</button>
      </div>
      <div>
        {data &&
          data.map((value1, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  onChange={() => handleCompleted(index)}
                />
                {value1.isEditable ? (
                  <input
                    type="text"
                    value={value1.text}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ) : (
                  <span className={value1.isCompleted ? "struck-out-text" : ""}>
                    {value1.text}
                  </span>
                )}{" "}
                <button onClick={() => handleEditButton(index)}>Edit</button>
                <button onClick={() => handleCrossButton(index)}>X</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
