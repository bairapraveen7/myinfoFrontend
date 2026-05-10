import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAddTodoMutation } from '../../queries/addTodo';
import type { BodyProps } from '../../queries/types';

const AddTodo: React.FC = () => {
  const [todo,setTodo] = useState<BodyProps>({
    title: '',
    description: '',
    status: 'pending'
  })

  const addTodoMutation = useAddTodoMutation();

  const handleAddTodo = () => {
    addTodoMutation.mutate({body: todo},
       {
        onSuccess: (data) => {
            setTodo({
                title: '',
                description: '',
                status: 'pending'
            });
            console.log("Todo added successfully",data)
        },
        onError: (error) => {
            console.error("Error adding todo:", error);
        }
       } 
    )
  }

  return (
    <React.Fragment>
   <TextField label="Add Todo" variant="outlined" fullWidth value={todo.title} onChange={(e) => setTodo({...todo, title: e.target.value})} />
   <TextField label="Description" variant="outlined" fullWidth value={todo.description} onChange={(e) => setTodo({...todo, description: e.target.value})} />
    <FormControlLabel control={<Checkbox />} label="Label" />
    <Button variant="contained" color="primary" onClick={() => handleAddTodo()}>
      Add Todo
    </Button>
    </React.Fragment>
  );
};

export default AddTodo;
