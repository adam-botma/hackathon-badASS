import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    maxWidth: "400px",
    width: "75%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: 8,
    padding: "2rem",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  root: {
    width: "100%",
    paddingBottom: 16,
  },
}));

export default function NewTaskModal(props) {
  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
      <form
        onSubmit={props.addTask}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            className={classes.root}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={props.newTaskName}
            onChange={props.taskNameChange}
          />
        </div>
        <div></div>
        <TextField
          className={classes.root}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          value={props.newTaskDescription}
          onChange={props.taskDescriptionChange}
        />
        <input onChange={props.taskImageChange} type="file"></input>
        <br />
        <div style={{ textAlign: "center" }}>
          <button style={{ marginTop: "5%" }} type="submit">
            Add Task
          </button>
        </div>
      </form>
      <div onClick={props.toggleNewTask}>
        <DeleteOutlineIcon />
      </div>
    </div>
  );

  return (
    <Modal
      open={props.visibility}
      onClose={props.toggleNewTask}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}
