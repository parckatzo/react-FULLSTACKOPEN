import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppCourses from './AppCourses'
import AppNotes from './AppNotes'
import AppNumbers from './AppNumbers'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppCourses/>
    <AppNotes/>
    <AppNumbers/>
  </React.StrictMode>,
)
