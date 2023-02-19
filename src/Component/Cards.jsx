import React from 'react'
import './Cards.css'

 
const Cards = (props) => {
  return (
    <div className='CardMain'>
     <div className ='CardPic'><img class ='allImg' src = {props.image} alt=""/></div>
     <h3  className ='CardTag'>{props.CardName}</h3>
    </div>
  )
}

export default Cards