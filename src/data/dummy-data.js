const initialData = {
  tasks: {
    'task-1': { id: 'task-1', title: 'take out garbage', content: 'it smells'  },
    'task-2': { id: 'task-2', title: 'play with dog',  content: 'he needs excercise' },
    'task-3': { id: 'task-3', title: 'charge phone', content: 'its dead' },
    'task-4': { id: 'task-4', title: 'finish the hackathon', content: 'team badASS 420' }
  },

  columns: {
    'column-1': {
      id: 'column-1',
      title: 'open',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      color: 'blue'
    },
    'column-2': {
      id: 'column-2',
      title: 'pending',
      taskIds: [],
      color: 'yellow'
    },
    'column-3': {
      id: 'column-3',
      title: 'complete',
      taskIds: [],
      color: 'red'
    }
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
  project: 'BadASS Kanban',
  welcomePage: true,
  levelImage: ''
};

export default initialData;
