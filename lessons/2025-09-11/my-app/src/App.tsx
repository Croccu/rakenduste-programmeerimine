import Counter from "./components/Counter/Counter"
import Profile from "./components/Profile/Profile"
import reactLogo from "./assets/react.svg"
import viteLogo from "./assets/vite.svg"
import Dice from "./components/Dice/Dice"

function App() {
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <img src={reactLogo} alt="React logo" width={80} height={80} />
        <img src={viteLogo} alt="Vite logo" width={80} height={80} />
      </div>
      <Counter/>
      <Profile/>
      <Dice/>
    </>
  )
}

export default App
