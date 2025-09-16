import Counter from "./components/Counter/Counter"
import Profile from "./components/Profile/Profile"
import reactLogo from "./assets/react.svg"
import viteLogo from "./assets/vite.svg"

function App() {
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <img src={reactLogo} alt="React logo" width={80} height={80} />
        <img src={viteLogo} alt="Vite logo" width={80} height={80} />
      </div>
      <Profile/>
      <Counter/>
    </>
  )
}

export default App
