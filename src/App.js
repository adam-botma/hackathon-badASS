import React from "react";
import "./App.css";
import KanbanColumn from "./Components/KanbanColumn.js";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="column-container">
        <KanbanColumn />
        <KanbanColumn />
        <KanbanColumn />
      </div>
    </div>
  );
}

export default App;
