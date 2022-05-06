import React from 'react'
import '../Componentes/DarkSelfCare.css'

function DarkSelfCare() {
    return (
        
      <div className='DarkSelfCare'>
            <div className='Property-Card'>
        
                 <div className='Row'>
                    <div className='Title'>
                    Self Care
                    </div>
                    <div className='Points'>
                        <div className='Point'></div>
                        <div className='Point'></div>
                        <div className='Point'></div>
                    </div>
                </div>
                <div className='Row-2'>
                    <div className='Hours'>4Hrs</div>
                    <div className='Description'>Last Week - 5Hrs</div>
                </div>
            </div>
      </div>
    )
  }
  
  export {DarkSelfCare}