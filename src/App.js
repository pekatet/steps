import './index.css'
import React, { useState } from 'react'
import AddForm from './AddForm'
import StepsList from './StepsList'
import StepsItemModel from './StepsItemModel'

function App() {
  const [steps, setSteps] = useState([])
  const handleAdd = stepsNew => {
    let stepsAdd = stepsNew;
    if (steps.find(s => s.date === stepsNew.date))
      stepsAdd = new StepsItemModel(stepsNew.date, parseInt(steps.find(s => s.date === stepsNew.date).distance) + parseInt(stepsNew.distance))
    setSteps(prevSteps => [...prevSteps.filter(s => s.date !== stepsNew.date), stepsAdd]);
  }
  const handleRemove = date => {setSteps(prevSteps => prevSteps.filter(s => s.date !== date))}
  return (
    <div className="App">
      <AddForm onAdd={handleAdd}/>
      <StepsList className="steps-list" steps={steps} handleRemove={handleRemove}/>
    </div>
  );
}

export default App;
