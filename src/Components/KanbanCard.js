import React from "react";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";

export default function KanbanCard(props) {
  let image;
  if (props.image) {
    image = <img className="card-image" src={props.image} alt="task-img"></img>;
  }

  return (
    <Card className="card" variant="outlined" onClick={props.handleOpen}>
      <Typography variant="h6">{props.title}</Typography>
      {image}
    </Card>
  );
}
