import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

export default function KanbanCard(props) {
  return (
    <Card className="card" variant="outlined" onClick={props.handleOpen}>
      <CardHeader title="Shrimp and Chorizo Paella" />
    </Card>
  );
}
