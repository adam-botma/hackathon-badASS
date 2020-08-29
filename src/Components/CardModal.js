import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: 8,
    padding: 32,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  root: {
    width: "100%",
    paddingBottom: 16
  }
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  const [open, setOpen] = React.useState(false);

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
          />
        </div>
        <div></div>
        <TextField
          className={classes.root}
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          variant="outlined"
        />
      </form>
      <DeleteOutlineIcon />
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
