
import {Link} from 'react-router-dom'


import './index.css'

const Header = () => {
  



  return (
    <nav className="nav-header">
      <div className="nav-content">
        

        <div className="nav-bar-large-container">
          
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/youtube" className="nav-link">
                Youtube Page
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/contactus" className="nav-link">
                Contact Us
                
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/plan" className="nav-link">
                Plan
                
              </Link>
            </li>
            <li>
            <Link to="/profile">
              <div className='image-container'>
              <img
              className="website-logo"
              src=""
              alt=""
            />
              </div>
            
          </Link>
            </li>
          </ul>
          
        </div>
      </div>
     
    </nav>
  )
}

export default Header
