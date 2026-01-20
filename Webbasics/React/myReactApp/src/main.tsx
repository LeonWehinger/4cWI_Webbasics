import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import A8_App from "./A8_App.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <A8_App />
  </StrictMode>,
)
