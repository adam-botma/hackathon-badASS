import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Typography } from "@material-ui/core";

export default function KanbanCard(props) {
  return (
    <Card className="card" variant="outlined" onClick={props.handleOpen}>
      <Typography variant="h6">{props.title}</Typography>
    </Card>
  );
}
