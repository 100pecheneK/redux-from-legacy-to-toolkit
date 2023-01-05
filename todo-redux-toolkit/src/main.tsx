import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import store from './store/store'
import { Root } from './Root'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>
)
