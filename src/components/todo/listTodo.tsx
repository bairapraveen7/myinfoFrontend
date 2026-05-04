import { Button, Card, CircularProgress } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { WithConditional } from '../ui/WithConditional';
import { useGetTodos } from '../../queries/getAllTodos';
import { CustomizedSnackBar } from '../ui/CustomizedSnackBar';

interface Todo {
  id: string;
  title: string;
  description: string;
  status: string;
}

export const ListTodo: React.FC = () => {


  const {data, isError: getAllTodosError, isLoading, refetch } = useGetTodos();

  console.log("data is",data);

  return (
    <React.Fragment>
        <Button variant="contained" onClick={refetch} color="primary" sx={{ marginBottom: 2 }}>
        Get My Todos
    </Button>
    <WithConditional condition={isLoading == true}>
        <CircularProgress aria-label='Loading' />
    </WithConditional>
    <WithConditional condition={getAllTodosError}>
        <CustomizedSnackBar type="error" message="Error fetching todos" />
    </WithConditional>
    <WithConditional condition={isLoading == false && getAllTodosError == false}>
    <div className="todo-list">
      <h1>My Todos</h1>
      {data?.length === 0 ? (
        <p>No todos found</p>
      ) : (
        <ul>
          {data?.map((todo: Todo) => (
            <Card key={todo.id} variant="outlined" sx={{ marginBottom: 2, padding: 2 }}>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <p>Status: {todo.status}</p>
            </Card>
          ))}
        </ul>
      )}
    </div>
    </WithConditional>
    </React.Fragment>
  );
};

export default ListTodo;
