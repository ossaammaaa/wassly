import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import Bootstrap CSS
// import 'bootstrap/dist/css/bootstrap.min.css';

// import './index.css'
import App from './App.jsx'
import Footer from './components/footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
