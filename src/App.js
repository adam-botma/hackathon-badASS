import React from "react";
import "./App.css";
import KanbanColumn from "./Components/KanbanColumn.js";
import Header from "./Components/Header";
import initialData from './data/dummy-data'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialData;
  }

  render() {
    return (
      <div>
        <Header />
        <div className="column-container">
         {this.state.columnOrder.map(columnId => {
           const column = this.state.columns[columnId];
           const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

          return <KanbanColumn key={column.id} column={column} tasks={tasks}/>;
         })}
        </div>
      </div>
    );
  }
}

export default App;
