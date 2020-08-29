import React from "react";
import KanbanCard from "./KanbanCard";

export default function KanbanColumn() {
  return (
    <div className="column">
      <div className="column-title">
        <h2>Open</h2>
      </div>
      <div className="column-contents">
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
      </div>
    </div>
  );
}
