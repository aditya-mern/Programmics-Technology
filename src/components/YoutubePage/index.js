


import Header from '../Header'
import InnerNav from '../InnerNav'
import TextBox from '../TextBox'
import './index.css'

const Home = () => {

  return (
    <>
    
      <Header />
      <div className="home-container">
       
      <div className='right-side2'>
      <InnerNav />
      <div className='main-box'>
        <div className='inner-box1'>
            <div className='box1'>
               
            </div>
            <h2>Heading Heading Heading Heading </h2>
            <p>paragraph paragraph paragraph paragraph paragraph</p>
            <p>paragraph paragraph paragraph paragraph paragraph</p>
        </div>
        
        <div className='inner-box2'>
             <TextBox />
             <TextBox />
             <TextBox />
             <TextBox />
             <TextBox />
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Home

