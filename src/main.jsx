import React from 'react'
import ReactDOM from 'react-dom/client'

// Imports Components
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App user="Martin" age={23}></App>
  </React.StrictMode>
)
