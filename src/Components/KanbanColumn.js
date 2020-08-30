import React from "react";
import CardModal from "./CardModal";
import { Droppable, Draggable } from "react-beautiful-dnd";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function KanbanColumn(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <div
          className="column"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="column-name-container" {...provided.dragHandleProps}>
            <h2>{props.column.title}</h2>
            <div>
              <DeleteOutlineIcon onClick={handleClickOpen} />
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Are You sure about this?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Deleting an entire column will result in deleting all of the tasks within it as well.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    CANCEL
          </Button>
                  <Button onClick={()=> {
                    props.deleteColumn(props.column.id);
                    handleClose();
                    }
                    } color="primary" autoFocus>
                    DELETE
          </Button>
                </DialogActions>
              </Dialog>
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

                  <CardModal deleteTask={props.deleteTask}
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
