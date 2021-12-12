import React, {useContext, useState, useEffect, useRef} from 'react'
import {Context} from '../Context'

function ImperialHeight() {
  const {setHeight, incrementStep} = useContext(Context)
  const [feet, setFeet] = useState(60)
  const [inches, setInches] = useState('')
  const inputRef = useRef()

  function focus() {
    inputRef.current.focus()
  }

  useEffect(() => {
    focus()
  })
  
  function handleSubmit() {
    let h = parseInt(feet) + parseInt(inches)
    setHeight(prev => h)
    incrementStep()
  }

  function handleFeet(val) {
    setFeet(prev => val)
  }

  function handleInches(val = 0) {
    setInches(prev => val)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <select value={feet} onChange={e => handleFeet(e.target.value)} name="feet" required>
            <option value="48">4ft</option>
            <option value="60">5ft</option>
            <option value="72">6ft</option>
            <option value="84">7ft</option>
          </select>
          <label>
            <input 
              ref={inputRef}
              type="number"
              name="inches"
              value={inches}
              placeholder="inches"
              onChange={e => handleInches(e.target.value)}
              required
            /> in
          </label>
        </div>
        <div className="flex">
          <button>Confirm</button>
        </div>
      </form>
    </div>
  )
}

export default ImperialHeight
