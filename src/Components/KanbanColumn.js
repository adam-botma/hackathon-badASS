import React, { useState } from "react";
import CardModal from "./CardModal";
import { Droppable, Draggable } from "react-beautiful-dnd";
import EditIcon from "@material-ui/icons/Edit";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function KanbanColumn(props) {
  const [inputOpen, setInputOpen] = useState(false)
  const [column, setColumn] = useState(props.column.title)

  const inputOrText = inputOpen
    ? <form noValidate autoComplete="off" className="edit-column-form">
      <TextField
      id="standard-basic"
        defaultValue={column}
        onChange={(event) => {
          setColumn(event.target.value)
        }}
      />
      <Button className="edit-column-button" variant="contained" onClick={() => {
        props.editColumn(props.id, column)
        setInputOpen(false)
        }}>Apply</Button>
    </form>
    : <h2>{column}</h2>

  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <div
          className="column"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="column-name-container column-name" {...provided.dragHandleProps}>
            {inputOrText}
            <div className="edit-column-name">
              <EditIcon onClick={() => setInputOpen(true)}/>
            </div>
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
