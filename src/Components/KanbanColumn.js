import React from "react";
import CardModal from "./CardModal";
import { Droppable } from 'react-beautiful-dnd';

export default function KanbanColumn(props) {
  return (
    <div className="column">
      <div className="column-title">
        <h2>{props.column.title}</h2>
      </div>
      <Droppable droppableId={props.column.id}>
        {(provided)=>(
          <div className="column-contents" ref={provided.innerRef} {...provided.droppableProps} >
            {props.tasks.map((task, index) => <CardModal key={task.id} task={task} index={index} />)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
