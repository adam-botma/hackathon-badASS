const initialData = {
  tasks: {},

  columns: {
    "column-1": {
      id: "column-1",
      title: "open",
      taskIds: [],
      color: "blue",
    },
    "column-2": {
      id: "column-2",
      title: "pending",
      taskIds: [],
      color: "yellow",
    },
    "column-3": {
      id: "column-3",
      title: "complete",
      taskIds: [],
      color: "red",
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
  project: "BadASS Kanban",
  welcomePage: true,
  levelImage: "",
};

export default initialData;
