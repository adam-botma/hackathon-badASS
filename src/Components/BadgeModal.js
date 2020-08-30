import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

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
    marginHorizontal: "auto"
  },
  root: {
    width: "100%",
    paddingBottom: 16,
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  const body = (
    <div className={classes.paper}>
      <h1 className="badge-modal-header text-center">Congratulations, you've reached Level {props.level}!</h1>
      <div className="badge-image">
        <img src="logo192.png" alt="level-one-badge" />
      </div>
      <p className="badge-text text-center">Keep it up!</p>
    </div>
  );

  return (
    <Modal
      open={props.open}
      onClose={props.close}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}
