import React, { useContext } from 'react'
import CompB from './CompB'
import { CounterContext } from './context/CounterContext'

export default function CompA() {

    const {count,handleadd} = useContext(CounterContext)
  return (
    <div>

        <h1>Comp A - {count} </h1>

        <button  onClick={handleadd} >Add</button>


<CompB/>
      
    </div>
  )
}
