import React from 'react';

const ViewTodo: React.FC = () => {
  const todo = {
    id: 1,
    title: 'Sample Todo',
    description: 'This is a sample todo item.',
    completed: false,
  }

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <p>Status: {todo.completed ? 'Completed' : 'Pending'}</p>
    </div>
  );
};

export default ViewTodo;