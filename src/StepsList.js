import './index.css'
import React from 'react'
import StepsItem from './StepsItem'

function StepsList ({steps, handleRemove}) {
  return(
    <div className="steps-list">
      <span>Дата (ДД.ММ.ГГ)</span><span>Пройдено км</span><span>Действия</span>
      {steps
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).reverse()
        .map(s => <StepsItem key={s.date} stepsDay={s} onRemove={handleRemove}/>)}
    </div>
  )
}

export default StepsList;

