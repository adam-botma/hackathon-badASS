import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import KanbanCard from "./KanbanCard";
import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: 8,
    padding: 32,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  root: {
    width: "100%",
    paddingBottom: 16,
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  const [open, setOpen] = React.useState(false);

  // console.log(props.title)

  // console.log(props.task.title)

  const [title, setTitle] = React.useState(props.task.title);
  const [content, setContent] = React.useState(props.task.content);

  const completedCheck = props.currentColumn === 'column-3';

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            className={classes.root}
            id="outlined-basic"
            label="Insert Title"
            variant="outlined"
            defaultValue={title}
            onChange={(event) => {
              setTitle(event.target.value);
              props.editTask(props.task.id, event.target.value);
            }}
          />
        </div>
        <div></div>
        <TextField
          className={classes.root}
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue={content}
          variant="outlined"
          onChange={(event) => {
            setContent(event.target.value);
            props.editContent(props.task.id, event.target.value);
          }}
        />
      </form>
      <DeleteOutlineIcon onClick={()=> props.deleteTask(props.task.id, props.currentColumn)}/>
    </div>
  );

  return (
    <Draggable draggableId={props.task.id} index={props.index} isDragDisabled={completedCheck}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}

        >
          <KanbanCard handleOpen={handleOpen} title={props.task.title} />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
      )}
    </Draggable>
  );
}
