import React from "react";
import KanbanColumn from "./KanbanColumn.js";

export default class KanbanBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ["Todo", "In Progress", "Done"],
      newColumn: "",
      formVisibility: "hidden",
    };
    this.addColumn = this.addColumn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleFormVisibility = this.toggleFormVisibility.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ newColumn: value });
  }

  addColumn(event) {
    event.preventDefault();
    const { name, newColumn } = this.state;
    let updatedColumns = name.push(newColumn);
    this.setState({ name: updatedColumns });
    console.log(this.state.name);
  }

  toggleFormVisibility() {
    if (this.state.formVisibility === "hidden") {
      this.setState({ formVisibility: "visible" });
    } else {
      this.setState({ formVisibility: "hidden" });
    }
  }

  render() {
    const { name, formVisibility } = this.state;

    let addButton = "+";
    if (formVisibility === "visible") {
      addButton = "x";
    }

    const columns = name.map((columnName, index) => {
      return <KanbanColumn key={index} name={columnName} />;
    });

    return (
      <div className="column-container">
        {columns}
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
    );
  }
}
