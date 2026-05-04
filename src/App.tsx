import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Grid } from '@mui/material'
import AddTodo from './components/todo/addTodo'
import ListTodo from './components/todo/listTodo'
import ViewTodo from './components/todo/viewTodo'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SnackbarProvider } from 'notistack'

function App() {

  return (
  
    <SnackbarProvider>
    <QueryClientProvider client={new QueryClient()}>
    <Grid container spacing={2}>
      <Grid size={6}>
        <AddTodo />
      </Grid>
      <Grid size={6}>
        <ListTodo />
      </Grid>
    </Grid>
    </QueryClientProvider>
    </SnackbarProvider>
         
    
  )
}

export default App
