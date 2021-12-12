import React, {useContext} from 'react'
import {Context} from '../Context'

function Units() {
  const {chooseUnits} = useContext(Context)
  return (
    <div className="grid grid-center">  
      <div>
        <h1>Choose your units</h1>
        <div className="flex">
          <button tabindex="1" onClick={() => chooseUnits('imperial')}>Imperial</button>
          <button tabindex="2" onClick={() => chooseUnits('metric')}>Metric</button>
        </div>
      </div>
    </div>
  )
}

export default Units
