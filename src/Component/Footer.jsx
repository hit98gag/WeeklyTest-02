import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='UpperDiv'>
        <div className='AboutUs'>
          <h3 className='h3Rep'>About Us</h3>
          <p> Support Center</p>
          <p> Customer Support </p>
          <p> About us</p>
          <p> Copyright </p>

        </div>
        <div className='OurInformation'>
        <h3  className='h3Rep'>Our Information</h3>

        <p> Return Policy</p>
          <p> Privacy Policy </p>
          <p> Terms & Condition</p>
          <p> Site Map </p>
        </div>
        <div className='MyAccount'>
        <h3 className='h3Rep'>My Account</h3>

        <p> Press Enquires</p>
          <p> Social Media </p>
          <p> directories</p>
          <p> Images & B-roll </p>
        </div>
        <div className='Contact'>
        <h3 className='h3Rep'>Contact</h3>

        <p> facebook</p>
          <p> Linkedin </p>
          <p> Instagram</p>
        </div>

        </div>

        <div className='LowerDiv'>
        <img className='Timage'
            src="https://www.urbansciencemep.com/_next/static/images/logo-535171e8abb5d5b989bb3a22b706e1c1.png"
            alt=""
          />
          <img className='Timage'
            src="https://www.urbansciencemep.com/_next/static/images/logo-535171e8abb5d5b989bb3a22b706e1c1.png"
            alt=""
          />
          <img className='Timage'
            src="https://www.urbansciencemep.com/_next/static/images/logo-535171e8abb5d5b989bb3a22b706e1c1.png"
            alt=""
          />
        </div>

    </div>
  )
}

export default Footer