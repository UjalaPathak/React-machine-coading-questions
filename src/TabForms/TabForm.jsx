import React, { Component, useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";
import "./tabForm.css";
import { validate } from "uuid";

function TabForm() {
  const [data, setData] = useState({
    name: "ujala",
    age: "26",
    email: "ujalapathak921@gmail.com",
    interest: ["coading", "music", "Javscript"],
    theme: "dark",
  });

  const [error, setError] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  //config-driven-ui
  const tabs = [
    {
      name: "Profile",
      Component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not Valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not Valid needs to be grather then 18";
        }

        if (!data.email || data.email > 2) {
          err.name = "Email is not Valid";
        }
        setError(err);

        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      Component: Interest,
      validate: () => {
        const err = {};
        if (data.interest < 1) {
          err.interest = "Select atleast 1 interest";
        }
        setError(err);
        return err.interest ? false : true;
      },
    },
    {
      name: "Settings",
      Component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const handlePreviousClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab(activeTab - 1);
    }
  };
  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab(activeTab + 1);
    }
  };

  const ActiveTabComponent = tabs[activeTab].Component;
  return (
    <div>
      <div className="header-container">
        {tabs.map((item, index) => (
          <div
            key={index}
            className="header"
            onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} error={error} />
      </div>
      <div className="prev-next-button">
        {activeTab > 0 && <button onClick={handlePreviousClick}>Back</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === tabs.length - 1 && <button>Submit</button>}
      </div>
    </div>
  );
}

export default TabForm;
