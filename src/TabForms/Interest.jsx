import React from "react";

function Interest({ data, setData }) {
  const { interest } = data;

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interest: e.target.checked
        ? [...prevState.interest, e.target.name]
        : prevState.interest.filter((i) => i !== e.target.name),
    }));
  };
  return (
    <div>
      <div>
        <lable>
          <input
            type="checkbox"
            name="coading"
            checked={interest.includes("coading")}
            onChange={handleChange}
          />
          Coading
        </lable>
      </div>

      <div>
        <lable>
          <input
            type="checkbox"
            name="music"
            checked={interest.includes("music")}
            onChange={handleChange}
          />
          Music
        </lable>
      </div>

      <div>
        <lable>
          <input
            type="checkbox"
            name="javascript"
            checked={interest.includes("javascript")}
            onChange={handleChange}
          />
          Javscript
        </lable>
      </div>
    </div>
  );
}

export default Interest;
