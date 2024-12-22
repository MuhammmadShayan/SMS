import React from 'react'

export default function componentE(props) {
  return (
    <div>componentE
        <h2>
            {props.name}
            {props.age}
            {props.city}
            {props.value}
        </h2>
    </div>
  )
}
