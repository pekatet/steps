import './index.css'
import React, { Fragment } from 'react'

function StepsItem ({stepsDay, onRemove}) {
  const date = new Date(stepsDay.date).toLocaleDateString();
  return(
    <Fragment>
      <span>{date}</span>
      <span>{stepsDay.distance}</span>
      <button onClick={()=>onRemove(stepsDay.date)}>Удалить</button>
    </Fragment>
  )
}

export default StepsItem;