import React from "react";
import "./App.css";
import Header from "./Components/Header";
import initialData from "./data/dummy-data";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import KanbanColumn from "./Components/KanbanColumn";
import NewTaskModal from "./Components/NewTaskModal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialData,
      newColumn: "",
      formVisibility: "hidden",
      newTaskVisibility: false,
      newTaskName: "",
      newTaskDescription: "",
      newTaskColumnId: "null",
    };
    this.addColumn = this.addColumn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleFormVisibility = this.toggleFormVisibility.bind(this);
    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.editContent = this.editContent.bind(this);
    this.editColumn = this.editColumn.bind(this);
    this.editProject = this.editProject.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.taskNameChange = this.taskNameChange.bind(this);
    this.taskDescriptionChange = this.taskDescriptionChange.bind(this);
    this.toggleNewTask = this.toggleNewTask.bind(this);
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder,
      };
      this.setState(newState);
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    // Moving tasks within the same column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    // Moving tasks between columns
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };

  handleChange(event) {
    const value = event.target.value;
    this.setState({ newColumn: value });
  }

  taskNameChange(event) {
    const value = event.target.value;
    this.setState({ newTaskName: value });
  }

  taskDescriptionChange(event) {
    const value = event.target.value;
    this.setState({ newTaskDescription: value });
  }

  addColumn(event) {
    event.preventDefault();
    const { columnOrder, newColumn } = this.state;

    //Addint to columnOrder
    let newColumnOrder = columnOrder.slice();
    newColumnOrder.push(newColumn);

    //Adding to columns

    this.setState((state) => ({
      ...state,
      columns: {
        ...state.columns,
        [newColumn]: {
          id: newColumn,
          title: newColumn,
          taskIds: [],
        },
      },
      columnOrder: newColumnOrder,
    }));
  }

  toggleNewTask(event) {
    if (!this.state.newTaskVisibility) {
      this.setState({
        newTaskVisibility: true,
        newTaskColumnId: event.target.id,
      });
    } else {
      this.setState({
        newTaskVisibility: false,
        newTaskColumnId: "null",
        newTaskName: "",
        newTaskDescription: "",
      });
    }
  }

  addTask(event) {
    event.preventDefault();
    const { newTaskName, newTaskDescription, newTaskColumnId } = this.state;

    //add to tasks
    let newTaskId = `task-${Object.keys(this.state.tasks).length + 1}`;

    //Add taskId to proper column
    let columns = { ...this.state.columns };
    let updatedColumnTaskIds = columns[newTaskColumnId].taskIds.slice();
    updatedColumnTaskIds.push(newTaskId);

    //updating tasks and column taskIds array
    this.setState((state) => ({
      ...state,
      tasks: {
        ...state.tasks,
        [newTaskId]: {
          id: newTaskId,
          title: newTaskName,
          content: newTaskDescription,
        },
      },
      columns: {
        ...state.columns,
        [newTaskColumnId]: {
          id: newTaskColumnId,
          title: newTaskColumnId,
          taskIds: updatedColumnTaskIds,
        },
      },
      newTaskVisibility: false,
      newTaskName: "",
      newTaskDescription: "",
      newTaskColumnId: "null",
    }));
  }

  editTask(id, newTask) {
    this.setState((state) => ({
      ...state,
      tasks: {
        ...state.tasks,
        [id]: {
          ...state.tasks[id],
          title: newTask,
        },
      },
    }));
  }

  editContent(id, newContent) {
    this.setState((state) => ({
      ...state,
      tasks: {
        ...state.tasks,
        [id]: {
          ...state.tasks[id],
          content: newContent,
        },
      },
    }));
  }

  editColumn(id, columnName) {
    this.setState((state) => ({
      ...state,
      columns: {
        ...state.columns,
        [id]: {
          ...state.columns[id],
          id: columnName,
          title: columnName,
        },
      },
    }));
  }

  editProject(projectName) {
    this.setState((state) => ({
      ...state,
      project: projectName,
    }));
  }

  deleteTask(id, column) {
    let currentTasks = Object.assign({}, this.state.tasks);
    delete currentTasks[id];

    const columnTasks = Array.from(this.state.columns[column].taskIds);
    const indexToDelete = columnTasks.indexOf(id);
    columnTasks.splice(indexToDelete, 1);

    const updatedState = {
      ...this.state,
      tasks: currentTasks,
      columns: {
        ...this.state.columns,
        [column]: {
          ...this.state.columns[column],
          taskIds: columnTasks,
        },
      },
    };

    this.setState(updatedState);
  }

  toggleFormVisibility() {
    if (this.state.formVisibility === "hidden") {
      this.setState({ formVisibility: "visible" });
    } else {
      this.setState({ formVisibility: "hidden" });
    }
  }

  render() {
    const { formVisibility } = this.state;
    let addButton = "+";
    if (formVisibility === "visible") {
      addButton = "x";
    }

    return (
      <div>
        <Header project={this.state.project} editProject={this.editProject} />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="columns" direction="horizontal" type="column">
            {(provided) => (
              <div
                className="column-container"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {this.state.columnOrder.map((columnId, index) => {
                  const column = this.state.columns[columnId];
                  const tasks = column.taskIds.map(
                    (taskId) => this.state.tasks[taskId]
                  );

                  return (
                    <KanbanColumn
                      deleteTask={this.deleteTask}
                      id={column.id}
                      editTask={this.editTask}
                      editColumn={this.editColumn}
                      editContent={this.editContent}
                      key={columnId}
                      id={columnId}
                      column={column}
                      tasks={tasks}
                      index={index}
                      toggleNewTask={this.toggleNewTask}
                    />
                  );
                })}
                {provided.placeholder}
                <div className="add-col">
                  <button
                    onClick={this.toggleFormVisibility}
                    className="add-column-btn"
                  >
                    {addButton}
                  </button>
                  <div style={{ visibility: formVisibility }}>
                    <form
                      className="add-column-form text-center"
                      onSubmit={this.addColumn}
                    >
                      <label htmlFor="column-name">Column Name</label> <br />
                      <input
                        name="column-name"
                        type="text"
                        id="column-name"
                        value={this.state.newColumn}
                        onChange={this.handleChange}
                      ></input>
                      <button type="submit">Enter</button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <NewTaskModal
          addTask={this.addTask}
          newTaskName={this.state.newTaskName}
          taskNameChange={this.taskNameChange}
          newTaskDescription={this.newTaskDescription}
          taskDescriptionChange={this.taskDescriptionChange}
          toggleNewTask={this.toggleNewTask}
          visibility={this.state.newTaskVisibility}
        />
      </div>
    );
  }
}

export default App;
