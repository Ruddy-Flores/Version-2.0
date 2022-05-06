import React from 'react'
import '../Componentes/DarkExercise.css'

function DarkExercise() {
    return (
        
      <div className='DarkExercise'>
            <div className='Property-Card'>
        
                 <div className='Row'>
                    <div className='Title'>
                        Exercise
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
  
  export {DarkExercise}