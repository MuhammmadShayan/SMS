import React, { useState } from 'react'
import ComponentD from './componentD'

const ComponentC = (props) => {
    
  return (
    <div>ComponentC
        <h1>
            componentC {props.name} - {props.age} - {props.city}
        </h1>
        <ComponentD name="bilal" age="23" city="berlin" value={props.value}/>
    </div>
  )
}

export default ComponentC