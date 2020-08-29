const initialData = {
  tasks: {
    1: { id: 1, title: 'take out gargae', content: 'it smells'  },
    2: { id: 2, title: 'play with dog',  content: 'he needs excercise' },
    3: { id: 3, title: 'charge phone', content: 'its dead' },
    4: { id: 4, title: 'finish the hackathon', content: 'team badASS 420' }
  },

  columns: {
    open: {
      id: 'open',
      title: 'open',
      taskIds: [1, 4, 2, 3,],
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
