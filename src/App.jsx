import { useState } from 'react'
import './App.css'
import StopwatchIndex from './components/StopWatchIndex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <StopwatchIndex />
    </div>
  )
}

export default App
