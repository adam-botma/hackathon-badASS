const initialData = {
  tasks: {
    'task-1': { id: 'task-1', title: 'take out garbage', content: 'it smells'  },
    'task-2': { id: 'task-2', title: 'play with dog',  content: 'he needs excercise' },
    'task-3': { id: 'task-3', title: 'charge phone', content: 'its dead' },
    'task-4': { id: 'task-4', title: 'finish the hackathon', content: 'team badASS 420' }
  },

  columns: {
    open: {
      id: 'open',
      title: 'open',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4',],
    },
    pending: {
      id: 'pending',
      title: 'pending',
      taskIds: [],
    },
    complete: {
      id: 'complete',
      title: 'complete',
      taskIds: [],
    }
  },
  columnOrder: ['open', 'pending', 'complete']
};

export default initialData;
