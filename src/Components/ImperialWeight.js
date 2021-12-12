import React, {useContext, useRef, useEffect} from 'react'
import {Context} from '../Context'

function ImperialWeight() {
  const {weight, setWeight, incrementStep} = useContext(Context)
  const inputRef = useRef()

  function focus() {
    inputRef.current.focus()
  }

  useEffect(() => {
    focus()
  })

  function handleSubmit(e) {
    e.preventDefault()
    incrementStep()
  }

  function handleChange(val) {
    setWeight(prev => val)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <label>
            <input 
              ref={inputRef}
              type="number"
              name="weight"
              value={weight}
              onChange={(e) => handleChange(e.target.value)}
              required
            /> lbs
          </label>
        </div>
        <div className="flex">
          <button>Confirm</button>  
        </div>
      </form> 
    </div>
  )
}

export default ImperialWeight
