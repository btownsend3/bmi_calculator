import React, {useContext} from 'react'
import { Context } from '../Context'

function Sex() {
  const {chooseSex} = useContext(Context)

  return (
    <div className="grid grid-center">
      <div>  
        <h1>Choose your Sex</h1>
        <div className="flex">
          <button onClick={() => chooseSex('female')}>Female</button>
          <button onClick={() => chooseSex('male')}>Male</button>
        </div>
      </div>  
    </div>
  )
}

export default Sex
