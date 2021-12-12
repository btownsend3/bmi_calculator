import React, {useContext} from 'react'
import {Context} from '../Context'
import ImperialWeight from './ImperialWeight'
import MetricWeight from './MetricWeight'

function Weight() {
  const {units} = useContext(Context)

  return (
    <div class="grid grid-center">
      <div>
        <h1>Enter your Weight</h1>
        {units === 'imperial' ? <ImperialWeight /> : <MetricWeight />}
      </div>
    </div>
  )
}

export default Weight
