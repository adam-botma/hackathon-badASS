import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Header(props) {
  const completedTasks = props.completed.taskIds.length;
  const totalTasks = Object.keys(props.tasks).length;
  let completedFraction = completedTasks / totalTasks;
  let completedPercentage = Math.round(completedFraction * 100);

  if (totalTasks === 0) {
    completedFraction = 0;
    completedPercentage = 0;
  }

  const [inputOpen, setInputOpen] = useState(false);
  const [project, setProject] = useState(props.project);
  const inputOrText = inputOpen ? (
    <form
      noValidate
      autoComplete="off"
      className="edit-project-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
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
      <div className="right-nav">
        <div className="badge-container">
          <img src={props.image} alt={props.image} />
        </div>
        <div className="progress-info">
          <div className="progress-number">
            <span>{`${completedPercentage}% completed`}</span>
          </div>
          <div className="progress-bar-container">
            <div
              style={{ width: `${completedFraction * 290}px` }}
              className="progress"
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}
