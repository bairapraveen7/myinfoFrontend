import './App.css'
import { createTheme, Grid, ThemeProvider } from '@mui/material'
import AddTodo from './components/todo/addTodo'
import ListTodo from './components/todo/listTodo'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SnackbarProvider } from 'notistack'
import { Portfolio } from './components/portfolio'

function App() {

  const theme = createTheme({
    palette:{
      primary: {
        main: '#1976d2'
      },
      secondary: {
        main: '#dc004e'
      }
    },
    typography: {
      fontFamily: 'Arial',
      fontSize: 16
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: 'Arial'
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none'
          }
        }
      }
    }
  })

  return (
  
    <ThemeProvider theme={theme}>
    <SnackbarProvider>
    <QueryClientProvider client={new QueryClient()}>
    <Portfolio />
    </QueryClientProvider>
    </SnackbarProvider>
    </ThemeProvider>
         
    
  )
}

export default App
