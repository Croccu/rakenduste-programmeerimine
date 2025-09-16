import { useState } from "react"
import "./counter.css"
import "../../App.css"


function Counter() {
  const [count, setCount] = useState(0)

  function incrementCounter() {
    setCount(count + 1)
  }

  function add100() {
    setCount(count + 100)
  }

  function add50() {
    setCount(count + 50)
  }

  function add25() {
    setCount(count + 25)
  }

  function reductCounter() {
    setCount(count - 1)
  }

  function reduct25() {
    setCount(count - 25)
  }

  function reduct50() {
    setCount(count - 50)
  }

  function reduct100() {
    setCount(count - 100)
  }

  function resetCounter() {
    setCount(0)
  }


  return (
    <>
      <h1>Vite + React</h1>
      <div className="card-counter">
      <h2>Count is {count}</h2>
        <div className="button-group" style={{ display: "flex", gap: "10px" }}>
          <div className="buttons">
            <button onClick={incrementCounter}>+1</button>
            <button onClick={add25}>+25</button>
            <button onClick={add50}>+50</button>
            <button onClick={add100}>+100</button>
          </div>
          <div className="buttons">
            <button onClick={reductCounter}>-1</button>
            <button onClick={reduct25}>-25</button>
            <button onClick={reduct50}>-50</button>
            <button onClick={reduct100}>-100</button>
          </div>
          <div className="button-reset">
            <button onClick={resetCounter} style={{backgroundColor: "darkred", fontSize: "medium"}}> Reset </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counter
