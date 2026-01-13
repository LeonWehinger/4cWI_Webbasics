import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import A7_1_App from "./A7.1_App.tsx"
import A5_2_App from "./A5.2_App.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <A7_1_App />
  </StrictMode>,
)
