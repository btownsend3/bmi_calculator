import React, {useContext} from 'react'
import {Context} from '../Context'

function Results() {
  const {height, weight, units} = useContext(Context)
  const weightNum = parseInt(weight)
  const heightNum = parseInt(height)
  let bmi = calculateBMI()

  
  function calculateBMI() {
    if (units === 'imperial') {
      return (weightNum / (heightNum ** 2) * 703).toFixed(1)
    } else {
      return (weightNum / (heightNum * 100) ** 2).toFixed(1)
    }
  }

  function message() {
    if (bmi < 18.5) {
      return 'underweight'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'at a healthy weight'
    } else if (bmi >= 25 && bmi <= 29.9) {
      return 'overweight'
    } else {
      return 'obese'
    } 
  }

  return (
    <div className="grid grid-center">
      <div>
        <h1 className="center">Your BMI is: {bmi}</h1>
        <h2>Your result is indicative of being {message()}</h2>
      </div>
    </div>
  )
}

export default Results
