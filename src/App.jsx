import { useState } from "react";

import "./App.css";

import Pagination from "./assets/Pagination/Pagination";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TabForm from "./TabForms/TabForm";
import ToDoForm from "./TODOFORM/ToDoForm";
import SearchBar from "./SearchBar/SearchBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/tabForm" element={<TabForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
