import React from 'react'

import './Header.css'


const Header = () => {
  return (
    <div className="Header">
      
      
     <div className="HeaderLeft"> <img class = 'logoImg' src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="" />
     </div>
     <div className="HeaderCenter"> 
     <p  className='Black'> Home </p>
     <p className='Black'> About </p>
     <p className='Black'> Project </p>
     <p className='Black'> Services </p>
     <p className='Black'> Blog </p>
     <p className='Black'> Contact </p>

     </div>
     <div className="HeaderRight">
      <button className='EnquireButton'> Enquire Now </button>
      </div>
    </div>
  )
}

export default Header