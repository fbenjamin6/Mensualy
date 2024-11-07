import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SubsContextProvider } from './context/SubsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SubsContextProvider>
      <App />
    </SubsContextProvider>
  </StrictMode>,
)
