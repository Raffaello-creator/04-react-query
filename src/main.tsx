import { StrictMode } from 'react'
import { Toaster } from 'react-hot-toast';

import { createRoot } from 'react-dom/client'
import 'modern-normalize/modern-normalize.css';
import './index.css'
import App from './components/App/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster position="top-center" />
  </StrictMode>,
)
