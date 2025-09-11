import { useState } from "react"
import "../App.css"


function Counter() {
  const [count, setCount] = useState(0)

  function incrementCounter() {
    setCount(count + 1)
  }

  function resetCounter() {
    setCount(0)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="buttons" style={{ display: "flex", gap: "10px" }}>
          <button onClick={incrementCounter}>
            count is {count}
          </button>
          <button onClick={resetCounter} style={{backgroundColor: "darkred", fontSize: "medium"}}> Reset </button>
        </div>
      </div>
    </>
  )
}

export default Counter
