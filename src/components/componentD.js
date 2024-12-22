import React from 'react'
import ComponentE from './componentE'

const ComponentD = (props) => {
  return (
    <div>ComponentD
        <h2>componentD
            {props.name} - {props.age} - {props.city}
        </h2>
        <ComponentE name="zaviyar" age="25" city="newyork" value={props.value}/>
    </div>
  )
}

export default ComponentD