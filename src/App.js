import React from "react";
import logo from "./logo.svg";
import "./App.css";
import KanbanColumn from "./Components/KanbanColumn.js";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      <KanbanColumn />
    </div>
  );
}

export default App;
