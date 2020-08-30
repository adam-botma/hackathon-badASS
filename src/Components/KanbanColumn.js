import React, { useState } from "react";
import CardModal from "./CardModal";
import { Droppable, Draggable } from "react-beautiful-dnd";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import Confetti from 'react-dom-confetti';

export default function KanbanColumn(props) {


  const [open, setOpen] = React.useState(false);
  const [inputOpen, setInputOpen] = useState(false);
  const [column, setColumn] = useState(props.column.title);
  const confettiConfig = {
    angle: "360",
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "803px",
    colors: ["#FFB75E", "#f65c51", "#7689f5"]
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const inputOrText = inputOpen ? (
    <form noValidate autoComplete="off" className="edit-column-form">
      <TextField
        id="standard-basic"
        defaultValue={column}
        onChange={(event) => {
          setColumn(event.target.value);
        }}
      />
      <Button
        style={{ marginLeft: "2%" }}
        className="edit-column-button"
        variant="contained"
        onClick={() => {
          props.editColumn(props.id, column);
          setInputOpen(false);
        }}
      >
        Apply
      </Button>
    </form>
  ) : (
    <h2>{column}</h2>
  );

  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          className="column"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="column-name-container" {...provided.dragHandleProps}>
            <div className="column-first-half">
              {inputOrText}
              <EditIcon onClick={() => setInputOpen(true)} />
              <DeleteOutlineIcon onClick={handleClickOpen} />
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Are you sure about this?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Deleting an entire column will result in deleting all of the
                    tasks within it as well.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    CANCEL
                  </Button>
                  <Button
                    onClick={() => {
                      props.deleteColumn(props.column.id);
                      handleClose();
                    }}
                    color="primary"
                    autoFocus
                  >
                    DELETE
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            <div className="column-badge">{props.tasks.length}</div>
          </div>
          <Droppable droppableId={props.column.id} type="task">
            {(provided, snapshot) => (
              <div
                className={
                  snapshot.isDraggingOver
                    ? " column-contents column-contents-drag"
                    : "column-contents"
                }
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {props.tasks.map((task, index) => (
                  <CardModal
                    deleteTask={props.deleteTask}
                    editTask={props.editTask}
                    currentColumn={props.column.id}
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
                     {props.column.id === 'column-3' ? <Confetti active={props.confetti} config={confettiConfig}/> :'' }
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
