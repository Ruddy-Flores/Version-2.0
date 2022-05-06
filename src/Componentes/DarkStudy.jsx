import React from 'react'
import '../Componentes/DarkStudy.css'

function DarkStudy() {
    return (
        
      <div className='DarkStudy'>
            <div className='Property-Card'>
        
                 <div className='Row'>
                    <div className='Title'>
                        Study
                    </div>
                    <div className='Points'>
                        <div className='Point'></div>
                        <div className='Point'></div>
                        <div className='Point'></div>
                    </div>
                </div>
                <div className='Row-2'>
                    <div className='Hours'>4Hrs</div>
                    <div className='Description'>Last Week - 7Hrs</div>
                </div>
            </div>
      </div>
    )
  }
  
  export {DarkStudy}