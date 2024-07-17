import React from 'react'
import { useState } from 'react'
export default function Counter() {
    const[count, setCount]=useState(0)
  function handleClickDown()
  {
    setCount((prev)=>prev-1)
  }
  function handleClickUp()
  {
    setCount((prev)=>prev+1)
  }
  return (
    <div className='first_app'>
      <h1 className='h1_counter'>Counter</h1>
      <div className="counter">{count}</div>
      <div className="buttons">
      <button onClick={handleClickUp}className='up_button'>Плюс</button>
      <button onClick={handleClickDown}className='down_button'>Минус</button>
      </div>
      <hr />
    </div>
  )
}
