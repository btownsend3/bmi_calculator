import React, {useContext, useEffect, useRef} from 'react'
import {Context} from '../Context'

function MetricHeight() {
  const {height, setHeight, incrementStep} = useContext(Context)
  const inputRef = useRef()

  function focus() {
    inputRef.current.focus()
  }

  useEffect(() => {
    focus()
  })
  
  function handleSubmit() {
    incrementStep()
  }

  function handleChange(val) {
    setHeight(prev => val)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <label>
            <input 
              ref={inputRef}
              type="number"
              name="centimeters"
              value={height}
              placeholder="centimeters"
              onChange={(e) => handleChange(e.target.value)}
              required
            /> cm
          </label>
        </div>
        <div className="flex">
          <button>Confirm</button>
        </div>
      </form>
    </div>
  )
}

export default MetricHeight
