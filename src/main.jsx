import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import App from './App'
import { PhaseProvider } from './phase'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PhaseProvider>
          <App />
        </PhaseProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
