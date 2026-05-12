import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { initGoogleAnalytics } from './utils/analytics.js'
import { injectJsonLdWebsite } from './utils/seo.js'

initGoogleAnalytics()
injectJsonLdWebsite()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
