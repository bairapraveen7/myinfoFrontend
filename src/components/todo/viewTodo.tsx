import React from 'react';

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const ViewTodo: React.FC = () => {
  const [todo, setTodo] = React.useState<Todo>({
    id: 1,
    title: 'Sample Todo',
    description: 'This is a sample todo item.',
    completed: false,
  });
  
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <p>Status: {todo.completed ? 'Completed' : 'Pending'}</p>
    </div>
  );
};

export default ViewTodo;