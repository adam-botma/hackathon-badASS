import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Header(props) {
  const [inputOpen, setInputOpen] = useState(false);
  const [project, setProject] = useState(props.project);

  const inputOrText = inputOpen ? (
    <form noValidate autoComplete="off" className="edit-project-form">
      <TextField
        id="standard-basic"
        defaultValue={project}
        onChange={(event) => {
          setProject(event.target.value);
        }}
      />
      <Button
        style={{ marginLeft: "2%" }}
        variant="contained"
        onClick={() => {
          props.editProject(project);
          setInputOpen(false);
        }}
      >
        Apply
      </Button>
    </form>
  ) : (
    <h2>{project}</h2>
  );

  return (
    <header>
      <div className="project-name">
        {inputOrText}
        <div className="edit-project-name">
          <EditIcon onClick={() => setInputOpen(true)} />
        </div>
      </div>
    </header>
  );
}
