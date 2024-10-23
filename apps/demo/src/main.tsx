import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
function setThemeClass() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  }
}

// Set the initial theme class
setThemeClass();

// Listen for changes in the color scheme preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setThemeClass);