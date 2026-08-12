import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Must be imported before index.css: react-chrono's stylesheet contains global
// bare-element rules (`a`, `a:hover`) at the same specificity as ours, so whichever
// sheet loads last wins the tie. Importing it here — ahead of index.css — lets our
// styles win without needing !important on every element selector.
import 'react-chrono/dist/style.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
