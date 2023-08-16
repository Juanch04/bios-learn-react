import React from 'react'
import ReactDOM from 'react-dom/client'

// Imports Components
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App user="Victor" age={30}></App>
  </React.StrictMode>
)
