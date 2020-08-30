import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Header(props) {
  const completedTasks = props.completed.taskIds.length;
  const totalTasks = Object.keys(props.tasks).length;
  const completedFraction = completedTasks / totalTasks;
  const completedPercentage = Math.round(completedFraction * 100);

  const [inputOpen, setInputOpen] = useState(false);
  const [project, setProject] = useState(props.project);
  const inputOrText = inputOpen ? (
    <form noValidate autoComplete="off" className="edit-project-form">
      <div className="edit-project-input">
        <TextField
          id="standard-basic"
          defaultValue={project}
          onChange={(event) => {
            setProject(event.target.value);
          }}
        />
      </div>
      <Button
        mx={2}
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
      <div className="progress-info">
        <div className="progress-bar-container">
          <div
            style={{ width: `${completedFraction * 285}px` }}
            className="progress"
          ></div>
        </div>
        <span className="progress-number">{`${completedPercentage}% Completed`}</span>
      </div>
    </header>
  );
}
