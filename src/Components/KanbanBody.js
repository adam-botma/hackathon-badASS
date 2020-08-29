import React from "react";
import KanbanColumn from "./KanbanColumn.js";

export default class KanbanBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ["Todo", "In Progress", "Done"],
    };
  }

  render() {
    const { name } = this.state;
    const columns = name.map((columnName, index) => {
      return <KanbanColumn id="index" name={columnName} />;
    });
    return <div className="column-container">{columns}</div>;
  }
}
