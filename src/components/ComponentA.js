'use client'
import React from 'react'
import ComponentB from '@/components/componentB'

const ComponentA = (props) => {
  return (
    <div>

    <h1>ComponentA    - {props.name} - {props.age} - {props.city} </h1>

      <ComponentB name="ahmed" age={20} city={"hyderabad"} value={props.value}/>
      </div>
  )
}

export default ComponentA