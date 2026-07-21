import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import App from './App'
import { PrototypeProvider } from './context/PrototypeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PrototypeProvider>
          <App />
        </PrototypeProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
