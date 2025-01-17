
import React from 'react'
import './Dashboard.css'
import Sidebar from '../Sidebar/Sidebar'
import Library from '../Library/Library'
import Header from '../Header/Header'

const Dashboard = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
    <div className='Dashboard-container'>
        <div>  <Sidebar /></div>
        <div className='Dashboard-sub-container'> 
        <div> <Library /> </div>
        {/* <div> <Library /> </div> */}
        
         </div>
        
    
     
    </div>
    </div>
  )
}

export default Dashboard
