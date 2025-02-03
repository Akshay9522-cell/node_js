import React from 'react'
import './About.css'
import bird from '../images/birds.jpg'

const About = () => {
  return (
    <div className='card1'>
      <div className='card'>
        <div><img src={bird} style={{height:'230px',width:'200px'}}/></div>
        <p className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam recusandae architecto veritatis ab illum officia inventore? Assumenda aliquid quam dolorum fugit quis, iusto adipisci cumque laboriosam consequuntur! Vero, alias molestias?</p>
        <button className='btn'>More</button>
      </div>
      <div className='card'>
        <div><img src={bird} style={{height:'230px',width:'200px'}}/></div>
        <p className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam recusandae architecto veritatis ab illum officia inventore? Assumenda aliquid quam dolorum fugit quis, iusto adipisci cumque laboriosam consequuntur! Vero, alias molestias?</p>
        <button className='btn'>More</button>
      </div>

      <div className='card'>
        <div><img src={bird} style={{height:'230px',width:'200px'}}/></div>
        <p className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam recusandae architecto veritatis ab illum officia inventore? Assumenda aliquid quam dolorum fugit quis, iusto adipisci cumque laboriosam consequuntur! Vero, alias molestias?</p>
        <button className='btn'>More</button>
      </div>
    </div>
  )
}

export default About
