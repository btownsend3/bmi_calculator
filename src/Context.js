import React, {useState} from 'react'
const Context = React.createContext()

function ContextProvider(props) {
  const [sex, setSex] = useState('')
  const [units, setUnits] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [results, setResults] = useState('')
  const [step, setStep] = useState(1)

  function chooseSex(sex) {
    setSex(prev => sex)
    incrementStep()
  }

  function chooseUnits(unit) {
    setUnits(prev => unit)
    incrementStep()
  }

  function incrementStep() {
    setStep(prev => prev + 1)
  }

  return (
    <Context.Provider value={{chooseSex, sex, chooseUnits, units, height, setHeight, weight, setWeight, results, setResults, step, incrementStep}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}
