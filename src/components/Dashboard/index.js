


import Header from '../Header'

import './index.css'
import Sidebar from '../Sidebar'
import RightSide from '../RightSide'
const Home = () => {

  return (
    <>
    
      <Header />
      <div className="home-container">
        
        <Sidebar />
        <RightSide />
      </div>
    </>
  )
}

export default Home
