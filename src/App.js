import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Library from './components/Library/Library';
import Dashboard from './components/Dashboard/Dashboard';


const App = () => {
  return (
    <Router>
     <Dashboard />
    </Router>
  )
}

export default App
