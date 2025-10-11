import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './WebVersion/Demo/Login.jsx'
import './index.css'
import './i18.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Login /> */}
  </React.StrictMode>
)

