import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"


const Sidebar = () => {
  return (
    <div className='main-sidebar'>
        <div className='sidebar1'>
             <div className='sidebar-profile'>

             </div>
             <p>Sandeep Das</p>
        </div>
        <div className='sidebar2'>
             <ul className='sidebar-list1'>
                  <li id='1'>
                  <Link to="/profile" className="nav-link">
                  Profile
                
                   </Link>
                      
                  </li>
                  <li id='2'>
                  <Link to="/account" className="nav-link">
                  Account
                
                   </Link>
                    
                  </li>
                  <li id='3'>
                  <Link to="/settings" className="nav-link">
                  Settings
                
                   </Link>
                     
                  </li>
                  <li id='4'>
                  <Link to="/help" className="nav-link">
                  Help
                
                   </Link>
                   
                  </li>
                  <li id='5'>
                  <Link to="/reccomendation" className="nav-link">
                  Reccomendation
                
                   </Link>
                    
                  </li>
             </ul>
        </div>
        <div className='sidebar3'>
        <ul className='sidebar-list2'>
                  <li id='1'>
                      Feed Back
                  </li>
                  <li id='2'>
                    My Report
                  </li>
             </ul>
        </div>
    </div>
  )
}

export default Sidebar