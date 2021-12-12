import React, {useContext} from 'react'
import {Context} from '../Context'
import ImperialHeight from './ImperialHeight'
import MetricHeight from './MetricHeight'

function Height() {
  const {units} = useContext(Context)
  
  return (
    <div className="grid grid-center">
      <div>
        <h1>Enter your height</h1>
        {units === 'imperial' ? <ImperialHeight /> : <MetricHeight />}
      </div>
    </div>
  )
}

export default Height
