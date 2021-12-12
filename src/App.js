import React, {useContext} from 'react'
import {Context} from './Context'
import Sex from './Components/Sex'
import Units from './Components/Units'
import Height from './Components/Height'
import Weight from './Components/Weight'
import Results from './Components/Results'


function App() {
  const {step} = useContext(Context)
  console.log(step)
  let component
  switch (step) {
    case 1:
      component = <Sex />
      break
    case 2:
      component = <Units />
      break
    case 3:
      component = <Height />
      break
    case 4:
      component = <Weight />
      break
    case 5:
      component = <Results />
      break
    default:
      component = null
  }
  return (
   <div>
     <div className="flex">
      <h1 className="absolute">Adult BMI Calculator</h1>
     </div>
    {component}
   </div> 
  )
}

export default App
