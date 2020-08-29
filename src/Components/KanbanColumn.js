import React from "react";
import KanbanCard from "./KanbanCard";

export default function KanbanColumn(props) {
  return (
    <div className="column">
      <div className="column-title">
        <h2>{props.name}</h2>
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
