import React, { useState } from "react";
import "./todoForm.css";

export default function ToDoForm() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const handleAddData = (e) => {
    setData((prev) => [
      ...prev,
      { text: search, isCompleted: false, isEditable: false },
    ]);
    setSearch("");
  };
  console.log("data", data);

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
    setData(
      data.map((value, index) => {
        if (index === indexq) {
          return {
            ...value,
            isEditable: !value.isEditable,
          };
        }
        return value;
      }),
    );
  };

  const handleChange = (e, index1) => {
    const value = data.map((value, index) => {
      if (index === index1) {
        return {
          ...value,
          text: e.target.value,
        };
      } else {
        return value;
      }
    });
    setData(value);
  };

  const handleKeyDown = (e, index1) => {
    if (e.key == "Enter") {
      setData(
        data.map((value, index) => {
          if (index === index1) {
            return {
              ...value,
              isEditable: !value.isEditable,
            };
          } else {
            return value;
          }
        }),
      );
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
          data.map((value, index) => {
            console.log("value", value);
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  onChange={() => handleCompleted(index)}
                />
                {value.isEditable ? (
                  <input
                    type="text"
                    value={value.text}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ) : (
                  <span className={value.isCompleted ? "struck-out-text" : ""}>
                    {value.text}
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
