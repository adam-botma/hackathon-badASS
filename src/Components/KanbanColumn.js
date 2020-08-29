import React from "react";
import CardModal from "./CardModal";
import { Droppable, Draggable } from "react-beautiful-dnd";

export default function KanbanColumn(props) {
  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <div
          className="column"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="column-title" {...provided.dragHandleProps}>
            <h2>{props.column.title}</h2>
          </div>
          <Droppable droppableId={props.column.id} type="task">
            {(provided) => (
              <div
                className="column-contents"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {props.tasks.map((task, index) => (
                  <CardModal
                    editTask={props.editTask}
                    editContent={props.editContent}
                    key={task.id}
                    task={task}
                    index={index}
                  />
                ))}
                {provided.placeholder}
                <div className="task-btn-container">
                  <button
                    onClick={props.toggleNewTask}
                    className="add-task-btn"
                    id={props.id}
                  >
                    +
                  </button>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}
