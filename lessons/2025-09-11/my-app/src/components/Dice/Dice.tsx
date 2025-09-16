import { useState } from "react"
import "./dice.css"

function Dice() {
  const [roll, setRoll] = useState<number | null>(null)

  function rollDice() {
    setRoll(Math.floor(Math.random() * 6) + 1) // replace, don’t add
  }

  return (
    <div className="card-dice">
      <h2>Täring</h2>
      <div className="die-face">{roll ?? "-"}</div>
      <button className="roll-btn" onClick={rollDice}>Veereta</button>
    </div>
  )
}

export default Dice
