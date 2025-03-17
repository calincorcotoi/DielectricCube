import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://dielectriccube.com" target="_blank">
          <img src="/path/to/dielectriccube-logo.svg" className="logo" alt="DielectricCube logo" />
        </a>
      </div>
      <h1>Welcome to DielectricCube</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the DielectricCube logo to learn more
      </p>
    </>
  )
}

export default App
