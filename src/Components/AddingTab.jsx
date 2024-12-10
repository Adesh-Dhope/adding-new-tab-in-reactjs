import React, { useState } from "react";
import "./AddingTab.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([
    { label: "Javascript",content: "JavaScript used for web development to create interactive and dynamic user interfaces.", },
    { label: "Tailwindcss", content:"Tailwind CSS is a utility-first CSS framework that simplifies web development by providin",},
    { label: "Reactjs", content: "ReactJS is a powerful JavaScript library used for building user interfaces,",},
    { label: "MaterialUI", content:"Material-UI (MUI) is a popular React UI framework that provides.",},
  ]);
  const [newTab, setNewTab] = useState({ label: "", content: "" });
  const [isAddingTab, setIsAddingTab] = useState(false); // State to toggle the Add Tab form

  const handleAddTab = () => {
    if (newTab.label && newTab.content) {
      setTabs([...tabs, newTab]);
      setNewTab({ label: "", content: "" });
      setActiveTab(tabs.length); // Activate the new tab
      setIsAddingTab(false); // Hide the Add Tab form after adding a tab
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button  key={index}
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          > {tab.label}</button>
        ))}
        <button className="add-tab-button"
          onClick={() => setIsAddingTab(true)}>+ Add New Tab  </button>      
      </div>
      <div className="tabs-content">
        <p>{tabs[activeTab].content}</p>
      </div>
      {isAddingTab && (
        <div className="add-tab-form">
          <h3>Add New Tab</h3>
          <input
            type="text" placeholder="Tab Name"
            value={newTab.label} onChange={(e) => setNewTab({ ...newTab, label: e.target.value })}
          />
          <textarea
            placeholder="Tab Content"
            value={newTab.content}  onChange={(e) => setNewTab({ ...newTab, content: e.target.value })}
          />
          <button className="add-btn" onClick={handleAddTab}>Add Tab</button>
          <button onClick={() => setIsAddingTab(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Tabs;
