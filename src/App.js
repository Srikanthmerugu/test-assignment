import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Library from './components/MyLibrary/MyLibrary';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css'
import MainComponent from './Pages/MainDashboard/MainDashboard';


const App = () => {
  return (
    <Router>
     {/* <Dashboard /> */}
  <MainComponent />
    </Router>
  )
}

export default App
