import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

export default function KanbanCard() {
  return (
    <Card className="card" variant="outlined">
      <CardHeader title="Shrimp and Chorizo Paella" />
    </Card>
  );
}
