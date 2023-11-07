import React, { useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter((prev) => prev + 1)
  }

  const decrement = () => {
    if (counter < 1) return
    setCounter((prev) => prev - 1)
  }

  return (
    <div className="bg-blue-500 p-4 rounded-lg text-white text-center">
      <p className="text-2xl font-bold">Counter Component</p>
      <span className='mb-4 mt-4'>{counter}</span>
      <div className="flex items-center mt-4 justify-center">
        <button onClick={increment} className="bg-green-500 text-white px-4 py-2 rounded mr-4">Increment</button>
        <button onClick={decrement} className="bg-red-500 text-white px-4 py-2 rounded">Decrement</button>
      </div>
    </div>
  )
}

export default Counter
