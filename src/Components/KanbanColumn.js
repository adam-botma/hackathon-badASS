import React from "react";
import CardModal from "./CardModal";

export default function KanbanColumn(props) {
  return (
    <div className="column">
      <div className="column-title">
        <h2>{props.column.title}</h2>
      </div>
      <div className="column-contents">
        { props.tasks.map(task => <CardModal key={task.id} task={task}/>) }
      </div>
    </div>
  );
}
