import React from 'react'
import ReactDOM from 'react-dom'

import App from "./components/App/app.component";

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    document.body.appendChild(document.createElement('div'))
  )
})
