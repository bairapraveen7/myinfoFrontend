import './App.css'
import { createTheme, ThemeProvider } from '@mui/material'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SnackbarProvider } from 'notistack'
import { Portfolio } from './components/portfolio'

export interface themeProps {
   palette:{
    primary:{
      main:string;
    },
    secondary:{
      main:string;
    },
    teritary: {
      main: string
    }
   },
   typography:{
    fontFamily: string;
    fontSize: number;
   },
   components:{
    MuiCssBaseline:{
      styleOverrides:{
        body:{
          fontFamily: string
        }
      }
    },
    MuiButton: {
        styleOverrides: {
          root: {
            textTransform: string;
          }
        }
      }

   }
}
function App() {

  const theme = createTheme({
    palette:{
      primary: {
        main: '#1976d2'
      },
      secondary: {
        main: '#ffffff'
      },
      tertiary: {
        main: '#dedede'
      },
      background: {
        paper: '#f8f3ec'
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
