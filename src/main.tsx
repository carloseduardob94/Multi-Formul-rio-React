import React from 'react'
import ReactDOM from 'react-dom/client'
import Global from './Styles/global'
import { Router } from './Router/router'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global />
    <Router />
  </React.StrictMode>
)
