import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import A2_App from "./A2_App.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <A2_App />
  </StrictMode>,
)
