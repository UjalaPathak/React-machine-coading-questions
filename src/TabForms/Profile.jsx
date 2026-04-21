import React from "react";

function Profile({ data, setData, error }) {
  const { name, age, email } = data;

  const handleChange = (e, item) => {
    setData((prevprop) => ({
      ...prevprop,
      [item]: e.target.value,
    }));
  };
  return (
    <div>
      <div>
        <lable>Name</lable>
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
      </div>
      {error.name && <span className="validation-text">{error.name}</span>}

      <div>
        <lable>Age</lable>
        <input
          type="age"
          value={age}
          onChange={(e) => handleChange(e, "age")}
        />
      </div>

      <div>
        <lable>Email</lable>
        <input
          type="email"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
      </div>
      {error.email && <span className="validation-text">{error.email}</span>}
    </div>
  );
}

export default Profile;
