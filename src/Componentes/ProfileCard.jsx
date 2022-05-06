import React from 'react'
import img from '../assets/ruddy-image.png'
import '../Componentes/ProfileCard.css'

function ProfileCard() {
    return (
        
      <div className='ProfileCard'>

            <div className='Menu-Card'>
          
                <div className='Card-Report'>
                    <img src={img} />
                    <div className='Report'>
                        <p>Report for</p>
                        <div className='Name'>Ruddy Flores</div>
                    </div>
                </div>

                <div className='Menu'>
                    <div className='menu-link'>
                        Daily
                    </div>
                    <div className='menu-active'>
                        Weekly
                    </div>
                    <div className='menu-link'>
                        Monthly
                    </div>
                </div>
                  
            </div>
              
      </div>
    )
  }
  
  export {ProfileCard}