import React from 'react'
import '../Componentes/DarkPlay.css'

function DarkPlay() {
    return (
        
      <div className='Darkplay'>
            <div className='Property-Card'>
        
                 <div className='Row'>
                    <div className='Title'>
                        Play
                    </div>
                    <div className='Points'>
                        <div className='Point'></div>
                        <div className='Point'></div>
                        <div className='Point'></div>
                    </div>
                </div>
                <div className='Row-2'>
                    <div className='Hours'>10Hrs</div>
                    <div className='Description'>Last Week - 8Hrs</div>
                </div>
            </div>
      </div>
    )
  }
  
  export {DarkPlay}