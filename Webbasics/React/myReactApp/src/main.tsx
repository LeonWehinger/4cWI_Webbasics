import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import A5_1_App from "./A5.1_App.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <A5_1_App />
  </StrictMode>,
)
