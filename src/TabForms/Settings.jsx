import React from "react";

function Settings({ data, setData }) {
  const { theme } = data;
  const handleChange = (e, item) => {
    setData((prevprop) => ({
      ...prevprop,
      theme: e.target.name,
    }));
  };
  return (
    <div>
      <div>
        <lable>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={(e) => handleChange(e, "dark")}
          />
          Dark
        </lable>
      </div>

      <div>
        <lable>
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={(e) => handleChange(e, "light")}
          />
          Light
        </lable>
      </div>
    </div>
  );
}

export default Settings;
