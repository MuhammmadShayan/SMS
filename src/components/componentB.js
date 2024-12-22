'use client'
import React from 'react'

import ComponentC from '@/components/componentC'


const ComponentB = (props) => {
  return (
  
  <div>
      <h1>ComponentB    - {props.name} - {props.age}  {props.city} </h1>
  
        <ComponentC  name="Atif" age={17} city={"karachi"} value={props.value}/>
        </div>
  )
}

export default ComponentB