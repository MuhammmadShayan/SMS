import Link from 'next/link'
import React from 'react'
import HeaderComponent from '@/components/HeaderComponent'

export default function Settings() {
  return (
    <div>
        <HeaderComponent
        title="Setting"
        subTitle="Add month or year"
        />
   <Link href="/month" style={{padding:"20px", margin:"20px", fontSize:"20Px"}}>Month</Link>
   <Link href="/year"style={{padding:"20px", margin:"20px", fontSize:"20px"}}>Year</Link>

    </div>
  )
}
