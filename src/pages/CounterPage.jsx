import React, { useState } from 'react'

const CounterPage = () => {
    const [number, setNumber] = useState(0);
    const onIncrease = ()=>{

    }
    const onDecrease = ()=>{
        
    }
  return (
    <div className='counter-page'>
        <h1>{number}</h1>
        <div>
            <button onClick={onIncrease}>plus +1</button>
            <button onClick={onDecrease}>minus -1</button>
        </div>
    </div>
  )
}

export default CounterPage