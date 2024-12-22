'use client'
import ComponentA from '@/components/ComponentA'
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [value, setValue] = useState("ABCD")
  return (
    <div>
    <div>Understanding Component Page</div>

        <ComponentA name="Fahad" age={12} city="hyderabad" value={value}/>

    </div>

  )
}

export default page