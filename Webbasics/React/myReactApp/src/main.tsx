import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import A7_2_App from "./A7.2_App.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <A7_2_App />
  </StrictMode>,
)
