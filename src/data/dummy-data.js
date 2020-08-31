const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      title: "take out garbage",
      content: "it smells",
      image:
        "https://cdn.pixabay.com/photo/2017/09/08/18/20/garbage-2729608__340.jpg",
    },
    "task-2": {
      id: "task-2",
      title: "play with dog",
      content: "he needs excercise",
      image:
        "https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900",
    },
    "task-3": {
      id: "task-3",
      title: "charge phone",
      content: "its dead",
      image:
        "https://www.rd.com/wp-content/uploads/2019/07/shutterstock_592639394-760x506.jpg",
    },
    "task-4": {
      id: "task-4",
      title: "finish the hackathon",
      content: "team badASS 420",
      image:
        "https://image.freepik.com/free-vector/confetti-background_53876-63965.jpg",
    },
  },

  columns: {
    "column-1": {
      id: "column-1",
      title: "open",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
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
  columnOrder: ['column-1', 'column-2', 'column-3'],
  project: 'BadASS Kanban',
  welcomePage: true,
  levelImage: ''
};

export default initialData;
