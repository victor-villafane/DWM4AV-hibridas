import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import TestUseEffect from './componentes/TestUseEffect.jsx'
// import Props from './componentes/Props'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TestUseEffect />
  </StrictMode>,
)
